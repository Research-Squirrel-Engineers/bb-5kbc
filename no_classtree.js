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
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "class",
        "text": "Entity (prov:Entity) [3]",
        "data": {
          "to": {
            "http://archaeology.link/ontology#feature_type": {
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
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
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
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [3]",
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
              "http://archaeology.link/ontology#Context": 1,
              "http://www.w3.org/ns/prov#Entity": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://data.archaeology.link/data/bb5kbc/Context_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Context Instances Collection (bb5kbc:Context_collection)",
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
        "text": "Collection (skos:Collection) [3]",
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
              "http://archaeology.link/ontology#Context": 3,
              "http://www.w3.org/ns/prov#Entity": 3
            }
          },
          "from": {}
        },
        "instancecount": 5
      }
    ]
  }
}