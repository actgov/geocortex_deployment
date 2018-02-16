import json
import os
import re

from jsonpatch import JsonPatch
from jsonpath_rw import jsonpath, parse


def is_matched(data, pattern):
    """Utility function to verify pattern match"""
    value = data[0]
    matches = re.match(pattern, value)
    return matches != None


def prepare_patch(data, pattern, replacement, op):
    """Prepare patch statement to pass to jsonpatch"""
    value = data[0]
    json_path = data[1]

    return {
        'op': op,
        'path': "/" + json_path.replace('.', '/').replace('/[', '/').replace(']/', '/'),
        'value': str(value.replace(pattern, replacement))
    }


def patch_json(site, config, logger):
    """Update the site JSON configuration file """

    patching_config = config.get('patching_config')
    output_file = os.path.join(config["build_site_dir"], site, \
                                patching_config["viewer_configs"][site])
    input_file = output_file + "_org"

    logger.info("Backup original config")
    is_patched = False
    try:
        os.remove(input_file)
    except OSError:
        pass
    
    os.rename(output_file, input_file)

    with open(input_file) as file_data:
        json_data_to_patch = json.load(file_data)
        items_to_patch = []
        patch_requests = patching_config.get('patches')

        for request in patch_requests:
            op = request.get('op')
            patch_path = parse(request.get('path'))
            matching_pattern = request.get('pattern')
            replacement = request.get('replacement')

            # Find matches for path
            matches = [(match.value, str(match.full_path))
                       for match in patch_path.find(json_data_to_patch)]

            # Find items matching with value
            filtered = filter(lambda x: is_matched(
                x, matching_pattern), matches)

            # Prepare patch
            items_to_patch += \
				map(lambda x: prepare_patch(x, matching_pattern, replacement, op), filtered)

        # Patch json
        if len(items_to_patch) > 0:
            logger.info("Patches available")
            patches = JsonPatch(items_to_patch)
            result = patches.apply(json_data_to_patch)

            # Save json
            with open(output_file, 'w') as save_file:
                json.dump(result, save_file, sort_keys=False)
                is_patched = True
                logger.info("Json config of site '%s' patched", site)

    if not is_patched:
        os.rename(input_file, output_file)
        logger.info("Json config of site '%s' not patched", site)

    logger.info("JSON patch process for site '%s' completed", site)
