var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_693_suniv0_",
        "parent": "http://archaeology.link/ontology#Place",
        "type": "instance",
        "text": "Location 1 (bb5kbc:pc_693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_563_suniv0_",
        "parent": "http://archaeology.link/ontology#Place",
        "type": "instance",
        "text": "Location 2 (bb5kbc:pc_563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_542_suniv0_",
        "parent": "http://archaeology.link/ontology#Place",
        "type": "instance",
        "text": "Location 3 (bb5kbc:pc_542)",
        "data": {}
      },
      {
        "id": "http://archaeology.link/ontology#Place",
        "parent": "#",
        "type": "class",
        "text": "Place (lado:Place) [3]",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_693_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "Location 1 (bb5kbc:pc_693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_693_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Location 1 (bb5kbc:loc_693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_563_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "Location 2 (bb5kbc:pc_563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_563_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Location 2 (bb5kbc:loc_563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_542_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "Location 3 (bb5kbc:pc_542)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_542_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Location 3 (bb5kbc:loc_542)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "halfgeoclass",
        "text": "Entity (prov:Entity) [12]",
        "data": {
          "to": {
            "http://purl.org/dc/terms/creator": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/rightsHolder": {
              "instancecount": 2
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#Activity": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_693_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "pc_693_pyscript (bb5kbc:pc_693_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_693_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "loc_693_pyscript (bb5kbc:loc_693_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_563_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "pc_563_pyscript (bb5kbc:pc_563_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_563_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "loc_563_pyscript (bb5kbc:loc_563_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/pc_542_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "pc_542_pyscript (bb5kbc:pc_542_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_542_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "loc_542_pyscript (bb5kbc:loc_542_pyscript)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [12]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeology.link/ontology#Place": 1,
              "http://www.w3.org/ns/prov#Entity": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_693_suniv1_",
        "parent": "http://archaeology.link/ontology#Location",
        "type": "geoinstance",
        "text": "Location 1 (bb5kbc:loc_693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_563_suniv1_",
        "parent": "http://archaeology.link/ontology#Location",
        "type": "geoinstance",
        "text": "Location 2 (bb5kbc:loc_563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_542_suniv1_",
        "parent": "http://archaeology.link/ontology#Location",
        "type": "geoinstance",
        "text": "Location 3 (bb5kbc:loc_542)",
        "data": {}
      },
      {
        "id": "http://archaeology.link/ontology#Location",
        "parent": "#",
        "type": "geoclass",
        "text": "Location (lado:Location) [3]",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_693_suniv2_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Location 1 (bb5kbc:loc_693)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_563_suniv2_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Location 2 (bb5kbc:loc_563)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_542_suniv2_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Location 3 (bb5kbc:loc_542)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Site",
        "parent": "#",
        "type": "geoclass",
        "text": "Site (fsl:Site) [3]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#siteType": {
              "instancecount": 1
            },
            "http://archaeology.link/ontology#hasFlurname": {
              "instancecount": 1
            },
            "http://archaeology.link/ontology#hasGemarkung": {
              "instancecount": 1
            },
            "http://archaeology.link/ontology#hasLocationType": {
              "instancecount": 1
            },
            "http://archaeology.link/ontology#hasType": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/creator": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/rightsHolder": {
              "instancecount": 2
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 3
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#Activity": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 2
            }
          }
        },
        "instancecount": 18
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_693_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "loc_693_geom (bb5kbc:loc_693_geom)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_563_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "loc_563_geom (bb5kbc:loc_563_geom)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/loc_542_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "loc_542_geom (bb5kbc:loc_542_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "#",
        "type": "geoclass",
        "text": "Point (sf:Point) [3]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 0,
              "http://archaeology.link/ontology#Location": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "http://archaeoinformatics.link/ontology#Site": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Place_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Place Instances Collection (bb5kbc:Place_collection)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Entity_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Entity Instances Collection (bb5kbc:Entity_collection)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Activity_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Activity Instances Collection (bb5kbc:Activity_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 12,
              "http://www.w3.org/ns/prov#Activity": 6
            }
          },
          "from": {}
        },
        "instancecount": 14
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Location_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Location Instances Collection (bb5kbc:Location_collection)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Site_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Site Instances Collection (bb5kbc:Site_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 3,
              "http://archaeology.link/ontology#Location": 3,
              "http://www.w3.org/ns/prov#Entity": 3,
              "http://archaeoinformatics.link/ontology#Site": 3
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Point_collection",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Point Instances Collection (bb5kbc:Point_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 3,
              "http://www.opengis.net/ont/sf#Point": 3
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_1_suniv0_",
        "parent": "http://archaeology.link/ontology#InformationCarrier",
        "type": "instance",
        "text": "ic_1 (bb5kbc:ic_1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_2_suniv0_",
        "parent": "http://archaeology.link/ontology#InformationCarrier",
        "type": "instance",
        "text": "ic_2 (bb5kbc:ic_2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_3_suniv0_",
        "parent": "http://archaeology.link/ontology#InformationCarrier",
        "type": "instance",
        "text": "ic_3 (bb5kbc:ic_3)",
        "data": {}
      },
      {
        "id": "http://archaeology.link/ontology#InformationCarrier",
        "parent": "#",
        "type": "class",
        "text": "InformationCarrier (lado:InformationCarrier) [3]",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_1_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "ic_1 (bb5kbc:ic_1)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_2_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "ic_2 (bb5kbc:ic_2)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_3_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "ic_3 (bb5kbc:ic_3)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_1_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "ic_1_pyscript (bb5kbc:ic_1_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_2_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "ic_2_pyscript (bb5kbc:ic_2_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/ic_3_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "ic_3_pyscript (bb5kbc:ic_3_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/InformationCarrier_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "InformationCarrier Instances Collection (bb5kbc:InformationCarrier_collection)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_100_suniv0_",
        "parent": "http://archaeology.link/ontology#Context",
        "type": "instance",
        "text": "con_100 (bb5kbc:con_100)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_200_suniv0_",
        "parent": "http://archaeology.link/ontology#Context",
        "type": "instance",
        "text": "con_200 (bb5kbc:con_200)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_300_suniv0_",
        "parent": "http://archaeology.link/ontology#Context",
        "type": "instance",
        "text": "con_300 (bb5kbc:con_300)",
        "data": {}
      },
      {
        "id": "http://archaeology.link/ontology#Context",
        "parent": "#",
        "type": "class",
        "text": "Context (lado:Context) [3]",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_100_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "con_100 (bb5kbc:con_100)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_200_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "con_200 (bb5kbc:con_200)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_300_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "instance",
        "text": "con_300 (bb5kbc:con_300)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_100_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "con_100_pyscript (bb5kbc:con_100_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_200_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "con_200_pyscript (bb5kbc:con_200_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/con_300_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "con_300_pyscript (bb5kbc:con_300_pyscript)",
        "data": {}
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Context_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Context Instances Collection (bb5kbc:Context_collection)",
        "data": {}
      }
    ]
  }
}