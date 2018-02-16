from lxml import etree


def patch_xml(xml_file, xslt_template, out_filename):
    """Transform an XML file using and XSLT definition and output as a new XML file"""
    with open(xslt_template) as data:
        xslt_content = data.read()
        xslt_root = etree.XML(xslt_content)
        dom = etree.parse(xml_file)
        transform = etree.XSLT(xslt_root)
        result = transform(dom)
        with open(out_filename, 'w') as f:
            f.write(str(result))
