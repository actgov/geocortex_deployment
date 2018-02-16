## Environment setup and installing external python dependancies
- If you require third party libraries by specifying in requirements.txt
- Install the python required external libraries by running ```pip install -r requirements.txt```

## Configuration:
- data/Sites:
Put artifacts to go into sites folder under data/Sites folder. Things that should be copied into the Geocortex Essentials/Sites folder should go in here. 

- data/patch_json.yml
Defines the config json file location of sites and the json patch statements to patch in the site configs.

- data/site.xxx.xslt
Defines XSLT transformations to apply to the Site.xml. The XSLT patterns will be mainly used toupdate url paths to external http services

- config.xxx.yml
Defines the servers to deploy the sites to. Defines paths and other target server specific settings

## Running
To run execute the following command in a terminal

```
python deploy.py <Dev|Test|Prod> <List of comma separated sites to deploy>
``

## Notes: You can create a local configuration file and use the deploy.py to deploy to into your local environment`