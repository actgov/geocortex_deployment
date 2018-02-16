import argparse
import logging
import os.path
import shutil
import sys
import time
import yaml

from datetime import datetime
from distutils import dir_util

from config_xml_patch import patch_xml
from config_json_patch import patch_json

BUILD_HTML5_VIEWER_DIR_NAME = "html5viewer"
BUILD_SITE_DIR_NAME = "site"


def main():
    """Entry point to the porgram"""
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('environment', type=str, help="the environment to deploy to")
    arg_parser.add_argument('sites', type=str, help="the sites to deploy to")
    args = arg_parser.parse_args()
    sites = args.sites
    environment = args.environment.lower()

    # Set environment
    config = load_yml("config." + environment + ".yml")
    config["root_dir"] = "workspace"
    config["environment"] = environment
    config["patching_config"] = load_yml("data/patch_json.yml")
    logger = init_logger(config)
    try:
        make_build_dirs(config, logger)
        sites_to_deploy = [site.replace(" ", "") for site in sites.split(",")]
        copy_sites_from_template(sites_to_deploy, config, logger)

        for site in sites_to_deploy:
            patch_site_xml(site, config, logger) # Changes to the site xml
            patch_json(site, config, logger) # Changes to the json configuration
            deploy_site_to_server(site, config, logger)

        # Deploy additional geocortex esstential site files to servers
        for server_config in config["target_servers"]:
            logging.info("Copy additional geocortex site files (workflows, reports, resouces)")
            copy_geocortex_site_files_to_server(server_config, logger)

        logger.info("Deployment complete")
    except Exception as e:
        log_error(logger, e)
        raise e


def log_error(logger, error):
    """Log exception"""
    exc_type, exc_obj, exc_tb = sys.exc_info()
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    logger.error("Exception at line:%s in %s", exc_tb.tb_lineno, fname)
    logger.error(error)


def load_yml(config_file):
    """Load the application conifguration file"""
    stream = file(config_file, 'r')
    return yaml.load(stream)

def patch_site_xml(site, config, logger):
    """Update the site definition xml file to reflect the new configuration"""
    logger.info("Patching Site.xml for site '%s'", site)
    src_site_xml_path = os.path.join("data/Sites", site, "Site.xml")
    target_site_xml_path = os.path.join(config["build_site_dir"], site, "Site.xml")
    xslt_template_path = os.path.join("data", "site." + config["environment"] + ".xslt")

    if not os.path.exists(xslt_template_path):
        raise IOError("Missing " + xslt_template_path)

    patch_xml(src_site_xml_path, xslt_template_path, target_site_xml_path)
    logger.info("Patching Site.xml completed")


def backup_existing_deployed_site(site_name, server_config, logger):
    """Backup the existing site directory"""
    existing_site = os.path.join(server_config["geocortex_sites_root"], site_name)
    if not os.path.exists(existing_site): # There is no existing site
        logger.info("No existing site %s at server %s", site_name, server_config["name"])
        return

    backup_dir = os.path.join(server_config["geocortex_sites_backup_location"])
    if not os.path.exists(backup_dir):
        dir_util.mkpath(backup_dir)

    backup_name_suffix = "-backup-" + \
                            datetime.utcnow().isoformat("-").replace(".", "").replace(":", "")
    shutil.move(existing_site, os.path.join(backup_dir, site_name + backup_name_suffix))

    logger.info("Backup existing site %s", site_name)


def deploy_site_to_server(site, config, logger):
    """Deploy the site to the specified geocortex server"""

    for server_config in config["target_servers"]:
        logging.info("Deploying site '%s' to geocortex server '%s'", site, server_config["name"])

        backup_existing_deployed_site(site, server_config, logger)
        target_sites_dir = os.path.join(server_config["geocortex_sites_root"], site)
        input_site_dir = os.path.join(config["build_site_dir"], site)
        shutil.copytree(input_site_dir, target_sites_dir)

        # TODO: Copy HTML5 viewer files
        logging.info("Geocortex site deployment complete")


def copy_geocortex_site_files_to_server(target_server_config, logger):
    """Copy additional site resources to server"""

    for dir_to_copy in target_server_config["copy_to_site_root"]:
        input_dir = os.path.join("data", "Sites", dir_to_copy)
        target_dir = os.path.join(target_server_config["geocortex_sites_root"], dir_to_copy)
        dir_util.copy_tree(input_dir, target_dir, update=True)


def copy_sites_from_template(site_names, config, logger):
    """Copy sites selected for deployment from the template folder into the build location"""
    for site in site_names:
        site = site.replace(" ", "")
        logger.info("Copying template site '%s' to build dir", site)
        src = os.path.join("Data/Sites", site)
        tgt = os.path.join(config["build_site_dir"], site)
        dir_util.copy_tree(src, tgt)


def make_build_dirs(config, logger):
    """Make site and viewer folders in the build directory"""

    logger.info("Making build directories")
    # Make build directory and sites folder under that
    site_dir = os.path.join(config["root_dir"], "build", BUILD_SITE_DIR_NAME)
    config["build_site_dir"] = site_dir
    if os.path.exists(site_dir): # Cleanup existing
        dir_util.remove_tree(site_dir)
    dir_util.mkpath(site_dir)
    logger.info("Build directories created")


def init_logger(config):
    """ Initialize logger with a file and console output"""
    logger = logging.getLogger("geocortex_deployer")
    logger.setLevel(logging.INFO)

    # Create file handler which logs even debug messages
    log_dir = os.path.join(config["root_dir"], "logs")
    dir_util.mkpath(log_dir)
    log_name = time.strftime("%H%M%S") + "_" + time.strftime(
        "%Y%m%d") + "_ftpDataDownloadLog.txt"
    file_handler = logging.FileHandler(os.path.join(log_dir, log_name))
    file_handler.setLevel(logging.INFO)

    # Create console handler with a higher log level
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)

    # Create formatter and add it to the handlers
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)

    # add the handlers to the logger
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    return logger


if __name__ == "__main__":
    main()