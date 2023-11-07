__author__ = "Florian Thiery, Sophie C. Schmidt"
__copyright__ = "MIT Licence 2023, Florian Thiery, Sophie C. Schmidt"
__credits__ = ["Florian Thiery", "Sophie C. Schmidt"]
__license__ = "MIT"
__version__ = "beta"
__maintainer__ = "Florian Thiery, Sophie C. Schmidt"
__email__ = "mail@fthiery.de"
__status__ = "beta"
__update__ = "2023-11-23"

# import dependencies
import uuid
import requests
import io
import pandas as pd
import os
import codecs
import datetime
import importlib
import sys
import hashlib

# set UTF8 as default
importlib.reload(sys)

# set starttime
starttime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
lines = []

# set paths I
file_name = "fundplatz.csv"
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = dir_path.replace("\\py", "\\csv") + "\\" + file_name

# read csv file
data = pd.read_csv(
    file_in,
    encoding='utf-8',
    sep=',',
    usecols=['id', 'name', 'flurname', 'gemarkung',
             'typ', 'sitetype', 'wkt'],
    na_values=['.', '??', 'NULL']  # take any '.' or '??' values as NA
)
print("*****************************************")
print(data.info())

# create triples from dataframe
lineNo = 2
for index, row in data.iterrows():
    tmpno = lineNo - 2
    lineNo += 1

    # place as a conecept

    # typing
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + " " + "rdf:type" + " lado:Place .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + " " + "rdf:type" + " prov:Entity .")

    # metadata
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + " " + "rdfs:label" + " '" + str(row['name']) + "'@en.")

    # geometry
    point = str(row['wkt'])
    point = "\"<http://www.opengis.net/def/crs/EPSG/0/4326> " + \
        point + "\"^^geosparql:wktLiteral"
    lines.append("bb5kbc:pc_" + str(row['id']) + " " +
                 "geosparql:hasGeometry" + " bb5kbc:pc_" + str(row['id']) + "_geom .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " +
                 "lado:hasRepresentativeGeometry" + " bb5kbc:pc_" + str(row['id']) + "_geom .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_geom " + "rdf:type" + " sf:Point .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_geom " + "geosparql:asWKT " + point + ".")

    # license
    lines.append("bb5kbc:pc_" + str(row['id']) + " " + "dct:license" +
                 " <" + "https://creativecommons.org/licenses/by/4.0/" + "> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")

    # prov-o for script
    lines.append("bb5kbc:pc_" + str(row['id']) + " " +
                 "prov:wasAttributedTo" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/fundplatz.py> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc> .")
    lines.append("bb5kbc:pc_" + str(row['id']) + " " +
                 "prov:wasGeneratedBy" + " bb5kbc:pc_" + str(row['id']) + "_pyscript .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_pyscript " + "rdf:type" + " <http://www.w3.org/ns/prov#Activity> .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_pyscript " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_pyscript " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    lines.append("bb5kbc:pc_" +
                 str(row['id']) + "_pyscript " + "prov:wasAssociatedWith" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/fundplatz.py> .")

    lines.append("")

    # location

    # typing
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "rdf:type" + " lado:Location  .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "rdf:type" + " prov:Entity .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "rdf:type" + " fsl:Site .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "fsl:siteType" + " fsl:ArchaeologicalSite .")
    if str(row['sitetype']) == 'ds':
        lines.append(
            "bb5kbc:loc_" + str(row['id']) + " " + "lado:hasType" + " lado:DiscoverySite  .")
    if str(row['sitetype']) == 'es':
        lines.append(
            "bb5kbc:loc_" + str(row['id']) + " " + "lado:hasType" + " lado:ExcavationSite  .")

    # metadata
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "rdfs:label" + " '" + str(row['name']) + "'@de.")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "lado:hasFlurname" + " '" + str(row['flurname']) + "'@de.")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "lado:hasGemarkung" + " '" + str(row['gemarkung']) + "'@de.")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + " " + "lado:hasLocationType" + " '" + str(row['typ']) + "'@de.")

    # geometry
    point = str(row['wkt'])
    point = "\"<http://www.opengis.net/def/crs/EPSG/0/4326> " + \
        point + "\"^^geosparql:wktLiteral"
    lines.append("bb5kbc:loc_" + str(row['id']) + " " +
                 "geosparql:hasGeometry" + " bb5kbc:loc_" + str(row['id']) + "_geom .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_geom " + "rdf:type" + " sf:Point .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_geom " + "geosparql:asWKT " + point + ".")

    # usecols=[''', '','', '', 'lat', 'lon', 'wkt'],

    # license
    lines.append("bb5kbc:loc_" + str(row['id']) + " " + "dct:license" +
                 " <" + "https://creativecommons.org/licenses/by/4.0/" + "> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")

    # prov-o for script
    lines.append("bb5kbc:loc_" + str(row['id']) + " " +
                 "prov:wasAttributedTo" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/fundplatz.py> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc> .")
    lines.append("bb5kbc:loc_" + str(row['id']) + " " +
                 "prov:wasGeneratedBy" + " bb5kbc:loc_" + str(row['id']) + "_pyscript .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_pyscript " + "rdf:type" + " <http://www.w3.org/ns/prov#Activity> .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_pyscript " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_pyscript " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    lines.append("bb5kbc:loc_" +
                 str(row['id']) + "_pyscript " + "prov:wasAssociatedWith" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/fundplatz.py> .")

    lines.append("")

files = (len(lines) / 100000) + 1
print("triples", len(lines), "files", int(files))
thiscount = len(lines)

# write output files
f = 0
step = 100000
prefixes = ""
prefixes += "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\r\n"
prefixes += "@prefix owl: <http://www.w3.org/2002/07/owl#> .\r\n"
prefixes += "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n"
prefixes += "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r\n"
prefixes += "@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .\r\n"
prefixes += "@prefix dc: <http://purl.org/dc/elements/1.1/> .\r\n"
prefixes += "@prefix dct: <http://purl.org/dc/terms/> .\r\n"
prefixes += "@prefix sf: <http://www.opengis.net/ont/sf#> .\r\n"
prefixes += "@prefix prov: <http://www.w3.org/ns/prov#> .\r\n"
prefixes += "@prefix foaf: <http://xmlns.com/foaf/0.1/> .\r\n"
prefixes += "@prefix skos: <http://www.w3.org/2004/02/skos/core#> .\r\n"
prefixes += "@prefix pleiades: <https://pleiades.stoa.org/places/vocab#> .\r\n"
prefixes += "@prefix wikidata: <http://wikidata.org/entity/> .\r\n"
prefixes += "@prefix lado: <http://archaeology.link/ontology#> .\r\n"
prefixes += "@prefix bb5kbc: <http://data.archaeology.link/data/bb5kbc/> .\r\n"
prefixes += "@prefix fsl: <http://archaeoinformatics.link/ontology#> .\r\n"
prefixes += "@prefix fsld: <http://fuzzy-sl.squirrel.link/data/> .\r\n"
prefixes += "\r\n"

for x in range(1, int(files) + 1):
    strX = str(x)
    filename = dir_path.replace("\\py", "\\rdf") + \
        "\\" + "site.ttl"
    file = codecs.open(filename, "w", "utf-8")
    file.write(
        "# create triples from https://github.com/Research-Squirrel-Engineers/bb-5kbc \r\n")
    file.write(
        "# on " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M") + "\r\n\r\n")
    file.write(prefixes)
    i = f
    for i, line in enumerate(lines):
        if (i > f - 1 and i < f + step):
            file.write(line)
            file.write("\r\n")
    f = f + step
    print(" > site.ttl")
    file.close()

print("*****************************************")
print("SUCCESS: closing script")
print("*****************************************")