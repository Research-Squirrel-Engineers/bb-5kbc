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
from pathlib import Path # for file management


# set UTF8 as default
importlib.reload(sys)

# set starttime
starttime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
lines = []

# set paths I

def get_project_root() -> Path:
    return Path(__file__).parent.parent

Path = get_project_root()

file_name = "kontext.csv"
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = Path.joinpath("csv").joinpath(file_name) # joinpath used to join parts of the path together. Path as project root

# read csv file
data = pd.read_csv(
    file_in,
    encoding='utf-8',
    sep=',',
    usecols=['id', 'type', 'fundplatz_id'],
    na_values=['.', '??', 'NULL']  # take any '.' or '??' values as NA
)
print("*****************************************")
print(data.info())

# create triples from dataframe
lineNo = 2
for index, row in data.iterrows():
    tmpno = lineNo - 2
    lineNo += 1

    # typing
    lines.append("bb5kbc:con_" +
                 str(row['id']) + " " + "rdf:type" + " lado:Context .")
    lines.append("bb5kbc:con_" +
                 str(row['id']) + " " + "rdf:type" + " prov:Entity .")

    # metadata
    lines.append("bb5kbc:con_" +
                 str(row['id']) + " " + "lado:feature_type" + " '" + str(row['type']) + "'@en.")
    
    # cross-table
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "lado:locatedWithin" + " " + "bb5kbc:loc_" + str(row['fundplatz_id']) + " .")
    lines.append("bb5kbc:loc_" + str(row['fundplatz_id']) + " " + "lado:belongsTo" + " " + "bb5kbc:con_" + str(row['id']) + " .")

    # license
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "dct:license" +
                 " <" + "https://creativecommons.org/licenses/by/4.0/" + "> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0003-4696-2101" + "> .")

    # prov-o for script
    lines.append("bb5kbc:con_" + str(row['id']) + " " +
                 "prov:wasAttributedTo" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/kontext.py> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc> .")
    lines.append("bb5kbc:con_" + str(row['id']) + " " +
                 "prov:wasGeneratedBy" + " bb5kbc:con_" + str(row['id']) + "_pyscript .")
    lines.append("bb5kbc:con_" +
                 str(row['id']) + "_pyscript " + "rdf:type" + " <http://www.w3.org/ns/prov#Activity> .")
    lines.append("bb5kbc:con_" +
                 str(row['id']) + "_pyscript " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("bb5kbc:con_" +
                 str(row['id']) + "_pyscript " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    lines.append("bb5kbc:con_" +
                 str(row['id']) + "_pyscript " + "prov:wasAssociatedWith" + " <https://github.com/Research-Squirrel-Engineers/bb-5kbc/blob/main/py/kontext.py> .")

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
    filename = Path.joinpath("rdf").joinpath("context.ttl")
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
    print(" > context.ttl")
    file.close()

print("*****************************************")
print("SUCCESS: closing script")
print("*****************************************")
