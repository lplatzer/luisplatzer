export function getCoffeeData(id) {
    const data = CoffeeData.find(elem => elem.id === `coffees:${id.replace('-', '_')}`);
    const recipes = CoffeeRecipes.find(elem => elem.id === `recipes:${id.replace('-', '_')}`);
    return {
        ...data,
        ...recipes,
    }
}

export const CoffeeNames = [
    {
        "id": "coffees:araku"
    },
    {
        "id": "coffees:bella_vista"
    },
    {
        "id": "coffees:bombe"
    },
    {
        "id": "coffees:bombe_anaerobic"
    },
    {
        "id": "coffees:denbi_uddo"
    },
    {
        "id": "coffees:el_campo"
    },
    {
        "id": "coffees:el_moreno"
    },
    {
        "id": "coffees:el_pino_geisha"
    },
    {
        "id": "coffees:kiaga_aa"
    },
    {
        "id": "coffees:kichawir"
    },
    {
        "id": "coffees:la_dalia"
    },
    {
        "id": "coffees:la_maravilla"
    },
    {
        "id": "coffees:la_pachuca"
    },
    {
        "id": "coffees:las_nubes"
    },
    {
        "id": "coffees:las_nubes_geisha"
    },
    {
        "id": "coffees:los_placeres"
    },
    {
        "id": "coffees:mischgold"
    },
    {
        "id": "coffees:monte_alegre"
    },
    {
        "id": "coffees:neunbar"
    },
    {
        "id": "coffees:nobile"
    },
    {
        "id": "coffees:sarongge"
    },
    {
        "id": "coffees:scheingold"
    },
    {
        "id": "coffees:sechs_a"
    },
    {
        "id": "coffees:werka"
    }
]

export const CoffeeData = [
    {
        "altitude": 1400,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:araku",
        "info_text": "",
        "name": "Araku",
        "origin": {
            "country": "India",
            "detail": "Araku Valley",
            "station": null
        },
        "process": "Washed",
        "producer": "SAMTFMA Cooperative Society",
        "roaster": "elbgold",
        "taste_notes": [
            "Chocolate",
            "Honey",
            "Hazelnut"
        ],
        "type": "Espresso",
        "variety": [
            "S5",
            "S9",
            "S795"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:bella_vista",
        "info_text": "",
        "name": "Bella Vista",
        "origin": {
            "country": "Guatemala",
            "detail": "Antigua",
            "station": null
        },
        "process": "Washed",
        "producer": "Luis Pedro Zelaya",
        "roaster": "elbgold",
        "taste_notes": [
            "Mousse au Chocolat",
            "Cherry",
            "Cacao Butter"
        ],
        "type": "Filter",
        "variety": [
            "Bourbon",
            "Caturra"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:bombe",
        "info_text": "",
        "name": "Bombe",
        "origin": {
            "country": "Ethiopia",
            "detail": [
                "Sidama",
                "Benza"
            ],
            "station": null
        },
        "process": "Natural",
        "producer": "Faysel A. Yonis",
        "roaster": "elbgold",
        "taste_notes": [
            "Maracuja",
            "Tangerine",
            "Marzipan"
        ],
        "type": "Espresso",
        "variety": "Kurume"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:bombe_anaerobic",
        "info_text": "",
        "name": "Bombe Anaerobic",
        "origin": {
            "country": "Ethiopia",
            "detail": [
                "Sidama",
                "Bensa"
            ],
            "station": "Ayla Washing Station"
        },
        "process": "Natural 120h Anaerobic Fermentation",
        "producer": "Faysel A. Yonis",
        "roaster": "elbgold",
        "taste_notes": [
            "Strawberry",
            "Apple Rings",
            "Rose Wine"
        ],
        "type": "Filter",
        "variety": "Kurume"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:denbi_uddo",
        "info_text": "",
        "name": "Denbi Uddo",
        "origin": {
            "country": "Ethiopia",
            "detail": "Guji, Shakiso",
            "station": null
        },
        "process": "Washed",
        "producer": "Faysel A. Yonis",
        "roaster": "elbgold",
        "taste_notes": [
            "Tangerine",
            "Rose",
            "Sencha"
        ],
        "type": "Filter",
        "variety": "Mixed Heirloom"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:el_campo",
        "info_text": "",
        "name": "El Campo",
        "origin": {
            "country": "Honduras",
            "detail": [
                "La Paz",
                "Chinacla"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": "Marysabel Caballero & Moises Herrera",
        "roaster": "elbgold",
        "taste_notes": [
            "Cacao",
            "Nectarine",
            "Honey"
        ],
        "type": "Filter",
        "variety": "Red Catuai"
    },
    {
        "altitude": 1900,
        "harvesting_season": {
            "end": "May",
            "start": "January"
        },
        "id": "coffees:el_moreno",
        "info_text": "",
        "name": "El Moreno",
        "origin": {
            "country": "Guatemala",
            "detail": "Huehuetenango",
            "station": null
        },
        "process": "Washed",
        "producer": "Pérez Family",
        "roaster": "elbgold",
        "taste_notes": [
            "Chocolate",
            "Honey",
            "Hazelnut"
        ],
        "type": "Filter",
        "variety": "Caturra"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:el_pino_geisha",
        "info_text": "",
        "name": "El Pino Geisha",
        "origin": {
            "country": "Honduras",
            "detail": [
                "La Paz",
                "Chinacla"
            ],
            "station": null
        },
        "process": "Natural",
        "producer": "Marysabel Caballero & Moises Herrera",
        "roaster": "elbgold",
        "taste_notes": [
            "Maracuja",
            "Lime",
            "Mint"
        ],
        "type": "Filter",
        "variety": "Geisha"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:kiaga_aa",
        "info_text": "",
        "name": "Kiaga AA",
        "origin": {
            "country": "Kenya",
            "detail": "Nyeri",
            "station": null
        },
        "process": "Washed",
        "producer": "Othaya Farmers Cooperative Society",
        "roaster": "elbgold",
        "taste_notes": [
            "Black Tea",
            "Blackthorn",
            "Beetroot"
        ],
        "type": "Filter",
        "variety": [
            "SL28",
            "SL34",
            "Ruiru11"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:kichawir",
        "info_text": "",
        "name": "Kichawir",
        "origin": {
            "country": "Kenya",
            "detail": [
                "Rift Valley",
                "Kericho"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": "Othaya Farmers Cooperative Society",
        "roaster": "elbgold",
        "taste_notes": [
            "Currant",
            "Red Gooseberry",
            "Kiwi"
        ],
        "type": "Filter",
        "variety": [
            "SL28",
            "SL34"
        ]
    },
    {
        "altitude": 1500,
        "harvesting_season": {
            "end": "May",
            "start": "January"
        },
        "id": "coffees:la_dalia",
        "info_text": "",
        "name": "La Dalia",
        "origin": {
            "country": "El Salvador",
            "detail": [
                "Ahuachapán",
                "Cuyanausul"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": "Guillen Family",
        "roaster": "elbgold",
        "taste_notes": [
            "Toffee",
            "Cacao",
            "Currant"
        ],
        "type": "Filter",
        "variety": "Pacamara"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:la_maravilla",
        "info_text": "",
        "name": "La Maravilla",
        "origin": {
            "country": "Guatemala",
            "detail": "Huehuetenango",
            "station": null
        },
        "process": "Washed",
        "producer": "Mauricio Rosales Vásquez",
        "roaster": "elbgold",
        "taste_notes": [
            "Nougat",
            "Almond",
            "Cherry"
        ],
        "type": "Espresso",
        "variety": [
            "Bourbon",
            "Caturra"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:la_pachuca",
        "info_text": "",
        "name": "La Pachuca",
        "origin": {
            "country": "Costa Rica",
            "detail": [
                "Tarrazú",
                "Valle de Dota"
            ],
            "station": null
        },
        "process": "Juicy Honey Fermentation",
        "producer": "Roberto Mata Naranjo",
        "roaster": "elbgold",
        "taste_notes": [
            "Red Jelly",
            "White Balm",
            "Candied Sugar"
        ],
        "type": "Filter",
        "variety": "Caturra Amarillo"
    },
    {
        "altitude": 1500,
        "harvesting_season": {
            "end": "May",
            "start": "January"
        },
        "id": "coffees:las_nubes",
        "info_text": "",
        "name": "Las Nubes",
        "origin": {
            "country": "Costa Rica",
            "detail": [
                "Tarrazú",
                "Valle de Dota"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": "Roberto Mata Naranjo",
        "roaster": "elbgold",
        "taste_notes": [
            "Nougat",
            "Red Berry",
            "Rooibos"
        ],
        "type": "Filter",
        "variety": "Caturra"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:las_nubes_geisha",
        "info_text": "",
        "name": "Las Nubes Geisha",
        "origin": {
            "country": "Costa Rica",
            "detail": [
                "Tarrazú",
                "Valle de Dota"
            ],
            "station": null
        },
        "process": "Black & Yellow Honey",
        "producer": "Roberto Mata Naranjo",
        "roaster": "elbgold",
        "taste_notes": [
            "Jasmine",
            "Nectarine",
            "Pear"
        ],
        "type": "Filter",
        "variety": "Geisha"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:los_placeres",
        "info_text": "",
        "name": "Los Placeres",
        "origin": {
            "country": "Nicagarua",
            "detail": [
                "Matagalpa",
                "Yasica Sur"
            ],
            "station": null
        },
        "process": "Natural",
        "producer": "Mierisch family",
        "roaster": "elbgold",
        "taste_notes": [
            "Blackberry",
            "Hazelnut",
            "Honey"
        ],
        "type": "Filter",
        "variety": "Red Bourbon"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:mischgold",
        "info_text": "",
        "name": "Mischgold",
        "origin": {
            "country": "Guatemala",
            "detail": "Antigua",
            "station": null
        },
        "process": "Washed",
        "producer": "Luis Pedro Zelaya",
        "roaster": "elbgold",
        "taste_notes": [
            "Mousse au chocolat",
            "cherry",
            "cacao butter"
        ],
        "type": "Filter",
        "variety": [
            "Bourbon",
            "Caturra"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": "September",
            "start": "May"
        },
        "id": "coffees:monte_alegre",
        "info_text": "",
        "name": "Monte Alegre",
        "origin": {
            "country": "Brazil",
            "detail": "Sul de Minas",
            "station": null
        },
        "process": "Pulped Natural",
        "producer": "José Francisco Pereira",
        "roaster": "elbgold",
        "taste_notes": [
            "Red Apple",
            "Maple Syrup",
            "Vanilla"
        ],
        "type": "Espresso",
        "variety": "Yellow Bourbon"
    },
    {
        "altidue": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:neunbar",
        "info_text": "",
        "name": "Neunbar",
        "origin": {
            "country": [
                "Honduras",
                "Nicagarua",
                "Brazil"
            ],
            "detail": [
                "El Puente",
                "Los Placeres",
                "Monte Alegre"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": [
            "Marysabel Caballero & Moises Herrera",
            "Mierisch Family",
            "José Francisco Pereira"
        ],
        "roaster": "elbgold",
        "taste_notes": [
            "Cacao",
            "Marzipan",
            "Walnut"
        ],
        "type": "Espresso",
        "variety": [
            "Red Catuai",
            "Red Bourbon",
            "Yellow Bourbon"
        ]
    },
    {
        "altiude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:nobile",
        "info_text": "",
        "name": "Nobile",
        "origin": {
            "country": [
                "Ethiopia",
                "Nicagarua"
            ],
            "detail": [
                "Bombe",
                "Matagalpa"
            ],
            "station": null
        },
        "process": "Natural",
        "producer": [
            "Faysel A. Yonis",
            "Finca Mierisch"
        ],
        "roaster": "elbgold",
        "taste_notes": [
            "Blackberry",
            "Hazelnut",
            "Honey"
        ],
        "type": "Espresso",
        "variety": [
            "Kurume",
            "Red Bourbon"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:sarongge",
        "info_text": "",
        "name": "Sarongge",
        "origin": {
            "country": "Indonesia",
            "detail": [
                "West Java",
                "Ciputri"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": "Tosca Santoso",
        "roaster": "elbgold",
        "taste_notes": [
            "Biscuit",
            "Caramel",
            "Tangerine"
        ],
        "type": "Filter",
        "variety": [
            "S795",
            "Andungsari",
            "Sigararutang"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:scheingold",
        "info_text": "",
        "name": "Scheingold decaf",
        "origin": {
            "country": "Brasil",
            "detail": "Alta Mogiana",
            "station": null
        },
        "process": [
            "Natural",
            "CO2 method"
        ],
        "producer": [
            "Luís Cláudio Cunha",
            "Fazenda Bela Época"
        ],
        "roaster": "elbgold",
        "taste_notes": [
            "Cacao",
            "Almond",
            "Honey"
        ],
        "type": [
            "Filter",
            "Espresso"
        ],
        "variety": "Obatá"
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:sechs_a",
        "info_text": "",
        "name": "Sechs A",
        "origin": {
            "country": [
                "Guatemala",
                "El Salvador",
                "Ethiopia"
            ],
            "detail": [
                "Los Santos",
                "San Antonio",
                "Aricha"
            ],
            "station": null
        },
        "process": "Washed",
        "producer": [
            "Luis Pedro Zelaya Zamora",
            "Guillen Family",
            "Faysel A. Yonis"
        ],
        "roaster": "elbgold",
        "taste_notes": [
            "Chocolate",
            "Peach",
            "Hazelnut"
        ],
        "type": "Espresso",
        "variety": [
            "Red Caturra",
            "Red Bourbon",
            "Kurume"
        ]
    },
    {
        "altitude": null,
        "harvesting_season": {
            "end": null,
            "start": null
        },
        "id": "coffees:werka",
        "info_text": "",
        "name": "Werka",
        "origin": {
            "country": "Ethiopia",
            "region": [
                "Nensebo",
                "West Arsi"
            ],
            "station": "Testi West Arsi Washing Station"
        },
        "process": "Washed",
        "producer": "Faysel A. Yonis",
        "roaster": "elbgold",
        "taste_notes": [
            "Lemongrass",
            "Earl Grey",
            "Jasmine"
        ],
        "type": "Filter",
        "variety": "Mixed Heirloom"
    }
]
export const CoffeeRecipes = [
    {
        "brewing_ratio": "1:2.4",
        "coffee_in": {
            "max": "17.5",
            "min": "17.0"
        },
        "coffee_out": 40,
        "extraction_time": {
            "max": 27,
            "min": 25
        },
        "id": "recipes:araku",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.4",
        "coffee_in": "16.5",
        "coffee_out": 40,
        "extraction_time": {
            "max": 30,
            "min": 29
        },
        "id": "recipes:bombe",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.4",
        "coffee_in": "17.5",
        "coffee_out": 40,
        "extraction_time": {
            "max": 28,
            "min": 26
        },
        "id": "recipes:la_maravilla",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.3",
        "coffee_in": "17.5",
        "coffee_out": 40,
        "extraction_time": {
            "max": 30,
            "min": 28
        },
        "id": "recipes:monte_alegre",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.3",
        "coffee_in": 17,
        "coffee_out": 40,
        "extraction_time": {
            "max": 30,
            "min": 28
        },
        "id": "recipes:neunbar",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.3",
        "coffee_in": "17.5",
        "coffee_out": 40,
        "extraction_time": {
            "max": 30,
            "min": 28
        },
        "id": "recipes:nobile",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.3",
        "coffee_in": 17,
        "coffee_out": 40,
        "extraction_time": {
            "max": 27,
            "min": 25
        },
        "id": "recipes:scheingold",
        "taste_notes": null
    },
    {
        "brewing_ratio": "1:2.4",
        "coffee_in": {
            "max": "17.5",
            "min": "17.0"
        },
        "coffee_out": 40,
        "extraction_time": {
            "max": 28,
            "min": 26
        },
        "id": "recipes:sechs_a",
        "taste_notes": null
    }
]