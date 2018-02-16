<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:regexp="http://exslt.org/regular-expressions"
  extension-element-prefixes="regexp">

  <!-- Copy the document to work with -->
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

 <!--
  <xsl:template match='//MapService[contains(@ConnectionString,"data.actmapi.act.gov.au")]/@ConnectionString'>
    <xsl:if test="not(contains(., 'imagery[\d]+'))">
			<xsl:attribute name="ConnectionString">
				<xsl:value-of select="regexp:replace(string(.),'(data.actmapi.act.gov.au/arcgis/rest/services)','gi','test-data.actmapi.act.gov.au/arcgis/rest/services')" />
			</xsl:attribute>	
    </xsl:if>
  </xsl:template>

  -->
  <xsl:template match='//GeometryEndpoint[contains(@ConnectionString,"dev-data.actmapi.act.gov.au")]/@ConnectionString'>
    <xsl:if test="not(contains(., 'imagery[\d]+'))">
			<xsl:attribute name="ConnectionString">
				<xsl:value-of select="regexp:replace(string(.),'(dev-data.actmapi.act.gov.au)','gi','test-data.actmapi.act.gov.au')" />
			</xsl:attribute>	
    </xsl:if>
  </xsl:template>

  <xsl:template match='//MapService[contains(@ConnectionString,"dev-data.actmapi.act.gov.au")]/@ConnectionString'>
    <xsl:if test="not(contains(., 'imagery[\d]+'))">
			<xsl:attribute name="ConnectionString">
				<xsl:value-of select="regexp:replace(string(.),'(dev-data.actmapi.act.gov.au)','gi','test-data.actmapi.act.gov.au')" />
			</xsl:attribute>	
    </xsl:if>
  </xsl:template>
  
</xsl:stylesheet>
