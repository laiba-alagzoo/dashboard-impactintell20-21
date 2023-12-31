define([],
    {
        "type": "Topology",
        "objects": {
            "disputeunit": {
                "type": "GeometryCollection",
                "geometries":[]
                // "geometries": [
                //     {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Arunachal Pradesh",
                //             "sr_brk_a3": "B00",
                //             "BRK_NAME": "Arunachal Pradesh",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by India; Claimed by China"
                //         },
                //         "id": "B00",
                //         "arcs": [[0]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Tirpani Valleys",
                //             "sr_brk_a3": "B01",
                //             "BRK_NAME": "Tirpani Valleys",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by India; Claimed by China"
                //         },
                //         "id": "B01",
                //         "arcs": [[1]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Bara Hotii Valleys",
                //             "sr_brk_a3": "B02",
                //             "BRK_NAME": "Bara Hotii Valleys",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by India; Claimed by China"
                //         },
                //         "id": "B02",
                //         "arcs": [[2]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Demchok",
                //             "sr_brk_a3": "B03",
                //             "BRK_NAME": "Demchok",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by India; Claimed by China"
                //         },
                //         "id": "B03",
                //         "arcs": [[3, 4]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Samdu Valleys",
                //             "sr_brk_a3": "B04",
                //             "BRK_NAME": "Samdu Valleys",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by India; Claimed by China"
                //         },
                //         "id": "B04",
                //         "arcs": [[5]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Jammu and Kashmir",
                //             "sr_brk_a3": "B05",
                //             "BRK_NAME": "Jammu and Kashmir",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by India; Claimed by Pakistan"
                //         },
                //         "id": "B05",
                //         "arcs": [[6, -4, 7, 8, 9, 10, 11]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Shaksam Valley",
                //             "sr_brk_a3": "B06",
                //             "BRK_NAME": "Shaksam Valley",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by China; Ceded to China by Pakistan; Claimed by India"
                //         },
                //         "id": "B06",
                //         "arcs": [[12, 13, 14]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Aksai Chin",
                //             "sr_brk_a3": "B07",
                //             "BRK_NAME": "Aksai Chin",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by China; Claimed by India"
                //         },
                //         "id": "B07",
                //         "arcs": [[-12, 15]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Northern Areas",
                //             "sr_brk_a3": "B08",
                //             "BRK_NAME": "Northern Areas",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by Pakistan; Claimed by India"
                //         },
                //         "id": "B08",
                //         "arcs": [[-14, 16, -10, 17, 18]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Azad Kashmir",
                //             "sr_brk_a3": "B09",
                //             "BRK_NAME": "Azad Kashmir",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Admin. by Pakistan; Claimed by India"
                //         },
                //         "id": "B09",
                //         "arcs": [[-9, 19, -18]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Korean Demilitarized Zone (south)",
                //             "sr_brk_a3": "B10",
                //             "BRK_NAME": "Korean Demilitarized Zone (south)",
                //             "BRK_GROUP": "Korea Demilitarized Zone",
                //             "NOTE_BRK": "Since 1953 a 2 km buffer south of the military demarcation line, patrolled by South Korea"
                //         },
                //         "id": "B10",
                //         "arcs": [[20, 21]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Korean Demilitarized Zone (north)",
                //             "sr_brk_a3": "B11",
                //             "BRK_NAME": "Korean Demilitarized Zone (north)",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Since 1953 a 2 km buffer north of the military demarcation line, patrolled by North Korea"
                //         },
                //         "id": "B11",
                //         "arcs": [[-21, 22]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Falkland Is.",
                //             "sr_brk_a3": "B12",
                //             "BRK_NAME": "Falkland Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.K.; Claimed by Argentina"
                //         },
                //         "id": "B12",
                //         "arcs": [[[23]], [[24]], [[25]], [[26]], [[27]], [[28]], [[29]], [[30]], [[31]], [[32]], [[33]], [[34]], [[35]], [[36]], [[37]], [[38]], [[39]], [[40]], [[41]], [[42]], [[43]], [[44]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Abyei",
                //             "sr_brk_a3": "B13",
                //             "BRK_NAME": "Abyei",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Sudan; Claimed by South Sudan"
                //         },
                //         "id": "B13",
                //         "arcs": [[45]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Lawa Headwaters",
                //             "sr_brk_a3": "B14",
                //             "BRK_NAME": "Lawa Headwaters",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by France; Claimed by Suriname"
                //         },
                //         "id": "B14",
                //         "arcs": [[46]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Courantyne Headwaters",
                //             "sr_brk_a3": "B15",
                //             "BRK_NAME": "Courantyne Headwaters",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Guyana; Claimed by Suriname"
                //         },
                //         "id": "B15",
                //         "arcs": [[47]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Golan Heights",
                //             "sr_brk_a3": "B16",
                //             "BRK_NAME": "Golan Heights",
                //             "BRK_GROUP": "Golan Heights",
                //             "NOTE_BRK": "Admin. By Israel; Claimed by Syria"
                //         },
                //         "id": "B16",
                //         "arcs": [[48, 49, 50, 51]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Ilemi Triangle",
                //             "sr_brk_a3": "B17",
                //             "BRK_NAME": "Ilemi Triangle",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Kenya; Claimed by Sudan"
                //         },
                //         "id": "B17",
                //         "arcs": [[[52]], [[53]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Pinnacle Is.",
                //             "sr_brk_a3": "B18",
                //             "BRK_NAME": "Pinnacle Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Japan; Claimed by China and Taiwan"
                //         },
                //         "id": "B18",
                //         "arcs": [[[54]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "W. Sahara",
                //             "sr_brk_a3": "B19",
                //             "BRK_NAME": "W. Sahara",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Morocco; Claimed by Western Sahara"
                //         },
                //         "id": "B19",
                //         "arcs": [[55, 56]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "N. Cyprus",
                //             "sr_brk_a3": "B20",
                //             "BRK_NAME": "N. Cyprus",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Cyprus"
                //         },
                //         "id": "B20",
                //         "arcs": [[[57, 58]], [[59, 60, 61, 62]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Hans Island",
                //             "sr_brk_a3": "B21",
                //             "BRK_NAME": "Hans Island",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Denmark; Claimed by Canada"
                //         },
                //         "id": "B21",
                //         "arcs": [[63]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Mayotte",
                //             "sr_brk_a3": "B22",
                //             "BRK_NAME": "Mayotte",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by France; Claimed by Comoros"
                //         },
                //         "id": "B22",
                //         "arcs": [[[64]], [[65]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Juan De Nova I.",
                //             "sr_brk_a3": "B23",
                //             "BRK_NAME": "Juan De Nova I.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by France; Claimed by Madagascar"
                //         },
                //         "id": "B23",
                //         "arcs": [[66]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Glorioso Is.",
                //             "sr_brk_a3": "B24",
                //             "BRK_NAME": "Glorioso Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by France; Claimed by Madagascar"
                //         },
                //         "id": "B24",
                //         "arcs": [[67]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Europa Island",
                //             "sr_brk_a3": "B26",
                //             "BRK_NAME": "Europa Island",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by France; Claimed by Madagascar"
                //         },
                //         "id": "B26",
                //         "arcs": [[68]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "W. Sahara",
                //             "sr_brk_a3": "B28",
                //             "BRK_NAME": "W. Sahara",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Morocco"
                //         },
                //         "id": "B28",
                //         "arcs": [[-56, 69]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Kuril Is.",
                //             "sr_brk_a3": "B29",
                //             "BRK_NAME": "Kuril Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Russia; Claimed by Japan"
                //         },
                //         "id": "B29",
                //         "arcs": [[[70]], [[71]], [[72]], [[73]], [[74]], [[75]], [[76]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Somaliland",
                //             "sr_brk_a3": "B30",
                //             "BRK_NAME": "Somaliland",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Somalia"
                //         },
                //         "id": "B30",
                //         "arcs": [[[77]], [[78]], [[79]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "S. Georgia",
                //             "sr_brk_a3": "B32",
                //             "BRK_NAME": "S. Georgia",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.K.; Claimed by Argentina"
                //         },
                //         "id": "B32",
                //         "arcs": [[[80]], [[81]], [[82]], [[83]], [[84]], [[85]], [[86]], [[87]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "S. Sandwich Is.",
                //             "sr_brk_a3": "B33",
                //             "BRK_NAME": "S. Sandwich Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.K.; Claimed by Argentina"
                //         },
                //         "id": "B33",
                //         "arcs": [[[88]], [[89]], [[90]], [[91]], [[92]], [[93]], [[94]], [[95]], [[96]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Navassa I.",
                //             "sr_brk_a3": "B34",
                //             "BRK_NAME": "Navassa I.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.S.A.; Claimed by Haiti"
                //         },
                //         "id": "B34",
                //         "arcs": [[97]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Abkhazia",
                //             "sr_brk_a3": "B35",
                //             "BRK_NAME": "Abkhazia",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Georgia"
                //         },
                //         "id": "B35",
                //         "arcs": [[98]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Transnistria",
                //             "sr_brk_a3": "B36",
                //             "BRK_NAME": "Transnistria",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Moldova"
                //         },
                //         "id": "B36",
                //         "arcs": [[99]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "South Ossetia",
                //             "sr_brk_a3": "B37",
                //             "BRK_NAME": "South Ossetia",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Georgia"
                //         },
                //         "id": "B37",
                //         "arcs": [[100]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Nagorno-Karabakh",
                //             "sr_brk_a3": "B38",
                //             "BRK_NAME": "Nagorno-Karabakh",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Azer."
                //         },
                //         "id": "B38",
                //         "arcs": [[101]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Baykonur",
                //             "sr_brk_a3": "B40",
                //             "BRK_NAME": "Baykonur",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Leased to Russia by Kazakhstan"
                //         },
                //         "id": "B40",
                //         "arcs": [[102]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Cyprus U.N. Buffer Zone",
                //             "sr_brk_a3": "B43",
                //             "BRK_NAME": "Cyprus U.N. Buffer Zone",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B43",
                //         "arcs": [[[103, -60]], [[-59, 104]], [[105, -62]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Diego Garcia NSF",
                //             "sr_brk_a3": "B44",
                //             "BRK_NAME": "Diego Garcia NSF",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Leased to U.S.A by U.K.; Claimed by Mauritius and Seychelles"
                //         },
                //         "id": "B44",
                //         "arcs": [[[106]], [[-108]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Siachen Glacier",
                //             "sr_brk_a3": "B45",
                //             "BRK_NAME": "Siachen Glacier",
                //             "BRK_GROUP": "Jammu and Kashmir",
                //             "NOTE_BRK": "Claimed by Pakistan and India"
                //         },
                //         "id": "B45",
                //         "arcs": [[108, -11, -17, -13]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Spratly Is.",
                //             "sr_brk_a3": "B46",
                //             "BRK_NAME": "Spratly Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Claimed by China, Taiwan, Malaysia, the Philippines, and Brunei"
                //         },
                //         "id": "B46",
                //         "arcs": [[[109]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Paracel Is.",
                //             "sr_brk_a3": "B47",
                //             "BRK_NAME": "Paracel Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by China; Claimed by Vietnam and Taiwan"
                //         },
                //         "id": "B47",
                //         "arcs": [[[110]], [[111]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "UNDOF Zone",
                //             "sr_brk_a3": "B49",
                //             "BRK_NAME": "UNDOF Zone",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "UN Patrolled Zone in Syria"
                //         },
                //         "id": "B49",
                //         "arcs": [[-52, 112]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Guantanamo Bay USNB",
                //             "sr_brk_a3": "B50",
                //             "BRK_NAME": "Guantanamo Bay USNB",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Leased to U.S.A. by Cuba; Claimed by Cuba"
                //         },
                //         "id": "B50",
                //         "arcs": [[[113]], [[114]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Belize",
                //             "sr_brk_a3": "B51",
                //             "BRK_NAME": "Belize",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B51",
                //         "arcs": [[[115]], [[116]], [[117]], [[118]], [[119]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Gaza",
                //             "sr_brk_a3": "B53",
                //             "BRK_NAME": "Gaza",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B53",
                //         "arcs": [[120]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "West Bank",
                //             "sr_brk_a3": "B54",
                //             "BRK_NAME": "West Bank",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B54",
                //         "arcs": [[121]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Gibraltar",
                //             "sr_brk_a3": "B55",
                //             "BRK_NAME": "Gibraltar",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. By U.K.; Claimed by Spain"
                //         },
                //         "id": "B55",
                //         "arcs": [[122]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "West of Essequibo River",
                //             "sr_brk_a3": "B56",
                //             "BRK_NAME": "West of Essequibo River",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Guyana; Claimed by Venezuela"
                //         },
                //         "id": "B56",
                //         "arcs": [[123]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Kosovo",
                //             "sr_brk_a3": "B57",
                //             "BRK_NAME": "Kosovo",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Self admin.; Claimed by Serbia"
                //         },
                //         "id": "B57",
                //         "arcs": [[124]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Shebaa Farms",
                //             "sr_brk_a3": "B58",
                //             "BRK_NAME": "Shebaa Farms",
                //             "BRK_GROUP": "Golan Heights",
                //             "NOTE_BRK": "Admin. By Israel; Claimed by Lebanon"
                //         },
                //         "id": "B58",
                //         "arcs": [[125, -50]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Wake Atoll",
                //             "sr_brk_a3": "B59",
                //             "BRK_NAME": "Wake Atoll",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.S.A.; Claimed by Marshall Islands"
                //         },
                //         "id": "B59",
                //         "arcs": [[126]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Ceuta",
                //             "sr_brk_a3": "B60",
                //             "BRK_NAME": "Ceuta",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B60",
                //         "arcs": [[127]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Melilla",
                //             "sr_brk_a3": "B61",
                //             "BRK_NAME": "Melilla",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B61",
                //         "arcs": [[128]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Islas Chafarinas",
                //             "sr_brk_a3": "B65",
                //             "BRK_NAME": "Islas Chafarinas",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Spain; Claimed by Morocco"
                //         },
                //         "id": "B65",
                //         "arcs": [[[129]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Olivenza",
                //             "sr_brk_a3": "B67",
                //             "BRK_NAME": "Olivenza",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Spain; Claimed by Portugal"
                //         },
                //         "id": "B67",
                //         "arcs": [[130]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Tiran and Sanafir Is.",
                //             "sr_brk_a3": "B68",
                //             "BRK_NAME": "Tiran and Sanafir Is.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Egypt; Claimed by Saudi Arabia"
                //         },
                //         "id": "B68",
                //         "arcs": [[[131]], [[132]]]
                //     }, {
                //         "type": "MultiPolygon",
                //         "properties": {
                //             "name": "Br. Indian Ocean Ter.",
                //             "sr_brk_a3": "B69",
                //             "BRK_NAME": "Br. Indian Ocean Ter.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by U.K.; Claimed by Mauritius and Seychelles"
                //         },
                //         "id": "B69",
                //         "arcs": [[[133]]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Atacama corridor",
                //             "sr_brk_a3": "B72",
                //             "BRK_NAME": "Atacama corridor",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Chile; Claimed by Bolivia after ceded to Chile in 1884"
                //         },
                //         "id": "B72",
                //         "arcs": [[134]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Abu Musa I.",
                //             "sr_brk_a3": "B73",
                //             "BRK_NAME": "Abu Musa I.",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Iran; Claimed by UAE"
                //         },
                //         "id": "B73",
                //         "arcs": [[135]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Ilemi Triange",
                //             "sr_brk_a3": "B74",
                //             "BRK_NAME": "Ilemi Triange",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": null
                //         },
                //         "id": "B74",
                //         "arcs": [[136, 137]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Bhutan (northwest valleys)",
                //             "sr_brk_a3": "B75",
                //             "BRK_NAME": "Bhutan (northwest valleys)",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Bhutan; Claimed by China"
                //         },
                //         "id": "B75",
                //         "arcs": [[138]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Bhutan (Chumbi salient)",
                //             "sr_brk_a3": "B76",
                //             "BRK_NAME": "Bhutan (Chumbi salient)",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by Bhutan; Claimed by China"
                //         },
                //         "id": "B76",
                //         "arcs": [[139]]
                //     }, {
                //         "type": "Polygon",
                //         "properties": {
                //             "name": "Near Om Parvat",
                //             "sr_brk_a3": "B88",
                //             "BRK_NAME": "Near Om Parvat",
                //             "BRK_GROUP": null,
                //             "NOTE_BRK": "Admin. by India; Claimed by Nepal"
                //         },
                //         "id": "B88",
                //         "arcs": [[140]]
                //     }
                // ]
            }
        },
        "arcs": [[[7790, 6322], [1, 0], [1, 2], [0, 1], [1, 0], [0, -2], [0, -1], [0, -2], [-1, -2], [0, -1], [-3, -2], [-1, 0], [0, -1], [0, -1], [0, -6], [3, 4], [2, 1], [0, -4], [3, -3], [0, -1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -1], [1, -3], [0, -2], [1, -4], [1, -3], [0, -4], [-3, -4], [-2, -3], [1, -3], [-1, -3], [1, -2], [1, -5], [1, 0], [0, 5], [0, 3], [1, 3], [2, 2], [2, -1], [2, -5], [2, -3], [1, -4], [1, -5], [1, -1], [1, -1], [1, 1], [1, 1], [1, 2], [1, -1], [2, -4], [1, 0], [0, -2], [1, -1], [1, -2], [1, -2], [0, -2], [0, -4], [-1, -2], [1, -2], [1, -4], [0, -2], [0, -1], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [-1, -1], [0, 1], [0, 1], [-1, 1], [0, -1], [-1, 0], [0, -1], [0, -1], [-1, -1], [-1, -3], [-1, -1], [0, -1], [-1, -1], [0, -1], [0, -1], [-1, 0], [0, 3], [-2, 2], [0, 2], [-3, 3], [-2, 1], [-1, 3], [-2, 0], [-1, 1], [-1, 2], [-2, 5], [-1, 0], [-1, 2], [-2, 3], [-1, 2], [-1, -2], [-1, -1], [-1, 2], [-1, 4], [-1, 1], [-1, 0], [-1, -1], [-2, 0], [-3, -3], [-1, 2], [-2, 3], [0, 2], [-1, 1], [-1, -1], [-5, -4], [-4, -4], [-4, -2], [-2, -3], [0, -3], [0, -3], [-1, -3], [-1, -3], [-2, -2], [-2, -3], [-2, -2], [-2, -2], [-1, -2], [-1, -1], [-1, -2], [-2, -1], [-3, -3], [-3, -2], [-2, -1], [0, -1], [-2, -1], [-3, -1], [-2, -1], [-2, -1], [-2, -6], [0, -2], [-1, -2], [-1, -3], [-2, -1], [0, -1], [-1, -2], [0, -2], [-1, -2], [-2, -3], [-1, -2], [-1, -4], [0, -4], [0, -2], [-2, -3], [-2, -2], [-2, -3], [-1, 0], [-3, 0], [-2, -2], [-2, 0], [-3, -1], [-3, -1], [-4, 1], [-2, 1], [-2, 0], [-1, -1], [-2, 3], [-2, 3], [-2, 0], [-2, -2], [-1, -2], [-3, -1], [-3, -2], [-2, 0], [-2, -1], [-3, 0], [1, 3], [0, 2], [1, 1], [-1, 4], [0, 2], [-2, 4], [0, 2], [0, 1], [0, 2], [0, 1], [0, 1], [1, 1], [0, 1], [0, 2], [1, 1], [1, 2], [0, 1], [0, 1], [-3, 11], [-1, 1], [-1, -1], [0, -1], [-1, 0], [-1, 0], [-2, -2], [-1, 0], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [-1, 1], [0, 1], [-1, 1], [0, 1], [-1, 1], [0, 6], [0, 2], [1, 5], [0, 3], [5, 0], [1, -1], [1, -1], [1, 0], [2, -1], [1, 1], [2, 4], [1, 1], [1, 0], [2, 0], [1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [1, -1], [0, -3], [1, -1], [0, 1], [1, 2], [0, -1], [0, -1], [1, 0], [0, 1], [0, 2], [1, 1], [0, -1], [0, -1], [1, -1], [1, 2], [1, 1], [1, 1], [1, 1], [0, 1], [1, 0], [0, 1], [1, 1], [1, 3], [0, 1], [1, 3], [0, 1], [-1, 0], [-1, 1], [0, 1], [0, 2], [1, 2], [1, 2], [2, 3], [0, -1], [1, 0], [1, 1], [1, 3], [0, 1], [1, 0], [1, 1], [1, 1], [0, 2], [3, 4], [1, 2], [0, 2], [1, 3], [0, 2], [1, 2], [1, 1], [1, 2], [2, 3], [1, 1], [2, 4], [3, 0], [2, 0], [1, 0], [1, 1], [0, 1], [1, -1], [2, 4], [1, 1], [2, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 1], [2, 2], [1, 1], [1, 2], [3, 0], [1, 3], [2, 4], [-2, 2], [-1, 3], [1, 4], [1, -1], [0, 1], [1, 0], [0, 2], [0, 1], [1, 1], [1, 0], [1, 0], [1, 0], [0, 1], [1, 1], [1, 5], [1, 1], [1, 0], [1, -1], [1, -2], [1, -3], [1, -2], [0, -2], [0, -1], [1, 0], [1, 0], [1, 0], [3, -3], [0, 1], [0, 1], [-1, 1], [1, 0], [0, -1], [2, -1], [1, -2], [1, 0], [2, -1], [1, -1], [0, -1], [0, -1], [2, 0], [0, 4], [0, 2], [2, 0], [1, -1], [1, 4], [1, 0], [0, -2], [0, -2], [0, 1], [1, -1], [1, 1], [0, 2], [-1, 2], [1, 1], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [1, -2], [2, 0], [1, 4], [0, 4], [1, 1], [1, 0], [2, -2], [2, 3], [2, 0], [2, 0], [2, 0], [0, -1], [1, -3], [0, -1], [1, -3], [1, -1]], [[7298, 6453], [-4, 0], [-2, 2], [-4, -1], [-2, 1], [0, 1], [-1, 2], [0, 3], [-1, 3], [-1, 4], [1, 1], [0, 1], [0, 1], [1, 2], [0, -1], [1, -1], [1, -1], [0, 2], [0, 3], [1, 3], [1, 1], [1, -1], [0, -1], [1, -2], [1, -1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -2], [0, -1], [0, -1], [1, -2], [0, -1], [1, 0], [0, -1], [1, -1], [0, -1]], [[7319, 6432], [1, 0], [1, 1], [0, -1], [1, -2], [1, -1], [0, -1], [0, -3], [-1, 0], [-1, -1], [1, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -1], [-1, 3], [-1, 3], [-1, 3], [-2, 1], [0, 4], [-1, 3], [-1, 3], [-1, 3], [1, 0], [2, -2], [0, -1], [1, -2], [0, -2], [1, 0]], [[7294, 6555], [0, 5], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [-2, 3], [2, 4], [0, 3], [-2, 4], [0, 1], [-1, 1], [-1, 3], [1, 3], [0, 2], [0, 3], [0, 4]], [[7291, 6606], [1, 0], [2, -2], [1, -1], [2, 0], [1, -1], [0, -3], [0, -1], [0, -2], [-1, -1], [0, -4], [0, -1], [0, -3], [1, -2], [1, -3], [1, -2], [0, -2], [0, -2], [1, -2], [1, -2], [0, -2], [0, -3], [-1, -2], [-1, -3], [-3, -5], [-1, -3], [-1, 0], [-1, 1]], [[7279, 6511], [-1, 4], [-2, 5], [-2, 3], [-2, 6], [-1, -1], [-2, 4], [3, 3], [1, -1], [1, -2], [0, -2], [3, -9], [1, -1], [1, -1], [1, -1], [0, -2], [0, -1], [-1, -3], [0, -1]], [[7285, 6618], [2, -6], [1, -1], [1, 0], [0, -1], [0, -1], [1, -1], [0, -2], [1, 0]], [[7294, 6555], [-1, 0], [-1, -1], [-1, -1], [-1, -2], [0, -4], [0, -2], [-1, 0], [-1, 1], [-1, -1], [-1, -1], [-1, 0], [-1, 2], [-1, 1], [-2, 5], [-1, 2], [0, 4], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [-1, 0], [0, -2], [-1, -1], [0, -1], [-2, 0], [-4, -1], [-1, 0], [-1, -1], [0, -1], [0, -1], [-2, -3], [0, -1], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 2], [0, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [-1, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [0, -1], [-1, -1], [-1, 0], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 2], [-1, 0], [0, 2], [0, 3], [0, 1], [0, 1], [-1, 1], [-1, 5], [-1, 3], [-2, 3], [0, 2], [-1, 1], [0, 1], [-1, 0], [0, -1], [-1, -1], [0, -1], [-1, 0], [0, -1], [-1, -1], [0, -1], [-1, 0], [0, -1], [-1, 0], [-1, -1], [-1, 0], [-1, -1], [-1, 0], [0, -1], [-1, 0], [-4, 2], [-2, 2], [-1, 2], [-3, 4], [-1, 1], [-1, 1], [-1, 2], [-1, 3], [-1, 1], [-2, 4], [0, 1], [-1, 0], [-3, 0], [-2, 3], [-1, -1], [-4, -2], [-1, -1], [-2, -2], [0, -1], [0, -1], [0, -1], [0, -2], [-1, -1], [-1, -1], [0, -1], [-2, -1], [-1, -1], [-1, -1], [-1, -2], [-2, -4], [0, -1], [-1, 0], [0, 1], [-1, 1], [-1, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [1, -1], [1, -2], [0, -1], [0, -1], [1, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2], [0, -1], [1, -3], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, -2], [0, -1], [0, -2], [-1, 0], [0, -1], [0, -1], [-1, -1], [-2, -1], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [-2, 0], [-2, -1], [-1, -3], [-1, -3], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 0], [0, -1], [-1, -1], [-2, 0], [-1, 0], [-2, 3], [-1, 1], [-2, 1], [-1, 1], [-1, 2], [-1, 1], [-2, -1], [-1, 0], [-2, 2], [-1, 0], [-1, -1], [-1, 0], [-1, 0], [-1, 2], [-1, 5], [0, 2], [0, 1], [1, 1], [0, 2], [0, 1], [0, 3], [0, 1], [0, 2], [1, 3], [0, 2], [0, 1], [-1, 1], [-1, -2], [0, -1], [0, -1], [0, -1], [-1, -1], [-1, 0], [-1, -1], [-1, 0], [0, 1], [-1, 1], [-1, 1], [-1, -1], [-1, -1], [0, 1], [-1, 0], [0, 1], [0, 2], [0, 1]], [[7151, 6578], [0, 1], [0, 2], [0, 4], [0, 3], [0, 2], [-1, 1], [-3, 1], [-1, 1], [-1, 5], [-1, 2], [-2, 1], [0, 2], [-1, 2], [0, 3], [1, 1], [0, 1], [1, 1], [1, 1], [0, 1], [0, 1], [1, 1], [1, 5], [0, 5], [0, 4], [-2, 3], [-2, 2], [-1, 2], [0, 1], [0, 1], [-1, 1], [1, 3], [0, 1], [0, 1], [1, 4], [1, 1], [3, 1], [1, 1], [1, 2], [1, 1], [0, 2], [1, 3], [-1, 2], [-1, 1], [-1, 0], [-1, 0], [-1, 0], [-1, 1], [-1, 0], [-2, -1], [-1, 0], [-1, 1], [0, 2], [-1, 2], [1, 3], [0, 1], [2, 2], [0, 1], [1, 1], [-1, 2], [0, 1], [-1, 4], [0, 1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [-1, 1], [-1, 1], [0, 2], [0, 2], [1, 1], [0, 1], [1, 1], [0, 1], [0, 3], [1, 1], [1, 2], [0, 2], [0, 2], [0, 2], [0, 1], [1, 2], [1, 0], [4, 2], [1, 0], [2, 4], [2, 1], [2, 1], [2, -1], [7, -6], [10, -4], [3, 1], [2, 0], [1, 0]], [[7177, 6707], [1, -1], [0, -1], [1, -1], [1, -2], [1, -1], [8, -4], [1, 0], [2, 1], [1, -1], [1, 1], [1, 1], [1, 3], [2, 3], [1, 1], [1, 1], [0, 2], [1, 1], [1, 0], [1, -1], [1, 0], [4, 1], [4, 5], [1, 1], [1, -1], [1, -1], [1, -1], [3, 1], [0, 1], [3, 5], [0, 1], [0, 4], [0, 2], [1, 1], [1, 0], [1, 1], [1, -1], [0, -1], [1, 0], [0, 1], [1, 1], [1, 3], [1, 1], [0, 2], [0, 2], [0, 2], [0, 1], [0, 1]], [[7230, 6741], [11, 13], [11, 14]], [[7252, 6768], [1, -2], [0, -1], [1, -1], [1, -1], [1, 1], [1, 3], [1, 1], [1, 0], [1, -3], [-1, -4], [-1, -4], [0, -5], [1, -5], [3, -10], [0, -3], [1, -5], [0, -3], [1, -3], [0, -1], [2, -14], [1, -2], [1, -2], [1, -1], [7, -3], [2, -1], [2, -4], [2, -4], [1, -1], [1, -1], [1, -1], [1, -2], [1, -3], [0, -1], [0, -2], [0, -1], [0, -2], [-2, -4], [-3, -3], [-3, -3], [0, -6], [2, -9], [0, -4], [0, -5], [0, -13], [1, -5], [0, -2], [3, -5]], [[7244, 6767], [-1, 0], [-2, -1], [-1, 0], [-1, 1], [-1, 3], [-1, 0], [-1, 1], [-2, -1], [-1, 0], [-1, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [-2, 0], [-1, 0], [-1, 1], [-1, 2], [-1, 1], [0, 1], [-1, 0]], [[7223, 6779], [-1, 0], [-1, 1], [0, 2], [-1, 2], [-2, 1], [-1, 1], [-1, 3], [0, 5], [0, 3], [-2, -2], [0, -1], [-1, 0], [-1, 0], [0, -2], [-1, 0], [-1, 0], [-1, -2], [-1, 1], [-1, 0], [-2, -1], [-1, 2], [0, 2], [0, 3], [-1, 3], [0, 2], [-1, 1], [-3, 1], [-1, 2], [-1, 2], [0, 3], [0, 1], [0, 1], [2, 2], [0, 1], [0, 2], [0, 1], [1, 1], [0, 2], [0, 1], [-1, 1], [0, 1], [0, 3], [1, 6], [-1, 2]], [[7199, 6836], [5, -2], [3, -7], [2, 0], [2, -1], [1, -5], [2, -1], [2, -2], [3, 0], [2, -3], [1, -3], [1, -5], [0, -4], [0, -5], [1, -4], [3, -1], [2, -2], [2, -3], [1, -3], [1, 0], [2, -2], [3, 1], [1, 0], [2, -6], [2, 1], [1, -5], [0, -7]], [[7252, 6768], [1, 0], [1, -1], [1, 0], [1, 1], [0, 2], [0, 2], [1, 1], [1, 0], [2, -2], [1, 0], [1, 0], [0, 3], [0, 2], [1, 1], [1, 1], [1, 1], [1, 2], [0, 1], [1, 1], [1, 0], [1, 1], [1, 2], [1, 1], [2, 0], [1, 1], [3, 5], [1, 0], [0, 4], [1, 0], [1, 1], [1, 0], [1, 0], [2, -2], [1, 0], [1, 0], [3, 3], [4, 1], [3, 2], [1, 1], [1, -1], [1, -1], [1, -1], [0, -3], [0, -2], [0, -1], [1, -1], [2, 1], [1, 0], [0, -1], [0, -1], [1, -1], [1, 0], [0, -1], [0, -1], [-1, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -1], [2, -1], [1, -1], [0, -2], [0, -1], [1, 0], [1, 1], [0, 1], [1, 1], [1, -2], [0, -3], [1, -2], [0, -3], [0, -2], [1, -2], [1, -1], [0, 1], [1, 1], [1, 2], [1, 2], [0, 4], [1, 1], [1, 0], [0, -1], [1, -2], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [1, -2], [0, -1], [0, -1], [0, -3], [0, -2], [-2, -4], [-1, -2], [0, -3], [0, -3], [0, -2], [0, -3], [-1, -2], [-1, -2], [0, -2], [0, -13], [-1, -2], [0, -1], [-2, -4], [0, -1], [-1, -3], [0, -5], [-1, -1], [-1, 0], [-1, 0], [-1, 1], [-1, -1], [-1, -1], [0, -1], [0, -2], [0, -1], [-1, -1], [-1, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [0, -2], [0, -1], [0, -1], [1, -1], [0, -1], [-1, -2], [-1, -1], [-2, 1], [-2, 1], [-1, -1], [0, -2], [1, -3], [0, -7], [0, -3], [0, -1], [-1, -1], [0, 1], [0, -1], [0, -1], [0, -3], [0, -1], [-1, -1], [-1, -2], [-1, -3], [-1, -1], [-7, 1], [-1, 0], [0, -1], [0, -1], [-1, 0], [-1, 1], [-3, 0], [-1, -2], [0, -2], [0, -3], [1, -3], [0, -2], [1, -3], [1, -2], [0, -1], [0, -2], [0, -2], [1, -3], [0, -2], [-1, -1], [0, 1], [-1, 0], [-1, 0], [-1, -1], [0, -2], [0, -1], [1, -4], [0, -2], [0, -3], [0, -2], [0, -1], [0, -1]], [[7223, 6779], [4, -19], [3, -19]], [[7177, 6707], [0, 1], [1, 3], [0, 2], [0, 3], [0, 2], [-1, 2], [-2, 3], [-1, 0], [-1, -2], [-1, -1], [-1, 0], [-1, -1], [-1, 0], [-2, 1], [-2, 2], [-4, 5], [-1, 1], [-1, 3], [-1, 5], [0, 2], [-1, 2], [-1, 1], [-1, 1], [0, -1], [-1, 0], [-2, -2], [-3, 0], [-2, 1], [-1, 0], [-1, 0]], [[7145, 6740], [0, 1], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, 2], [-1, 1], [0, -1], [-1, 1], [-1, 1], [-1, 0], [-1, -1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 3], [0, 2], [0, 1], [0, 1], [0, 2], [1, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [-4, 1], [-2, 0], [-2, 0], [-1, 1], [-1, 1], [-1, -1], [0, 1], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [0, 1], [-1, 2], [-1, 0], [0, 1], [-3, 4], [0, 1], [0, 1], [0, 3], [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [-1, 1], [0, -1], [-1, 0], [-1, 0], [0, 1], [-1, 0], [-3, 0], [-1, 0], [-1, -2], [0, -1], [-1, 0], [-1, 1], [-3, 1], [-2, 2], [-2, 1], [2, 8], [1, 0], [-1, 0], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [1, 2], [0, 1], [-1, 1], [0, 1], [1, 3], [0, 1], [0, 1], [1, 1], [0, 1], [1, 0], [1, -1], [1, 0], [0, 2], [1, 1], [0, 1], [1, 0], [1, 3], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [1, 0], [1, 0], [1, 1], [0, 1], [0, 1], [0, 1], [2, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 2], [0, 1], [1, 1], [1, 0], [0, 1], [1, 0], [1, -1], [1, 0], [1, 0], [1, 0], [3, 3], [0, -1], [1, 0], [1, -1], [1, 0], [1, 0], [1, 0], [0, -1], [1, 0], [1, 0], [0, -1], [1, 1], [0, 1], [1, 0], [1, -1], [0, 1], [1, 0], [1, -1], [1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-2, 2], [0, 1], [-1, 0], [0, 1], [-1, 0], [-1, 1], [0, 1], [0, 2], [2, 0], [2, -1], [1, -1], [2, -3], [1, 0], [1, -1], [1, 0], [1, 1], [1, 1], [0, 2], [0, 1], [0, 1], [1, 0], [2, 0], [1, 0], [1, 3], [2, 3], [1, 1], [1, 0], [1, 1], [1, -1], [0, -2], [1, -1], [0, 1], [0, 2], [1, 0], [0, 1], [-1, 1], [1, 0], [2, 1], [1, 1], [1, -1], [1, -2], [2, 0], [1, -1], [0, -3], [1, -1], [0, -2], [1, 1], [0, 2], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [3, 1], [1, -1], [0, -1], [1, -1], [4, -2], [1, -1], [1, -1], [0, -2], [0, -3], [1, -3], [0, -3], [0, -2], [2, 0], [0, 1], [0, 1], [1, 0], [1, 2], [3, -1], [2, -3], [2, -2], [2, -3], [0, -2], [3, -11], [0, -1]], [[7151, 6578], [-10, 10], [-1, 2], [0, 1], [-1, 1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [-1, 1], [0, 1], [-1, 2], [-2, 1], [-1, 2], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [-1, 1], [0, 1], [-1, 1], [0, 1], [0, -1], [-1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 2], [0, 1], [1, 0], [0, 3], [1, 0], [0, 1], [0, 1], [-1, 3], [1, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 2], [0, 1], [0, 1], [1, 3], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 2], [0, 1], [0, 6], [0, 2], [-1, 7], [-1, 4], [0, 5], [0, 1], [0, 2], [0, 2], [-1, 5], [0, 1], [0, 1], [-2, 4], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 3], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [1, 1], [1, 0], [0, -1], [1, 0], [0, 1], [1, 4], [0, 1], [-1, 0], [0, 1], [0, 1], [1, 2], [0, 1], [1, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0], [1, 1], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [1, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1]], [[8676, 6934], [0, 6], [0, 2], [1, 1], [1, 0], [1, 2], [3, 7], [0, 1], [1, 2], [1, 1], [0, 3], [1, 2], [0, 1], [2, 3], [2, 2], [2, 1], [1, 1], [1, 0], [4, 0], [3, -1], [1, 0], [1, 1], [6, 1], [0, -1], [1, -1], [0, -1], [2, 1], [3, 0], [2, 0], [2, 2], [2, 2], [2, 3], [0, 2], [1, 2], [0, 2], [0, 3], [0, 2], [0, 1], [0, 1], [1, 1], [2, 2]], [[8726, 6991], [1, -3], [-1, 0], [-1, -2], [0, -2], [0, -1], [0, -3], [-1, -3], [0, -2], [0, -1], [-1, -2], [-2, -3], [-2, -3], [-2, -2], [-3, 0], [-3, 0], [-2, 0], [-1, 0], [0, 1], [0, 1], [-1, 0], [-4, -1], [-2, -1], [-1, 0], [-3, 1], [-4, 0], [-1, 0], [-1, 0], [-2, -2], [-1, -2], [-1, -1], [-1, -1], [-1, -5], [0, -1], [-1, -1], [-1, -2], [-3, -8], [-1, -2], [-1, 0], [0, -1], [0, -5], [-1, -2], [0, -1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, -1]], [[8676, 6934], [0, -1], [0, -1], [-1, -1], [0, 10], [0, 3], [0, 1], [1, 1], [1, 0], [0, 1], [1, 1], [2, 7], [1, 0], [0, 1], [0, 1], [1, 1], [1, 3], [0, 2], [1, 0], [0, 2], [2, 3], [2, 2], [2, 2], [2, 1], [1, 0], [0, -1], [4, 1], [3, -2], [2, 1], [6, 2], [1, -1], [0, -1], [1, -1], [1, 1], [3, 0], [2, 0], [2, 1], [1, 2], [2, 3], [0, 1], [1, 2], [0, 1], [0, 1], [0, 2], [0, 1], [0, 2], [0, 1], [0, 2], [1, 0], [0, 2], [2, 1], [1, 1], [0, -1], [0, -2], [0, -1]], [[3263, 501], [-1, 0], [0, 1], [2, 1], [1, -1], [-1, -1], [-1, 0]], [[3244, 507], [1, -1], [1, 1], [1, 0], [0, -1], [-1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1], [-1, -1], [0, 1], [-1, 1], [1, 1], [1, 0], [0, 1], [0, 2], [1, 0], [1, 0], [0, -1], [-1, 0], [0, -1], [0, -1], [-1, -1]], [[3243, 523], [1, -2], [1, 0], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [-1, -1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1]], [[3282, 532], [1, 0], [0, 1], [1, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 1], [0, 1], [-1, 0], [-1, 1], [0, 1], [0, 1], [-1, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -1]], [[3246, 535], [1, -1], [-1, -1], [0, 1], [-1, 0], [0, 1], [0, 1], [1, 1], [0, -1], [0, -1]], [[3201, 545], [0, -1], [1, 0], [0, -2], [-2, 0], [-1, 2], [0, 1], [0, 1], [0, -1], [1, 0], [1, -1], [0, 1], [0, 1], [0, 1], [1, 0], [0, -1], [0, -1], [-1, 0]], [[3249, 546], [-1, 0], [0, 1], [0, 1], [1, 0], [1, 1], [0, -1], [0, -1], [0, -1], [-1, 0]], [[3211, 543], [0, -1], [0, -2], [1, 0], [0, -1], [-1, -1], [0, -1], [-2, -1], [-1, 0], [-1, 1], [0, 1], [-1, 0], [0, 1], [-1, 1], [-1, 0], [1, 2], [-1, 1], [-1, 1], [1, 1], [1, 0], [1, 0], [0, 1], [1, 2], [1, 0], [0, 1], [0, -1], [1, 0], [0, -1], [1, 0], [-1, -1], [0, -1], [-2, -1], [0, -1], [0, -1], [2, 1], [1, 1], [1, 1], [0, 2], [0, 1], [0, 1], [1, 1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -2]], [[3202, 554], [-1, 0], [-1, 0], [0, -1], [0, -1], [0, -2], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0], [1, 0], [0, -1]], [[3217, 556], [0, 1], [0, 2], [0, 1], [0, 1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -1], [-1, 0]], [[3216, 562], [-1, 0], [-2, 0], [0, 1], [2, 0], [1, -1]], [[3255, 579], [1, -1], [3, -2], [0, -1], [1, -1], [-1, 0], [-1, 0], [0, -1], [0, -1], [1, 0], [-1, -1], [-1, -2], [-1, -1], [0, 1], [-1, 0], [0, -1], [0, -1], [0, -1], [1, 1], [0, -1], [-1, -2], [0, -2], [0, -1], [-1, 0], [-1, -1], [0, -1], [0, 1], [0, 1], [0, 1], [-1, -2], [-1, -1], [0, 1], [-2, -3], [1, 0], [-1, -2], [-1, -4], [-1, -1], [-2, -3], [-3, -7], [-1, -2], [0, -1], [0, -1], [-1, 0], [-1, -1], [-2, -2], [0, 2], [-1, 1], [-1, 1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [-2, 0], [-1, -1], [0, 1], [0, 1], [0, 1], [-2, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -1], [0, -1], [0, -1], [-3, -4], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-1, 1], [0, 1], [-1, 1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -2], [1, -1], [-2, -2], [-1, -1], [-2, 0], [-1, 3], [1, 0], [0, -1], [0, 1], [-1, 2], [-1, 1], [0, 1], [1, 1], [0, 1], [-1, 0], [-2, 0], [-1, 0], [0, -1], [1, 0], [1, -1], [1, -2], [0, -1], [-2, 0], [0, 1], [-1, 0], [-1, 3], [-1, 0], [0, 1], [-1, 0], [-1, 2], [0, 1], [-2, 0], [0, 1], [0, 2], [0, 1], [1, -1], [2, -1], [1, 0], [0, -1], [0, -1], [1, 0], [0, 2], [2, 1], [1, 1], [-1, 1], [-1, 1], [-1, 2], [3, 0], [1, -1], [1, -1], [0, 1], [1, 0], [0, -1], [1, 1], [0, -1], [1, 0], [1, -1], [1, 0], [-1, 1], [1, 0], [1, 1], [1, 0], [0, 1], [1, 2], [0, 1], [-1, 0], [-1, -1], [-1, -1], [-1, 0], [-2, 1], [3, 0], [1, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [1, 1], [1, 0], [0, -1], [-1, -1], [1, 0], [1, 0], [-1, -1], [0, -2], [1, -1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [0, 2], [0, 1], [1, 1], [0, -1], [0, -1], [1, -1], [0, 1], [0, -1], [1, 0], [1, 2], [0, 1], [0, 1], [0, 1], [-1, 1], [-1, 0], [0, -1], [-1, 0], [-2, 0], [-1, 0], [1, -2], [-1, 0], [-2, -1], [0, -1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [0, 1], [-1, 1], [-1, 1], [0, 1], [-1, 1], [0, 2], [1, 1], [1, -1], [3, -1], [1, 0], [2, 2], [3, 0], [2, 1], [1, -2], [1, 0], [2, -1], [-1, 2], [-1, 1], [-1, 0], [-1, 0], [-1, 3], [-1, 1], [-1, 2], [-1, 0], [-4, 3], [-1, 1], [0, 1], [0, 1], [0, 1], [2, 0], [1, -1], [1, 0], [-1, 2], [0, 1], [-1, 0], [-1, 1], [-1, 0], [-1, 0], [-1, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [-1, 2], [1, 0], [1, -1], [4, -2], [1, -1], [3, -3], [2, -2], [3, -1], [4, 2], [0, 1], [-2, 0], [0, 2], [0, 1], [1, 1], [0, 1], [1, 0], [0, -1], [0, -2], [2, 3], [1, 0], [1, 0], [0, -1], [-1, 0], [0, -1], [3, 0], [1, -1], [-1, 0], [0, -1], [-1, 0], [1, -1], [1, 0], [6, 2], [1, 2], [1, 0], [0, -1], [-2, -2], [-1, -1], [1, -1], [2, 0], [3, 2], [-1, 1], [0, 1], [-1, 0], [0, 2], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [0, -1]], [[3245, 579], [1, -1], [0, 2], [1, -1], [0, -1], [1, 0], [1, 0], [0, -1], [-1, -1], [-1, 0], [-1, -1], [-1, 0], [-1, 0], [0, 2], [1, 0], [-1, 1], [-1, -1], [-1, 1], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [0, -1]], [[3239, 580], [0, -1], [-1, 0], [0, 1], [-1, 1], [0, 1], [-1, 1], [2, 0], [1, 0], [1, -1], [-1, 0], [0, -1], [1, -1], [-1, 0]], [[3231, 582], [1, 0], [1, 0], [1, 1], [1, -1], [0, -1], [0, -1], [1, -1], [-1, 0], [-1, -2], [0, -2], [-1, 0], [-1, 1], [-2, -1], [-1, 1], [-1, 1], [1, 1], [1, 1], [1, 0], [1, -1], [0, -1], [1, 0], [0, 1], [1, 0], [-1, 1], [-1, 1], [-2, 1], [-1, 2], [-1, 1], [0, 1], [1, 0], [0, -1], [1, -1], [1, -1]], [[3222, 581], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [1, -1], [0, -1], [1, -1], [0, -1], [0, -1]], [[3274, 580], [1, 0], [1, 0], [1, 0], [0, -1], [0, 1], [0, 1], [1, 0], [0, 1], [3, 0], [1, 0], [0, -1], [1, 0], [1, -1], [1, -2], [0, -1], [1, -2], [0, -1], [0, -1], [-1, -1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [-1, 2], [0, 1], [-1, -1], [-1, -2], [1, 0], [0, -1], [0, -3], [0, -1], [2, 2], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, 0], [0, 1], [0, -1], [0, -1], [1, 0], [1, 0], [0, 1], [0, -1], [1, -1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -1], [1, -1], [0, 1], [0, 1], [-1, 2], [0, 1], [1, -1], [1, -1], [0, 2], [-1, 1], [-1, 1], [1, 1], [0, 1], [0, 1], [-1, -1], [-1, 0], [0, 1], [0, 1], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 2], [2, 4], [0, 1], [1, 1], [1, 0], [6, 1], [1, 0], [1, 0], [1, 0], [1, -1], [0, -3], [0, -1], [1, 0], [1, -2], [0, -1], [1, 0], [0, -1], [-1, -1], [1, 0], [0, -1], [0, -1], [-1, 0], [-4, 0], [-2, 3], [-1, 0], [0, -1], [0, -1], [-1, 1], [-2, -2], [1, -1], [1, -1], [1, -1], [2, 0], [1, 0], [3, -1], [1, 0], [1, -1], [0, -2], [-1, -1], [-1, -1], [-2, 0], [0, -1], [2, -1], [1, 0], [1, 1], [1, 0], [0, -1], [-1, 0], [-3, -2], [-2, 0], [-1, 0], [0, -1], [-1, -1], [-4, -1], [-2, 1], [-1, 0], [0, -1], [1, -1], [2, 0], [-1, -1], [-2, 0], [-2, -2], [-1, 0], [1, 0], [2, 1], [2, 0], [-1, -1], [0, -1], [-1, 0], [-1, -1], [-3, -2], [-1, -1], [-3, 1], [-1, 0], [-1, -1], [-5, 0], [-1, 1], [-1, 1], [-1, 1], [-1, 1], [0, 1], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [1, 0], [1, -1], [1, -1], [1, -2], [0, -1], [2, 0], [1, 0], [1, 0], [1, -1], [0, -2], [1, -1], [-2, -1], [0, -1], [0, -1], [0, -1], [1, -2], [0, -1], [-1, 0], [-1, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, -1], [-1, -1], [0, 1], [0, 3], [-1, -2], [0, 1], [-1, 1], [0, 1], [0, 1], [-1, 0], [-1, 0], [0, 1], [0, -1], [-1, 1], [-1, 1], [0, 1], [-1, -1], [0, -1], [-1, 0], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [1, 1], [1, -1], [1, -1], [0, -1], [0, -1], [1, 0], [1, 0], [-1, -2], [1, 0], [1, 0], [-1, -1], [-1, -1], [0, -2], [1, 0], [1, 1], [1, 0], [0, -1], [-2, -2], [1, -1], [0, -1], [1, -1], [-1, -1], [-1, 1], [-1, 1], [-1, 0], [-1, 0], [-1, 1], [0, 1], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [0, -1], [-2, 2], [0, 1], [0, -1], [0, -1], [-1, -1], [0, -1], [0, 1], [-1, 1], [0, -1], [0, -1], [1, -2], [0, -1], [-1, 0], [1, -1], [1, 0], [0, -1], [1, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, 1], [-1, 1], [-1, 1], [-1, 0], [-1, 1], [0, 2], [0, 1], [-1, 0], [-1, 1], [-1, 0], [0, 1], [1, 1], [-1, 1], [-1, -1], [0, 1], [0, 1], [-1, 2], [-1, 1], [-1, 1], [0, 1], [0, 1], [1, 0], [0, -1], [1, -1], [1, 1], [0, 1], [-1, 1], [2, 0], [1, 2], [-1, 0], [-1, 1], [0, 1], [0, 1], [1, -1], [1, 0], [-1, 2], [0, 1], [1, 0], [1, 1], [-2, 1], [-1, 1], [0, 1], [1, 1], [1, -1], [1, -1], [1, 0], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [1, -1], [0, 1], [0, 1], [0, 1], [3, 1], [0, -1], [1, 1], [0, 3], [1, 0], [1, 0], [-1, 2], [3, 3], [1, -1], [0, 1], [0, 1], [1, 0], [2, 1], [1, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, 0], [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [0, 1], [-1, 0], [-2, 2], [-1, 1], [-1, 2], [1, 1], [1, 2], [0, 2], [1, -4], [1, -2], [1, 2], [-1, 2], [0, 1], [0, 1], [1, 0], [0, 1], [-3, 2], [-1, 0], [1, 1], [0, 1], [0, 1], [1, 1], [0, -1], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [2, 0], [0, 1], [1, 0], [0, 1], [0, 1], [-1, 2], [0, 1], [-1, 1], [0, 1], [-1, 2], [1, 0], [1, -2], [1, -1], [1, 0], [3, -3]], [[3245, 586], [1, -1], [3, 1], [0, -1], [0, -1], [1, 0], [0, -1], [1, 1], [0, 1], [1, 0], [1, -1], [0, -2], [0, -1], [-1, -1], [-2, 0], [-1, 0], [-1, 3], [-4, 1], [-1, 0], [0, 1], [0, 1], [1, 1], [1, -1]], [[3210, 589], [0, -1], [0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, 0]], [[3212, 596], [0, -1], [-1, 0], [-1, 1], [0, 1], [0, 1], [1, -2], [1, 0]], [[3206, 598], [-1, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, -1], [1, -1], [0, -1], [0, -1]], [[3203, 600], [-1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [1, -1], [0, -1], [1, 0], [0, -1]], [[5830, 4922], [-2, -5], [-2, -4], [-1, -3], [0, -3], [0, -2], [1, -2], [-12, 0], [-11, 0], [-2, 4], [-3, 15], [-2, 11], [0, 29], [11, 0], [12, 0], [11, 0], [0, -20], [0, -20]], [[3409, 4466], [1, 1], [0, -2], [-1, -1], [1, -1], [1, -2], [1, -1], [0, -1], [0, -2], [-1, -3], [1, -1], [0, -1], [0, -2], [0, -1], [0, -3], [0, -1], [0, -2], [1, -3], [-1, 0], [0, -1], [-1, -2], [0, -1], [1, -1], [0, -2], [0, -1], [-1, -1], [1, -1], [0, -2], [0, -1], [0, -3], [0, -1], [-1, -2], [0, -2], [0, -1], [0, -1], [0, -1], [-1, -5], [-1, -1], [-1, -4], [0, -2], [-1, 0], [0, -2], [0, -2], [0, -1], [0, -2], [1, 0], [1, -2], [-1, -1], [0, -1], [0, -2], [1, -2], [-1, 0], [-1, 0], [0, 1], [-1, 2], [0, 1], [0, -1], [-1, 0], [-1, -1], [-1, 1], [-1, 0], [0, 1], [-1, 1], [0, 1], [-1, 0], [-1, 1], [-1, 0], [-1, 1], [0, 1], [-1, 2], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [0, 2], [1, 0], [1, -1], [1, 1], [0, 5], [1, 0], [1, 0], [0, 1], [2, 3], [0, 2], [1, 7], [1, 5], [3, 7], [0, 1], [0, 4], [1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 2], [0, 1], [0, 1], [-1, 1], [1, 1], [0, 1], [0, 2], [-1, 0], [0, 1], [1, 0], [0, 2], [0, 1], [-1, 2], [0, -1], [0, 4], [1, 1], [1, 4], [0, 3], [1, 1], [0, -1], [0, -3], [0, -1], [0, -3]], [[3317, 4462], [0, 1], [0, -1], [1, 0], [-1, -2], [0, -1], [1, -1], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -1], [0, -1], [-1, -1], [0, -4], [1, -1], [0, -1], [0, -1], [1, 0], [0, 1], [1, 0], [-1, -3], [0, -1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [1, -1], [0, -2], [1, -2], [0, -2], [0, -1], [1, 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -3], [1, 0], [-1, -2], [1, -1], [1, 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -2], [1, -2], [0, -2], [0, -1], [1, -1], [0, -1], [1, -4], [0, -1], [0, -2], [3, -10], [1, -1], [3, 0], [1, -1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -1], [-1, -2], [-1, -1], [-1, 1], [0, 1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [-1, 0], [-1, -3], [-1, 0], [-2, 1], [-1, 1], [0, 1], [-1, 0], [-1, 0], [-1, 0], [-1, 1], [0, 1], [-1, 2], [0, 2], [-1, 1], [-1, -1], [-3, -4], [0, 1], [-1, 1], [-1, 0], [-1, 0], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, -1], [-1, -5], [0, -1], [-2, -6], [-1, -2], [-1, -1], [-1, 0], [-3, 1], [-1, 0], [-1, 0], [-2, -3], [-1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [0, -1], [0, -2], [0, -2], [-1, -1], [0, -2], [-1, -2], [-1, 0], [-1, 0], [-1, 1], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [0, -2], [-1, -2], [0, 2], [0, 2], [0, 3], [0, 1], [1, 1], [1, 2], [1, 2], [0, 1], [1, 0], [1, 1], [0, 1], [1, 1], [0, 3], [0, 2], [0, 1], [1, -1], [1, 1], [0, 2], [1, 0], [0, -1], [1, -1], [1, -1], [1, 0], [1, 0], [2, 1], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [-1, 0], [0, 2], [1, 1], [0, 3], [-1, 3], [1, 0], [0, 1], [-1, 1], [1, 2], [-1, 3], [0, 1], [0, 2], [1, 0], [0, 1], [0, 3], [1, 2], [1, 1], [-1, 1], [-1, -1], [-1, 1], [1, 1], [1, 2], [1, 2], [1, 0], [0, -1], [1, 1], [-1, 1], [1, 3], [0, 1], [0, 1], [-1, 2], [1, 2], [1, 0], [1, 2], [1, 0], [1, 1], [0, 1], [0, 1], [0, 2], [1, -1], [1, 1], [0, 1], [1, 1], [1, 0], [1, 0], [0, 2], [1, 2], [0, 1], [0, 1], [0, 3], [0, 2], [-1, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [-1, 0], [0, 2], [-1, 1], [-1, 2], [0, 2], [-1, 1], [0, 1], [0, 2], [0, 1], [-1, 2], [0, 1], [0, 3], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 2], [0, 1], [1, -1], [1, 0], [0, 1], [1, 0], [0, -1], [1, -1], [0, 1], [1, 1], [0, 1], [0, 1], [1, -1], [1, -1], [0, 1], [1, 1], [1, -3], [0, -1], [0, -3], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -1], [0, -1], [1, 0]], [[6027, 6572], [-2, -2], [-1, -2], [0, -1], [-1, 0], [-1, 2], [0, 1], [1, 0], [1, 2], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 1], [0, 2], [-1, 5], [0, 1], [1, 2], [0, 1], [0, 1], [1, 4], [0, 2], [0, 1], [0, 1], [0, 2], [0, 2], [0, 1], [-1, 0], [0, -1], [0, 1], [0, 1], [0, 1]], [[6023, 6610], [1, -1], [1, 1], [0, 1], [1, 1], [0, 1]], [[6026, 6613], [0, 1], [1, 0], [1, 1], [0, 1], [1, 2], [0, 1]], [[6029, 6619], [0, -1], [0, -1], [0, -1], [-1, -1], [-1, -1], [2, -2], [-1, -2], [0, -1], [1, -1], [0, -3], [0, -1], [0, -2], [0, -2], [0, -1], [0, -1], [1, -1], [0, -1], [0, -7], [1, -3], [0, -1], [-1, 0], [0, -2], [0, -2], [0, -1], [0, -2], [-2, -4], [-1, -2]], [[6026, 4568], [0, 3], [1, 1], [1, 0], [0, -4], [2, 0], [2, 0], [-3, 0], [-3, 0]], [[6023, 4568], [-2, 0], [-3, 0], [-3, 0], [-3, 0], [-2, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-2, 0], [-3, 0], [-3, 0], [-3, 0], [2, 3], [2, 2], [2, 3], [2, 2], [3, 2], [3, 3], [2, 2], [2, 2], [3, 2], [2, 3], [2, 1], [1, -2], [2, 3], [2, 3], [1, -2], [-1, -6], [3, 0], [2, -1], [-2, -9], [2, -5], [1, -6]], [[8585, 6074], [-1, 0], [0, 1], [1, 0], [0, -1]], [[4728, 6210], [1, -4], [0, -6], [1, -5], [-1, -3], [0, -4], [0, -4], [1, -4], [0, -4], [0, -3], [-1, -2], [-3, -1], [-3, -1], [-2, 0], [-4, 1], [-2, 0], [-2, 0], [-2, -1], [-2, -3], [-2, -4], [-4, -6], [-1, -3], [-3, -1], [-2, 0], [-2, 3], [-2, 1], [-1, 0], [-2, -2], [-2, -1], [-1, 0], [-3, 2], [-4, 5], [-2, 2], [-3, 1], [-3, 1], [-2, -1], [-3, 0], [-4, -3], [-3, -2], [-3, -2], [-4, -2], [1, -6], [2, -4], [0, -4], [-1, -4], [-2, -3], [-2, -5], [-1, -3], [-1, -5], [-1, -3], [-2, -5], [-1, -6], [-1, -3], [0, -4], [-1, -2], [-4, -1], [-2, -1], [-2, -2], [-1, -2], [-1, -5], [0, -4], [0, -3], [-1, -7], [-1, -6], [-1, -9], [-1, -7], [-1, -11], [-1, -11], [-2, -10], [-1, -7], [-1, -3], [-2, -4], [-2, -3], [-2, -4], [-2, -3], [-3, -5], [-3, -3], [-1, -2], [-1, -2], [-2, -5], [-2, -7], [-1, -6], [-2, -9], [-2, -5], [-1, -3], [-2, -2], [-2, -3], [-3, -2], [-3, -3], [-3, -3], [-2, -3], [-1, -4], [-2, -5], [-1, -7], [-1, -8], [-1, -5], [-2, -17], [0, -10], [-1, -7], [-1, -8], [0, -12], [0, -10], [-1, -5], [0, -5], [-1, -5], [-2, -3], [-2, -5], [-1, -3], [-1, -3], [-2, -3], [-2, -6], [-1, -4], [0, -3], [1, -5], [-1, -5], [-1, -5], [-2, -7], [-3, -4], [-4, -1], [-5, 0], [-4, 1], [-5, 0], [-5, 1], [-4, 2], [-5, 1], [-3, 0], [-4, -2], [-12, 0], [-4, -1], [-7, -2], [-1, -1]], [[4490, 5765], [0, 2], [1, 10], [0, 3], [0, 3], [0, 2], [0, 2], [1, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 2], [1, 3], [0, 3], [0, 1], [3, 15], [1, 2], [1, 1], [0, 2], [1, 1], [0, 3], [1, 1], [0, 1], [1, 0], [1, -1], [3, 3], [0, 1], [1, 1], [1, 2], [1, 8], [0, 2], [1, 4], [1, 1], [0, 4], [0, 6], [0, 2], [1, 2], [0, 2], [0, 2], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 0], [1, 2], [1, 3], [0, 1], [1, 1], [0, 2], [0, 2], [-1, 1], [0, 1], [-1, -1], [0, 1], [0, 2], [1, 1], [1, 3], [0, 1], [2, 11], [1, 1], [0, 1], [2, 5], [0, 5], [0, 1], [1, 2], [1, 4], [1, 4], [1, 1], [0, 1], [0, 2], [1, 2], [0, 1], [1, 2], [0, 1], [0, 4], [0, 1], [-1, 2], [1, 0], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, -2], [-1, 0], [0, -1], [-1, -1], [0, -1], [0, -2], [-1, -2], [0, -1], [0, -1], [0, -1], [0, -1], [-2, -3], [0, 1], [0, 1], [1, 2], [0, 1], [1, 5], [2, 5], [0, 1], [0, 2], [1, 1], [2, 4], [1, 1], [1, 1], [0, 1], [1, 1], [1, 1], [1, 1], [0, 2], [1, 3], [1, 3], [1, 1], [1, 1], [0, 2], [0, 1], [3, 5], [2, 3], [2, 7], [0, 2], [1, 2], [1, 1], [1, 1], [1, 0], [1, 1], [1, 2], [0, 2], [0, 2], [1, 1], [1, 2], [0, 1], [1, 1], [0, 1], [1, 5], [0, 4], [1, 3], [0, 2], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 7], [0, 1], [1, 9], [0, 1], [1, 7], [1, 4], [0, 1], [1, 0], [0, 5], [1, 3], [0, 1], [0, 1], [0, 2], [1, 7], [2, 7], [1, 3], [0, 1], [0, 1], [1, 3], [0, 1], [0, 2], [0, 4], [0, 1], [0, 2], [0, 1], [1, 2], [0, 1], [1, 5], [1, 0], [1, 1], [2, 2], [2, 5], [0, 1], [1, 1], [0, 2], [1, 0], [3, 1], [1, 1], [3, 3], [5, 8], [3, 5], [2, 5], [2, 7], [1, 4], [0, 6], [1, 4], [1, 9], [0, 3], [3, 8], [0, 1], [0, 1], [2, 8], [0, 7], [1, 2], [0, 1], [0, 3], [0, 1], [2, 0], [2, 0], [2, 0], [3, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [1, 0], [1, 0], [2, 0], [2, 0], [2, 0], [2, 0], [3, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [3, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0], [2, 0]], [[5935, 6745], [1, 1]], [[5936, 6746], [0, -1], [0, -1], [-1, 1]], [[5976, 6737], [-1, 1], [-1, -1], [-1, 1]], [[5973, 6738], [1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [-1, -1], [0, -1], [0, 1], [-1, -1], [-1, 1], [0, -1], [0, 1], [0, 1], [-1, 0], [0, -1], [0, -1]], [[5967, 6735], [-1, 0], [-1, 1], [-1, 0], [0, -1], [-1, 1], [0, 1], [0, 1], [0, -1], [-1, 0], [-1, 0], [0, -2], [0, -1], [0, -1], [-1, 1], [1, 1], [0, 2], [0, 1], [0, 1], [0, 1], [-1, 2], [0, 1], [-1, 2], [0, 1], [0, 1], [-1, -1], [0, -1], [-1, 0], [-1, 0], [0, -1], [-1, 1], [-1, 0], [-1, 0], [-1, 1], [-1, 0], [-1, -2], [0, 1], [-1, -1], [-1, -1], [-1, 0], [0, -1], [-1, -1], [-1, -1], [-1, 0], [-1, 0], [0, -1], [0, -1], [-1, 0], [0, 2], [0, 1], [-1, 1], [-1, 0], [-1, 1], [0, 1], [-1, 1], [1, 1]], [[5939, 6746], [1, -1], [1, -1], [1, -1], [1, 1], [1, 1], [0, 2], [1, 2], [0, 3], [0, 5], [0, 2], [0, 2], [1, -2], [1, 0], [2, -1], [2, 0], [4, 0], [0, -1], [4, -1], [7, 2], [3, 3], [1, 1], [1, 0], [2, 1], [4, 3], [1, 2], [2, 1], [1, 3], [1, 1], [2, 0], [1, 1], [2, 2], [5, 5], [1, 1], [0, -1], [0, -2], [0, -1], [-1, 0], [-3, -4], [-3, -4], [-6, -8], [-1, -1], [0, -2], [-1, -2], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, -1], [-1, -2], [0, -2], [-1, -1], [0, -6], [1, 0], [1, -3], [0, -1], [0, -1], [1, -2]], [[3053, 9998], [-1, 0], [-1, 0], [0, 1], [1, 0], [1, 0], [0, -1]], [[6305, 3326], [-1, 3], [1, 1], [0, -1], [0, -1], [0, -1], [0, -1]], [[6299, 3336], [0, -1], [1, -1], [0, -1], [1, -1], [1, 0], [1, -1], [0, -1], [0, -1], [0, -1], [-1, -3], [0, -1], [0, -1], [1, -1], [0, -1], [-1, -1], [0, -1], [0, -2], [-1, -1], [1, -2], [0, -1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [1, 0], [1, -2], [1, 0], [0, 1], [-1, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [1, 0], [-1, 1], [0, 1], [0, 2], [0, 1], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [1, 4], [0, -1]], [[6231, 3021], [-1, 1], [1, 1], [0, -2]], [[6363, 3414], [1, 1], [0, -1], [-1, 0]], [[6162, 2647], [0, 1], [0, -2], [0, -1], [-1, -1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, 1]], [[4728, 6210], [2, 0], [2, 0], [0, -7], [0, -7], [0, -6], [0, -7], [0, -1], [0, -3], [0, -4], [0, -6], [0, -6], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -7], [0, -7], [0, -5], [0, -5], [0, -3], [0, -1], [0, -3], [0, -1], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-2, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-2, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [-3, 0], [0, -5], [0, -6], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -5], [0, -5], [0, -6], [0, -3], [0, -1], [-3, -2], [-7, -7], [-1, 0], [-5, -2], [-1, -1], [-2, -3], [-3, -5], [-4, -6], [-3, -4], [0, -2], [-3, -8], [-1, -4], [0, -5], [0, -5], [1, -9], [1, -4], [0, -18], [1, -18], [1, -30], [0, -6], [0, -11], [-4, 0], [-1, 0], [-4, 0], [-5, 0], [-7, 0], [-8, 0], [-8, 0], [-1, 0], [-10, 0], [-10, 0], [-10, 0], [-10, 0], [-9, 0], [-8, 0], [-7, 0], [-5, 0], [-3, 0], [-1, 0], [-4, 0], [0, -1], [-1, -6], [0, -7], [-1, -8], [-1, -2], [0, -7], [0, -2], [0, -8], [0, 2], [-1, 3], [0, 2], [0, 1], [0, 2], [0, 1], [0, 3], [0, 1], [1, 4], [1, 21], [0, 3], [1, 1], [0, 3]], [[9242, 7333], [0, -1], [0, 1], [-1, -1], [0, -1], [0, 1], [-1, 0], [1, 1], [0, 1], [0, -1], [0, 1], [1, -1], [0, 1], [0, 1], [1, 0], [0, -1], [-1, 0], [0, -1]], [[9237, 7335], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0], [0, 1], [1, 0], [-1, 1], [0, 1], [0, -1], [1, 0]], [[9244, 7342], [1, -1], [1, 0], [0, -1], [0, -1], [0, -2], [-2, -1], [-1, 0], [0, 1], [0, 1], [-1, 2], [1, 1], [1, 1]], [[9249, 7349], [1, -1], [0, -1], [-2, 0], [0, 1], [1, 1]], [[9265, 7365], [0, -1], [1, -1], [1, 0], [0, -1], [0, -1], [-1, -1], [-1, 0], [0, -1], [-1, -1], [0, 1], [-1, -1], [0, -1], [-1, 0], [0, -1], [-1, 0], [-1, 0], [1, -1], [-1, -1], [-1, -1], [0, 1], [-1, 1], [-1, 0], [0, 1], [1, 2], [-1, 1], [0, 1], [2, 1], [3, 3], [1, 1], [1, -1], [0, 1], [1, 0]], [[9249, 7405], [1, -1], [3, 1], [3, 1], [0, -3], [0, -1], [-1, -1], [0, -1], [-1, 0], [-1, 1], [-1, -1], [-1, 0], [0, -3], [-1, 0], [-1, -2], [0, -1], [-1, 0], [-1, -1], [-1, 1], [0, -1], [-2, 0], [-1, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [-3, -4], [-1, -1], [0, -2], [-1, -1], [0, -2], [0, -1], [0, -1], [-1, 1], [-1, -1], [0, -2], [0, -1], [0, -2], [-1, -1], [-1, -1], [0, -1], [-2, 0], [-1, -1], [0, -1], [-1, -2], [-1, -1], [0, -7], [0, -5], [0, -1], [0, 1], [-1, 0], [0, 1], [0, 1], [1, 1], [-1, 0], [1, 1], [-2, 1], [-1, 0], [-1, -1], [0, 4], [0, 2], [0, 1], [-1, 1], [1, 1], [1, 1], [0, 2], [1, 1], [1, 1], [1, 1], [0, 1], [3, 3], [0, 3], [1, 0], [1, 1], [0, 1], [1, 2], [0, 2], [0, 1], [0, 1], [1, 1], [1, 2], [1, 1], [0, 2], [1, 2], [0, 1], [1, 1], [1, 0], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 5], [1, 2], [1, 1], [1, -1], [2, -3], [1, 0], [1, -2]], [[9322, 7469], [-1, -1], [-1, 0], [-1, 0], [-2, 0], [-2, 0], [-1, -1], [-2, -3], [-1, -1], [-3, -1], [-2, -1], [-2, -2], [-2, -4], [-2, -4], [-1, -3], [-1, -2], [-1, -1], [-2, -2], [-1, 0], [-1, 0], [-1, 0], [-1, -1], [0, -1], [-1, 2], [0, 2], [-1, 1], [-1, -1], [-1, -2], [0, -1], [0, -2], [1, 0], [0, -1], [-1, -1], [-1, -2], [0, -1], [-1, -2], [-2, -3], [-3, -3], [-2, -4], [-1, -2], [0, -1], [-2, -5], [-2, -1], [-1, 1], [-2, -3], [-1, -2], [0, -2], [-1, -1], [0, -2], [0, -1], [-1, 0], [-1, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [1, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 2], [0, -1], [1, -1], [0, -1], [0, -1], [1, -1], [0, 2], [1, 1], [0, 1], [-1, 1], [0, 2], [1, 1], [1, -2], [2, 0], [0, 2], [2, 3], [0, 1], [0, 2], [-2, 1], [-1, 0], [0, 2], [0, 2], [1, 1], [1, -2], [1, -1], [1, 2], [0, 2], [1, 1], [2, 2], [2, 3], [1, 1], [0, 1], [1, 1], [0, 2], [0, 1], [0, 2], [0, 1], [0, 1], [1, 1], [1, 0], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [2, 5], [1, 2], [1, 0], [3, 2], [0, 1], [0, 1], [-1, 1], [0, 3], [0, 1], [0, 2], [0, 1], [0, 1], [1, 2], [1, 1], [0, 1], [1, 0], [0, -1], [0, -2], [0, -1], [1, -3], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [1, 0], [7, 2], [1, 2], [2, 3], [0, 1], [1, 1], [1, 2], [1, 1], [0, 1], [1, 2], [1, 1], [1, 0], [0, 2], [1, 0], [2, 2], [1, 0], [1, -1], [2, -2], [0, -2], [-1, -1], [-1, -1], [0, -1], [0, -1], [2, -2], [0, -2], [-1, -1]], [[6252, 5054], [-1, 1], [1, 0], [0, 1], [0, -1], [0, -1]], [[6247, 5057], [1, -3], [0, -1], [1, -1], [0, -2], [1, 0], [0, -1], [1, -1], [1, -1], [0, 2], [1, 0], [0, -1], [-1, -6], [1, -3], [0, -2], [1, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [1, -2], [0, -3], [2, -6], [2, -6], [2, -7], [3, -5], [3, -5], [2, -5], [2, -2], [3, -7], [1, -2], [2, -1], [1, -2], [2, 1], [2, -1], [2, -1], [1, 1], [1, 1], [1, 1], [1, 1], [1, -1], [2, 0], [2, -1], [1, 1], [1, 2], [0, 1], [1, 0], [3, 4], [0, 1], [1, 1], [3, 4], [2, 4], [0, 1], [1, 0], [0, -1], [1, 0], [1, 0], [1, 1], [1, 1], [1, 1], [0, 1], [1, 3], [1, 1], [2, 1], [0, 1], [1, 1], [0, 1], [1, 1], [1, 2], [0, 1], [1, 0], [0, -1], [1, -1], [0, -1], [0, -1], [1, 0], [0, 1], [3, -3], [1, 0], [1, -1], [1, 0], [1, -1], [1, 0], [2, 2], [1, 0], [0, -2], [2, -3], [1, -1], [1, -1], [1, -1], [1, 0], [1, 1], [0, 1], [1, 1], [1, 0], [1, 1], [1, 0], [1, 0], [0, 1], [1, 2], [3, 3], [1, 2], [1, 1], [0, 1], [0, 1], [1, 0], [0, 1], [3, 2], [2, 4], [2, 3], [1, 2], [0, 1], [1, 1], [1, 1], [1, 1], [3, 4], [1, 0], [1, 0], [1, 1], [1, 0], [5, -6], [1, 0], [1, 2], [4, 0], [2, -1], [5, 1], [1, 1], [0, 1], [1, 2], [0, 1], [1, 1], [1, 0], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [2, 1], [1, 0], [1, 2], [2, 0], [2, 1], [2, -1], [1, -1], [1, -2], [3, -2], [1, 0], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [0, -8], [-1, -7], [-2, -6], [-2, -7], [-2, -6], [-1, -6], [-2, -7], [-2, -6], [-2, -7], [-1, -6], [-2, -7], [-2, -6], [-2, -7], [-1, -6], [-2, -7], [-2, -6], [-2, -7], [-4, 0], [-5, 0], [-4, 0], [-4, 0], [-5, 0], [-4, 0], [-3, 0], [-1, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-2, 2], [-3, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-3, 2], [-2, 3], [-3, 2], [-2, 2], [-3, 2], [-2, 2], [-3, 2], [-3, 2], [-2, 2], [-1, 1], [-2, 5], [-4, 8], [-2, 6], [-3, 5], [-1, 0], [-1, 0], [-2, 3], [-1, 2], [-1, 1], [0, 2], [0, 2], [0, 1], [-1, 4], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [-1, 1], [0, 1], [-1, 3], [-1, 11], [0, 3], [-1, 1], [-2, 0], [-1, 2], [-1, 1], [0, 4], [0, 2], [-1, 2], [0, 3], [-1, 1], [-3, 5], [0, 2], [-1, 4], [-1, 5], [0, 6], [-1, 2], [0, 2], [-2, 3], [0, 3], [-1, 4], [0, 1], [0, 1], [1, 0], [1, 1], [0, 1], [0, 2], [0, 2], [1, 2], [0, 1], [1, 2], [1, 2], [0, 1], [0, 1], [0, 1], [1, 1], [1, 2], [0, 1], [0, 1], [1, 3], [0, 1], [8, 29], [1, 6], [1, -1], [0, -1], [1, 0], [0, 3], [0, -1]], [[6248, 5055], [0, 1], [1, 0], [0, 1], [0, 1], [0, 2], [0, -1], [0, -2], [0, -1], [-1, -1]], [[3978, 313], [-1, 1], [1, 1], [0, -1], [0, -1]], [[3976, 315], [-1, 0], [0, 1], [0, 1], [1, 1], [0, -1], [0, -2]], [[3974, 319], [-1, -1], [0, 1], [0, 1], [1, 0], [0, -1]], [[3907, 355], [0, -1], [-1, 0], [-1, -1], [0, 1], [-1, 1], [0, 1], [0, 1], [1, 0], [1, -1], [1, -1]], [[3876, 390], [0, 1], [1, 0], [-1, -1]], [[3887, 390], [6, 0], [2, 1], [1, 0], [-2, -2], [0, -1], [0, -1], [1, 0], [0, -1], [1, 0], [1, 1], [2, 0], [1, -2], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [-1, -1], [0, -1], [1, 0], [0, -1], [-1, -1], [0, -1], [0, -1], [1, 0], [0, 1], [1, 1], [0, 1], [1, 1], [1, 0], [1, 0], [0, -1], [-1, -2], [-1, -1], [1, -1], [0, 1], [3, 2], [-1, 0], [0, 1], [1, 0], [2, -1], [1, 0], [0, -1], [0, -1], [0, -1], [-1, -1], [1, 0], [0, 1], [0, 1], [1, 1], [3, -1], [1, 0], [0, -1], [0, -1], [0, -1], [-1, 1], [-1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [-1, 0], [1, -1], [1, 0], [2, 1], [2, 1], [0, -1], [0, -1], [1, 1], [0, -1], [0, -1], [-1, 1], [-1, -1], [-3, -3], [0, -1], [0, -1], [0, -1], [1, 0], [0, 1], [2, 2], [1, 1], [1, -1], [1, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, 2], [1, 1], [1, -2], [0, -1], [1, -1], [1, 1], [-1, 1], [0, 1], [0, 2], [-1, 1], [0, 1], [0, 1], [0, 1], [2, -1], [1, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [3, 0], [0, -1], [-1, -1], [0, -1], [0, -1], [1, 0], [0, -1], [1, 0], [1, 0], [0, -1], [1, 0], [0, -1], [1, -1], [-1, -1], [0, -1], [-2, -2], [1, 0], [0, -1], [1, -1], [3, 0], [0, 1], [1, 1], [1, 0], [-1, -1], [0, -2], [-1, -2], [1, -3], [0, -2], [-1, 0], [1, -2], [1, -1], [1, -2], [2, 0], [-1, -1], [0, -1], [-1, 0], [-1, 0], [-1, -1], [-1, -1], [-1, 1], [-1, 0], [-1, 2], [-1, 0], [-1, 1], [1, -1], [0, -1], [1, 0], [0, -1], [1, -1], [0, -1], [1, 0], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [-1, 1], [0, -1], [1, 0], [0, -1], [-1, 0], [-1, 1], [0, -1], [0, -1], [-1, 1], [-1, -1], [-1, 0], [-1, 1], [1, 0], [0, 1], [-1, 1], [-1, 2], [-1, 1], [-1, 0], [-1, 2], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 2], [-1, 2], [-2, 5], [-1, 0], [0, 1], [-1, 0], [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [0, 1], [-1, 0], [-1, -1], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 1], [-3, 2], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 0], [0, 1], [-2, 0], [-2, -1], [0, 1], [-1, 0], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 0], [-1, 1], [0, 1], [-1, -1], [-1, 1], [-1, 0], [-1, -1], [-1, 0], [-1, 0], [-1, -1], [0, 1], [-1, 0], [0, 1], [2, 2], [1, 0], [-1, 1], [-1, 1], [-1, 1], [1, 0], [2, 1], [2, 1], [0, 1], [-3, 0], [-1, -1], [0, 1], [-1, 0], [-1, 1], [-2, 0], [-1, -1], [0, -1], [1, 0], [-1, -1], [-2, 0], [-1, 0], [-1, 0], [0, 1], [-1, 2], [1, 0], [1, 1], [0, 1], [-1, 0], [-1, 0], [2, 2], [1, 1], [0, 1], [-3, 0], [-2, 0], [-1, 1], [-2, -1], [-1, 0], [-1, 1], [-1, -2], [-1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [-1, 0], [1, 1], [1, 0], [2, 1], [1, 0], [1, -1], [0, -1], [1, 0], [1, 1], [1, 1], [0, 1], [1, 0], [1, -1], [-1, 0], [0, -1]], [[3770, 420], [-1, -1], [-1, 1], [1, 1], [1, -1]], [[3759, 426], [-1, 1], [0, 1], [0, 1], [1, 0], [0, -2], [0, -1]], [[4194, 0], [-2, 0], [-1, 1], [0, 1], [1, 0], [3, 1], [0, -1], [-1, -1], [0, -1]], [[4190, 0], [-1, 0], [0, 1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, -1], [0, -1], [0, -1], [0, -1], [1, 0]], [[4211, 29], [-1, 0], [-1, 0], [0, 1], [0, 2], [0, 1], [1, 1], [1, -1], [2, -2], [-1, -1], [-1, -1]], [[4221, 70], [0, -1], [-1, 1], [-1, 1], [-4, 2], [-1, 2], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [3, 0], [1, -1], [1, -1], [-1, -2], [0, -1], [1, -1], [0, -2]], [[4216, 120], [1, 0], [0, -1], [-1, 0], [-1, -1], [-1, 1], [-1, 1], [0, 1], [1, 2], [0, 1], [1, -1], [0, -2], [1, 0], [0, -1]], [[4209, 171], [0, -1], [-1, 0], [0, 1], [0, -1], [-1, 1], [-1, 1], [1, 1], [1, 0], [0, -1], [1, -1]], [[4165, 196], [-1, 0], [-1, 0], [0, 1], [1, 0], [1, -1]], [[4195, 197], [-1, -1], [-1, 0], [0, 1], [-1, 1], [1, 0], [0, 1], [1, 0], [1, 0], [1, -1], [0, -1], [-1, 0]], [[4182, 225], [-1, 1], [0, 1], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, -1]], [[2799, 5551], [1, 0], [0, -1], [0, -1], [-1, 0], [0, 1], [0, 1]], [[6166, 7339], [1, 0], [2, 2], [1, 0], [1, -1], [1, -2], [3, -2], [1, -1], [4, -5], [1, -1], [3, 1], [1, 0], [1, -1], [1, -2], [1, 0], [2, 0], [1, 0], [0, -1], [1, -2], [0, -1], [2, -1], [1, -1], [1, -2], [1, -1], [1, 0], [2, 1], [1, -1], [2, -1], [1, 0], [2, 1], [1, -1], [1, 0], [1, -1], [1, 0], [1, 0], [3, 2], [-1, -1], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [-1, -2], [-1, -1], [0, -2], [-2, -1], [-1, -1], [-2, 0], [0, -1], [0, -1], [0, -1], [1, -1], [0, -2], [0, -2], [0, -1], [0, -1], [-1, -1], [0, -1], [0, -1], [1, -3], [0, -2], [0, -2], [0, -2], [1, -2], [0, -1], [-1, -1], [0, -1], [-1, -1], [0, -1], [-3, -4], [-2, -3], [-2, -1], [0, -1], [-1, -1], [-1, -1], [0, -1], [-1, 0], [-1, 16], [-1, 3], [-1, 2], [-1, 2], [-1, 2], [-2, 0], [0, 1], [-1, 1], [-1, 0], [0, 1], [-1, 0], [-1, -1], [-1, 0], [-1, 4], [-1, 4], [-1, 4], [0, 2], [-1, 0], [-1, -1], [-1, 1], [-1, 2], [0, 1], [-1, 2], [-2, 2], [-3, 1], [-2, -1], [-1, 0], [-1, 1], [0, 1], [-1, 1], [-1, 0], [-2, 2], [-2, 1], [0, -2], [-1, 0], [0, 2], [0, 1], [-1, 1], [0, 1], [0, 2], [-1, 3], [0, 2], [-1, 1], [-1, 0], [-1, 1], [-1, 2], [-1, 0], [-1, 1], [-1, 0], [-1, 1], [1, 1], [2, 9], [0, 1], [1, 1], [2, 1], [2, 0], [7, -5], [1, 0]], [[5830, 7654], [1, 0], [1, 3], [1, 1], [1, 0], [0, -1], [1, -1], [0, -1], [0, -3], [0, -1], [1, 0], [1, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [0, -1], [0, -1], [1, -1], [0, -1], [0, -1], [-1, -2], [0, -2], [0, -3], [0, -2], [-1, -3], [-1, -1], [0, -2], [0, -3], [0, -1], [1, -2], [0, -1], [1, 0], [0, 1], [1, 0], [1, -2], [1, -1], [0, -1], [0, -1], [1, -1], [1, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0], [1, -1], [0, -1], [0, -2], [0, -2], [0, -1], [-1, 0], [0, -2], [0, -4], [0, -1], [0, -1], [-1, -1], [-1, 0], [0, -1], [1, -2], [1, -1], [0, 1], [0, 1], [1, 0], [1, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -3], [0, -1], [0, -1], [0, -1], [1, 0], [1, -1], [0, -1], [1, 0], [1, 0], [0, -1], [1, -2], [1, 0], [1, 0], [1, -1], [1, -1], [0, -1], [0, -1], [1, 0], [0, 1], [0, -1], [0, -2], [1, 0], [0, -1], [0, -1], [0, -2], [0, -4], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [-1, 0], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [-1, -1], [-1, 1], [0, 1], [0, 1], [1, 0], [-1, 3], [-1, 0], [0, 1], [-1, 0], [0, 2], [1, 1], [-1, 2], [0, 1], [0, 3], [-1, 1], [-1, 0], [0, 1], [0, 1], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, 0], [0, -1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [-1, -1], [-1, -1], [-1, 1], [0, 1], [-1, 1], [0, 1], [1, 0], [1, 1], [0, 1], [0, 1], [1, 1], [-1, 2], [0, 1], [-1, 2], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [0, 1], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [-1, -1], [0, -1], [-1, 1], [0, 1], [-1, 0], [1, 1], [0, 1], [1, 2], [1, 0], [0, 3], [1, 0], [-1, 2], [-1, 3], [-1, 3], [0, 2], [0, 1], [1, -2], [1, 1], [0, 1], [-1, 2], [-1, 1], [0, 1], [0, 2], [1, 1], [0, 1], [-1, 1], [0, 1], [-1, 1], [-1, 1], [0, 1], [0, 1], [0, 2], [-1, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 4], [0, 1], [1, 5], [0, 2], [-1, 1], [-1, 1], [-3, 1], [0, 1], [-1, 0], [0, 2], [0, 2], [-1, 1], [-1, 0], [-1, 1], [0, 2], [-1, 0], [-1, 0], [0, 1], [-1, -1], [-1, -2], [-1, 0], [0, 1], [0, 1], [1, 1], [0, 2], [1, 0], [1, 0], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, 1], [0, 1], [-1, 0], [0, -1], [0, 3], [1, 0], [1, 0], [3, -2], [2, 0], [1, 0], [1, -1], [0, -1], [0, -1], [0, -2], [0, -2], [1, -1], [0, -1], [1, -2], [1, -1], [1, -1], [0, -1], [1, 0]], [[6266, 7271], [1, 1], [0, 2], [1, 0], [1, 1], [3, 1], [1, 0], [1, 1], [0, -1], [1, -1], [0, -2], [1, 0], [1, -2], [0, -1], [1, -1], [0, -2], [1, -1], [-1, -1], [0, -1], [1, -1], [0, -1], [1, 1], [1, 0], [1, -3], [0, -2], [1, 0], [1, -2], [1, 0], [1, -1], [-1, -1], [0, -1], [0, -1], [0, -2], [1, -2], [0, -2], [0, -1], [0, -1], [0, -2], [-1, -1], [0, -1], [0, -2], [-1, -2], [0, -2], [-1, -1], [-1, -1], [0, -1], [-1, 0], [-1, 1], [-1, -1], [-1, 0], [-1, 1], [-1, 0], [0, 1], [0, 2], [0, 1], [-1, 0], [0, 1], [-2, 2], [0, -1], [0, -2], [-1, -1], [0, 1], [0, 1], [-1, 2], [0, 3], [-1, 2], [-1, 1], [0, -1], [-2, -2], [-1, 0], [-1, 1], [0, -1], [0, -3], [-2, 0], [0, -2], [-1, -2], [-1, 2], [0, 2], [-2, 1], [0, -2], [0, -1], [-1, 2], [-2, 1], [0, 2], [0, 1], [0, 1], [0, 1], [-1, 2], [1, 1], [0, 1], [1, 1], [0, 1], [0, 1], [-2, 2], [0, 1], [1, 2], [-1, 2], [0, 1], [0, 1], [0, 3], [0, 3], [0, 2], [0, 2], [0, 2], [1, 2], [1, 2], [1, 1], [1, 3], [1, 0], [1, 1], [0, 3], [1, 0], [0, -2], [-1, -2], [-1, -1], [-1, -2], [0, -2], [1, -2], [2, 0], [1, -1], [1, 0], [1, -1], [0, -1], [1, 0]], [[6352, 7111], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, -2], [1, -1], [0, -2], [0, -1], [0, -1], [0, -2], [1, -2], [0, -2], [1, -1], [0, -2], [1, -3], [0, -3], [0, -2], [0, -1], [0, -3], [1, -4], [1, -3], [0, -5], [1, -1], [0, -5], [1, -6], [0, -7], [0, -1], [-1, -2], [-1, -1], [0, -1], [-3, -2], [-1, -1], [0, -1], [-1, -1], [-1, -3], [0, -2], [0, -1], [-1, -1], [-1, -2], [-1, 0], [-1, 1], [-1, 0], [0, -1], [-1, -1], [-1, -3], [0, -1], [-1, 0], [0, -1], [-1, -2], [0, -1], [-2, -2], [0, -1], [-1, -1], [0, -3], [-1, -1], [0, -1], [-1, -1], [-1, -1], [-1, 4], [0, 1], [0, 1], [0, 1], [0, 1], [0, 3], [0, 2], [0, 2], [0, 2], [-1, 1], [-1, 1], [-1, 1], [0, 3], [1, 1], [1, 0], [2, -2], [1, 2], [1, 0], [0, 1], [0, 1], [-1, 1], [-1, 2], [0, 1], [-1, 1], [0, 1], [0, 1], [-2, 1], [-1, 2], [-1, 2], [1, 2], [1, 1], [2, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [0, 1], [-1, 1], [-2, 0], [-1, 0], [-1, 2], [0, 1], [-1, 0], [-2, -2], [-1, 0], [-1, 0], [0, 1], [-1, 2], [0, 1], [-1, 1], [-1, 0], [-1, 2], [-1, 4], [-1, 2], [-2, 1], [-1, 0], [0, 1], [-2, 3], [-1, 5], [-1, 2], [-1, 1], [-3, 0], [-1, 1], [0, 1], [0, 1], [2, 2], [5, -2], [2, 1], [1, 1], [0, 3], [0, 1], [1, 1], [0, 1], [1, 2], [0, 5], [0, 1], [1, 1], [2, 1], [1, 1], [1, 0], [2, -1], [1, 0], [1, 0], [1, -1], [0, 1], [1, 1], [0, 1], [1, 0], [1, 0], [1, 0], [2, 2], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 0], [0, -1], [1, -2], [1, -2], [1, -2], [1, 0]], [[6832, 7486], [-1, 0], [-2, 0], [-2, 1], [-1, 1], [-2, 1], [-1, 2], [-2, 1], [-1, 2], [-1, 2], [-1, 3], [-1, 2], [0, 3], [-1, 2], [0, 3], [-1, 3], [0, 3], [0, 3], [1, 3], [0, 3], [1, 3], [0, 2], [1, 3], [1, 2], [1, 2], [1, 2], [2, 1], [1, 2], [2, 1], [1, 1], [2, 1], [2, 0], [1, 0], [2, 0], [2, 0], [1, -1], [2, -1], [1, -1], [2, -2], [1, -1], [1, -2], [1, -2], [1, -2], [1, -3], [1, -2], [1, -3], [0, -3], [0, -3], [0, -3], [0, -3], [0, -3], [0, -3], [-1, -2], [-1, -3], [-1, -2], [-1, -3], [-1, -2], [-1, -2], [-1, -1], [-2, -2], [-1, -1], [-2, -1], [-1, -1], [-2, 0], [-2, 0]], [[5976, 6737], [1, 0], [0, -1], [-1, 0], [-1, 1], [-1, -1], [-1, 1], [0, 1]], [[5936, 6746], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0], [0, 1]], [[5967, 6735], [0, -1], [0, -1], [1, -1], [-1, 0], [0, 1], [-1, 0], [-1, 1], [-1, 0], [-1, -1], [0, -1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, -1], [-1, 0], [0, -3], [0, -1], [-1, 0], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, -2], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [0, 1], [-1, 0], [-1, 0], [-1, -1], [0, -1], [-1, 0], [-1, 0], [-1, 1], [0, -1], [-1, -1], [-1, -1], [0, -1], [-1, -1], [-1, 0], [0, 1], [-1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1], [0, 1], [-1, 1], [-1, 1], [-1, 1], [0, 1], [0, 2], [1, 0]], [[7096, 3715], [0, -6], [0, 1], [1, 2], [0, 1], [0, 1], [0, -1], [0, -1], [0, -1], [-1, -2], [0, 2], [0, 4], [0, 2], [-1, 1], [-1, 0], [0, 2], [2, -2], [0, -1], [0, -2]], [[7097, 3714], [0, 1], [0, 1], [1, 2], [-1, 2], [0, 1], [-1, 2], [1, -3], [1, -2], [0, -1], [-1, -1], [0, -1], [0, -1]], [[7244, 6767], [4, -2], [1, 1], [1, 1], [1, 1], [1, 0]], [[8315, 5025], [0, 1], [1, 0], [-1, -1]], [[8238, 5416], [-1, 0], [0, 1], [1, 0], [0, -1]], [[8259, 5438], [0, -1], [-1, 1], [1, 0]], [[6029, 6619], [1, 1], [1, 1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [-1, -1], [0, -1], [1, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [0, -2], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [1, 0], [-1, 0], [-1, -2], [1, -6], [0, -1], [1, -1], [0, -2], [-1, -1], [-1, -3], [0, -3], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, -1], [0, -2], [-1, 0]], [[2795, 5659], [-1, 0], [0, -1], [0, 1], [0, -1], [0, -1], [-1, 0], [0, 2], [2, 3], [0, -1], [0, -1], [0, -1]], [[2797, 5662], [0, -6], [-1, 0], [-1, 0], [0, 2], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [1, 0]], [[2419, 5442], [0, -1], [-1, 1], [0, 1], [1, 0], [0, -1]], [[2420, 5456], [0, -1], [0, 1], [0, -1], [-1, 0], [1, 1]], [[2433, 5462], [0, -1], [0, 1], [0, 2], [1, -1], [-1, -1]], [[2418, 5463], [0, 1], [1, 0], [0, -1], [-1, 0]], [[2415, 5447], [-1, 0], [0, -1], [-1, -1], [0, -2], [0, -1], [0, -1], [1, -2], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -5], [0, -1], [-1, -1], [0, -3], [0, -1], [0, -1], [0, -2], [0, -1], [-1, 1], [1, 8], [1, 1], [0, 1], [-1, -1], [-1, -5], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -3], [-1, -1], [0, -2], [-1, -1], [0, -2], [0, -1], [-1, -2], [0, -1], [0, -1], [-1, 0], [0, -1], [-1, -1], [0, -1], [0, 3], [0, -2], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, -1], [0, -3], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -2], [-1, 0], [0, -1], [-1, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [-1, -1], [0, -1], [0, -1], [1, -3], [-1, -2], [-1, -1], [-2, 2], [-1, 0], [-1, -1], [-2, 1], [-1, -1], [-1, -1], [0, 1], [0, 1], [0, 3], [1, 17], [0, 15], [1, 1], [0, 1], [0, 1], [0, 1], [1, 0], [1, 1], [1, 1], [1, 1], [0, 1], [1, -1], [1, 1], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0], [1, 2], [1, 1], [0, 1], [0, 1], [0, 2], [1, 1], [0, 1], [1, 0], [-1, 1], [0, 1], [1, 1], [0, 1], [0, 1], [1, 3], [0, 1], [1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [-1, 1], [0, 2], [0, 1], [0, 2], [0, 1], [1, 2], [0, 2], [0, 2], [0, 2], [0, 2], [1, 1], [0, 2], [1, 1], [0, 2], [0, 2], [0, 1], [0, 2], [1, 2], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [0, 2], [1, 1], [1, 1], [1, 0], [0, 1], [1, 0], [1, -1], [0, -6], [-1, -7], [0, -2], [0, -2], [1, -2], [0, -1], [0, -1], [0, -2], [0, -1], [1, 0], [0, -2], [0, -1], [1, -1], [0, -3], [0, -1], [0, -1]], [[5983, 6463], [0, 3], [0, 1], [-1, 3], [1, 1], [0, 1], [1, 2], [1, 3], [1, 2], [1, 2], [2, 5], [1, 3], [1, -1], [1, -2], [-1, -1], [0, -2], [-1, -1], [-3, -6], [-1, -3], [0, -1], [0, -3], [0, -1], [-1, -2], [-1, -2], [-1, -1]], [[6013, 6555], [2, 0], [1, 0], [1, -1], [0, -2], [0, -2], [0, -2], [1, 0], [1, 0], [3, -2], [0, -1], [0, 1], [-1, 0], [0, -1], [0, -1], [0, -2], [1, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -4], [-1, -1], [1, -1], [-1, 0], [0, -1], [0, -2], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -3], [1, -2], [0, -1], [0, -1], [0, -1], [0, -1], [-1, -1], [1, -6], [0, -1], [1, -4], [-1, -2], [-1, -4], [-1, -3], [0, -5], [0, -5], [-2, -1], [-2, -2], [-3, -5], [-2, -2], [-4, 1], [-1, -1], [-1, -1], [-1, 0], [-1, 0], [0, 1], [-1, 3], [1, 2], [1, 5], [0, 2], [0, 2], [0, 2], [1, 2], [0, 2], [3, 3], [1, 2], [0, 1], [1, 1], [2, 1], [0, -1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [-2, 1], [-1, 1], [0, 1], [-1, -1], [0, -1], [-1, 0], [-1, 0], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 2], [0, 3], [0, 2], [0, 1], [0, 2], [0, 1], [-1, 7], [0, 1], [0, 3], [0, 1], [1, 2], [0, 1], [1, 1], [-1, 1], [0, 1], [0, 1], [0, 2], [0, 1], [1, 0], [0, 2], [0, 1], [1, 4], [0, 2], [1, 1], [1, 1], [1, 1], [0, 2], [1, 0], [0, 1], [1, -1], [1, -1], [0, -1]], [[4829, 6814], [1, 0], [0, -1], [0, -1], [-1, 0], [0, 2]], [[3278, 4696], [0, -1], [0, -3], [0, -2], [1, -3], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [1, 0], [0, -1], [-1, -10], [0, -1], [1, -2], [0, -1], [0, -5], [0, -2], [-1, -2], [-1, -3], [0, -2], [0, -4], [0, -5], [0, -5], [0, -3], [0, -3], [-1, -3], [0, -3], [-1, -1], [-1, -1], [-2, -1], [-1, 0], [-1, 0], [0, -2], [0, -1], [0, -1], [0, -1], [-1, -1], [2, -5], [0, -1], [0, -1], [0, -5], [0, -10], [0, -3], [0, -5], [1, -10], [1, -1], [1, 1], [0, -1], [1, -3], [1, -4], [0, -1], [1, -1], [0, -1], [1, -3], [1, -2], [1, 0], [0, -1], [1, -1], [0, -1], [0, -2], [1, -3], [0, -6], [0, -1], [-1, -2], [0, -1], [0, -1], [1, -3], [0, -2], [0, -1], [0, -2], [-1, -1], [0, -1], [-2, -5], [-1, 0], [0, -1], [0, -1], [1, 0], [1, 0], [1, -1], [1, 1], [0, -1], [0, -1], [1, -3], [0, -2], [0, -1], [1, -2], [0, -2], [1, -2], [0, -1], [0, -1], [-1, -3], [0, -1], [-1, -1], [1, -2], [2, -3], [0, -1], [0, -3], [0, -1], [0, -1], [1, 0], [0, -1], [0, -11], [1, -2], [0, -1], [0, -1], [0, -3], [0, -1], [0, -2], [0, -1], [-1, -3], [0, -1], [0, -2], [0, -1], [-1, -1], [0, -1], [1, -2], [2, -3], [1, 0], [0, -1], [0, -1], [1, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -1], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, -2], [0, -1], [-1, 0], [0, -1], [0, -1], [-1, -5], [0, -4], [0, -3], [0, -1], [0, -1], [-1, -1], [-1, 0], [0, -2], [0, -1], [0, -1], [0, -1], [0, -2], [0, -1], [0, -1], [1, -1], [0, 1], [0, 2], [1, -1], [0, -1], [0, -1], [0, -1], [-1, -1], [0, -1], [0, -2], [-1, -1], [0, 1], [0, -3], [0, -1], [-1, 0], [0, 1], [0, -2], [0, -1], [-1, -1], [1, -2], [0, -2], [-1, -1], [0, 1], [-2, -8], [-1, -2], [0, -1], [0, -6], [-1, -6], [1, -1], [-1, -1], [0, -1], [-1, 0], [0, -2], [-1, -2], [0, -1], [0, -1], [0, -2], [0, -3], [0, -1], [-1, -1], [-1, 0], [0, -1], [0, -1], [-1, 1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [-1, -1], [0, -1], [0, -1], [0, -4], [1, -1], [0, -2], [-1, -2], [0, -3], [0, -3], [-1, -3], [-1, 0], [0, 1], [-1, 1], [0, 2], [0, 1], [-1, 2], [0, 1], [-1, 1], [-1, 1], [-5, 2], [-2, 2], [-1, 1], [0, 4], [-1, 1], [0, 2], [0, 1], [-1, 1], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, 1], [-1, 2], [0, 1], [-1, 2], [-1, 2], [0, 3], [-1, 1], [-1, 0], [-1, 0], [-1, 0], [0, 1], [-1, 2], [1, 2], [0, 3], [0, 1], [0, -1], [0, 1], [-1, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [1, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [-1, 2], [0, 3], [1, 2], [0, 3], [-1, 1], [0, 1], [-1, 0], [-1, 0], [0, 2], [-2, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 4], [0, 2], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 4], [0, 1], [0, 12], [1, 6], [0, 1], [0, 4], [0, 2], [0, 2], [1, 3], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 1], [0, 1], [1, 1], [0, 1], [0, 3], [0, 1], [1, 3], [1, 2], [0, 1], [0, 1], [0, 1], [0, 3], [0, -1], [0, 2], [0, 3], [0, 2], [-1, 1], [0, 2], [0, 2], [1, 2], [2, 2], [1, 2], [1, 1], [0, 1], [0, 1], [0, 1], [1, 2], [0, 1], [1, 1], [1, 1], [0, 1], [0, 2], [0, 1], [0, 2], [0, 1], [1, 2], [1, 0], [0, 1], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [0, 1], [-1, 0], [0, 2], [-1, 2], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [-2, 1], [0, 1], [0, 2], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [1, 3], [0, 1], [0, 1], [0, 1], [-1, 0], [0, 1], [0, 1], [-2, 2], [0, 2], [-1, -1], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [0, 1], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [-1, -1], [0, 1], [0, 1], [0, 1], [-1, 0], [0, -1], [0, -1], [-1, 0], [0, 1], [-1, 1], [0, 1], [0, 2], [1, 2], [1, 0], [0, 1], [1, 0], [0, 1], [0, 1], [0, 1], [1, 3], [0, 1], [0, 1], [0, 1], [0, 4], [0, 3], [0, 4], [1, 2], [0, 1], [0, 2], [0, 2], [1, 5], [-1, 2], [0, 1], [-2, 2], [0, 1], [-1, 1], [-1, 5], [0, 1], [-1, -1], [-1, 1], [0, 1], [0, 1], [-1, -1], [-1, -1], [-1, -3], [-1, 0], [0, -1], [-2, 2], [0, -1], [-1, -1], [0, -1], [-1, 1], [-1, 1], [-1, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [-2, -1], [-2, 6], [-2, 6], [-2, 6], [-2, 6], [-3, 6], [-2, 6], [-2, 6], [-2, 6], [-1, 2], [-1, 3], [1, 1], [1, 1], [0, 1], [1, 5], [1, 3], [0, 1], [1, 1], [1, 0], [0, 1], [1, 2], [0, 1], [1, 0], [0, 1], [0, 1], [1, 3], [-1, 1], [0, 1], [0, 1], [-1, 1], [0, 2], [0, 4], [0, 1], [1, 1], [0, 1], [0, 1], [-1, 1], [0, 2], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 3], [1, 3], [1, 2], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [0, -1], [1, 1], [1, 0], [1, 0], [1, 2], [0, 1], [0, 1], [-1, 1], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [1, 0], [1, 0], [0, 1], [0, -1], [2, -2], [1, 1], [0, 1], [1, 3], [0, 1], [1, 0], [2, 1], [4, 6], [0, 1], [1, -1], [0, 3], [0, 2], [1, 0], [0, 1], [1, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [-1, 1], [-1, 1], [0, 1], [-1, -1], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, -1], [-1, -3], [-2, 4], [0, 1], [-1, 2], [0, 2], [1, 2], [0, 2], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [-1, 0], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 3], [0, 1], [0, 1], [0, 2], [1, 1], [1, 1], [0, 2], [1, 1], [1, 1], [-1, 1], [1, 2], [0, 1], [0, 1], [0, 1], [0, 1], [1, 2], [0, 2], [1, 1], [0, 1], [3, 0], [1, 0], [1, 1], [0, 2], [1, 1], [1, 3], [1, 1], [0, 1], [0, 1], [2, 1], [0, 1], [1, 1], [0, 2], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [1, 3], [0, 1], [0, 1], [0, 1], [0, 2], [1, 1], [0, 1], [1, 0], [1, 1], [1, 0], [0, 1], [1, 1], [0, 2], [0, 1], [-1, 5], [-3, 8], [-2, 6], [1, 0], [1, -2], [1, -2], [2, -7], [1, -2], [1, -1], [1, -1], [1, -1], [1, -3], [1, -1], [1, 0], [0, -2], [1, 0], [1, -1], [0, -1], [1, -1], [2, -5], [0, 2], [-1, 3], [-1, 2], [-3, 2], [-2, 5], [-2, 2], [0, 1], [-1, 2], [0, 1], [1, 0], [1, -1], [1, -2], [1, -1], [0, -1], [1, -1], [2, -3], [3, -3], [3, -6], [5, -7], [2, -4], [1, -2], [1, -3], [4, -11], [2, -3], [1, -3], [1, -3], [0, -3], [1, -2], [0, 1], [0, 1], [0, 1], [1, -1], [0, -1], [1, -1], [0, -1], [1, -2], [1, -3], [0, -2], [1, -1], [2, -6], [1, -2], [0, -3], [-1, -2], [1, 1], [-1, -3], [1, -9], [-1, -8], [0, -1], [-1, -1], [0, -1], [-1, -2], [0, -1], [0, -1], [0, -3], [-1, -4], [0, -2], [0, -5], [0, -1], [-1, -1], [0, -13], [0, -1], [0, -1], [-2, -7], [1, 2], [1, 0], [0, 1], [1, 0]], [[5593, 7318], [0, -1], [-1, -1], [1, -1], [2, -2], [2, -3], [1, -1], [2, 0], [1, -2], [0, -4], [1, -1], [1, 1], [1, -2], [0, -2], [0, -3], [1, -1], [1, 0], [0, -1], [1, -1], [1, 0], [1, -1], [0, -2], [0, -1], [0, -3], [0, -1], [-1, 0], [1, -1], [1, 0], [3, -1], [1, 0], [0, -1], [1, -2], [1, -1], [1, 1], [1, 1], [1, -1], [1, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [0, -2], [-1, 0], [0, -1], [0, -1], [0, -1], [-1, -5], [-1, -2], [-1, 0], [0, -2], [0, -2], [0, -1], [0, -1], [-2, -1], [-1, -1], [0, -2], [1, -3], [1, -2], [-2, 0], [-1, 0], [0, -1], [-1, 1], [-1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, -1], [-2, -5], [0, -1], [0, -1], [0, -1], [0, -1], [-2, 0], [0, 1], [0, 1], [-1, 2], [-1, 1], [-1, 2], [-1, 1], [-1, -1], [-1, -2], [0, -1], [-1, 0], [0, -1], [-3, -1], [-2, -2], [-1, -1], [-1, -1], [0, -1], [0, -4], [0, -2], [0, -2], [0, -2], [0, -1], [-1, -2], [0, -1], [-1, -1], [0, 1], [-1, 1], [0, 1], [0, -1], [-1, -1], [-1, 0], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [-1, 4], [0, 2], [0, 2], [0, 1], [0, 2], [-1, 5], [-1, 1], [-1, 1], [-3, 5], [-1, 0], [-2, 0], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 0], [0, 4], [-1, 1], [-1, 1], [-1, 2], [0, 1], [0, 1], [0, 2], [1, 1], [0, 2], [0, 1], [-2, 3], [0, 1], [0, 2], [1, 1], [0, 1], [1, -1], [1, -1], [1, -1], [1, 2], [0, 1], [0, 1], [0, 1], [1, 0], [1, 1], [2, 1], [3, 0], [1, 2], [1, 1], [0, 1], [-1, 1], [-1, 1], [1, 2], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 1], [1, 3], [0, 2], [1, 2], [-1, 0], [-1, 1], [0, 2], [0, 1], [0, 1], [0, 1], [1, 0], [1, 1], [2, 3], [1, 0], [0, 1], [1, -1], [1, -1], [0, -1], [0, -1]], [[6023, 6610], [1, 0], [0, 1], [2, 2]], [[9840, 5613], [1, 0], [0, 1], [0, -1], [0, -1], [-1, 1]], [[4830, 6793], [-1, 1], [0, 2], [-1, 1], [0, 2], [1, 0], [1, -1], [0, -1], [1, 0], [0, 1], [0, -2], [-1, -2], [0, -1]], [[4900, 6752], [-1, 1], [0, 2], [0, 1], [1, -3], [0, -1]], [[4915, 6746], [-1, -1], [0, 1], [1, 0]], [[4775, 6982], [-1, 1], [-1, 2], [-1, 1], [1, 4], [0, 1], [1, -1], [1, -1], [1, -2], [0, -4], [-1, -1]], [[5997, 6228], [0, -1], [-1, 1], [-1, 1], [1, 2], [1, 0], [0, -3]], [[5992, 6234], [-1, -1], [0, -1], [0, -1], [1, 1], [1, 0], [0, -1], [1, -1], [0, -1], [0, -1], [-1, 0], [-1, 0], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [1, 0], [0, 1], [1, -1]], [[7064, 3797], [0, -1], [0, 1], [0, 1], [1, 0], [0, -1], [-1, 0]], [[2966, 2957], [1, 1], [1, -1], [0, -1], [1, 0], [1, -2], [1, -1], [1, 1], [0, -1], [0, -3], [-1, -2], [-1, -2], [1, -4], [1, -2], [0, -1], [0, -2], [0, -1], [0, -3], [0, -1], [0, -4], [0, -1], [2, -4], [0, -1], [0, -2], [0, -4], [-1, -3], [1, -4], [0, -3], [1, 0], [0, -1], [0, -1], [-1, -1], [0, -1], [2, -7], [0, -1], [0, -2], [0, -1], [-1, -3], [0, -1], [1, 0], [0, -3], [1, -4], [0, -1], [1, 0], [1, -1], [1, -2], [3, -5], [1, -2], [1, -4], [0, -1], [1, -1], [3, -6], [1, -1], [1, -1], [0, -2], [-2, -1], [0, -1], [-1, -2], [-1, -5], [-2, -5], [0, -2], [-1, -2], [-1, -2], [0, -1], [1, -1], [1, -2], [1, -3], [1, -1], [1, -1], [0, -1], [0, -2], [0, -1], [0, -1], [0, -1], [-1, -4], [0, -1], [0, -2], [0, -1], [0, -1], [-1, 0], [-1, 0], [-4, -2], [0, -2], [0, -1], [1, -1], [1, -1], [0, -2], [0, -3], [0, -3], [1, -4], [-2, -2], [0, -1], [-1, -2], [1, -2], [0, -2], [1, -2], [0, -2], [1, -1], [3, -3], [1, -2], [1, -1], [1, -1], [0, -2], [-2, -4], [-1, -1], [0, -2], [0, -9], [1, -3], [0, -1], [1, -1], [2, 0], [1, -1], [6, -23], [0, -4], [0, -17], [0, -2], [2, -8], [1, -5], [0, -12], [0, -1], [0, -1], [1, -2], [2, -3], [0, -1], [1, -1], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [1, -2], [0, -1], [-1, -5], [0, -1], [0, -2], [2, -4], [0, -2], [0, -3], [1, -4], [0, -2], [-1, -10], [0, -6], [0, -2], [0, -1], [2, 0], [0, -3], [1, 0], [1, -1], [4, 0], [2, 0], [1, 0], [9, 5], [6, -13], [-1, -2], [0, -4], [-2, -15], [-2, -15], [-2, -15], [0, -1], [-1, -7], [-94, 0], [0, 3], [0, 1], [0, 1], [1, 2], [1, 1], [0, 2], [1, 3], [0, 2], [0, 3], [0, 2], [0, 3], [-1, 1], [-1, 1], [-1, 1], [0, -1], [-1, -2], [0, -1], [0, -1], [-1, 1], [-1, 1], [-1, -2], [0, 1], [0, 3], [1, 2], [0, 1], [1, 1], [-1, 1], [0, 2], [0, 2], [0, 2], [0, 2], [0, 1], [0, 2], [0, 1], [1, 2], [0, 1], [0, 2], [0, 1], [0, 2], [0, 2], [0, 2], [0, 1], [1, 2], [1, 1], [0, 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -1], [1, 1], [1, 1], [1, 2], [0, 1], [1, 2], [0, 2], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 1], [0, 2], [-1, 2], [1, 2], [0, 1], [0, 2], [0, 2], [0, 2], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [2, 4], [0, 1], [-1, 2], [0, 5], [0, 4], [0, 1], [1, 1], [0, 10], [0, 1], [0, 3], [0, 2], [1, 0], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [-1, 1], [0, 2], [1, 1], [0, 4], [0, 4], [0, 2], [0, 4], [0, 1], [1, 2], [0, 1], [1, 0], [0, 2], [0, 1], [0, 1], [0, 1], [1, 2], [-1, 0], [0, 1], [0, 1], [1, 2], [0, 1], [0, 1], [0, 1], [-1, 2], [0, 2], [0, 1], [0, 1], [0, 1], [1, 1], [-1, 2], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 3], [0, 2], [0, 1], [0, 1], [0, 1], [1, 2], [-1, 2], [1, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [0, 1], [-1, 0], [1, 1], [0, 1], [0, 2], [0, 1], [0, 2], [0, 1], [0, 2], [0, 2], [0, 7], [0, 1], [0, 1], [0, 2], [1, 1], [0, 2], [0, 2], [-1, 1], [0, 2], [0, 1], [0, 1], [1, 1], [0, 1], [0, 2], [1, 0], [0, 2], [-1, 3], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 3], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 2], [0, 2], [-1, 2], [0, 1], [1, 1], [0, 1], [-1, 2], [0, 2], [0, 4], [0, 1], [-1, 4], [0, 2], [-1, 1], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [0, 3], [-1, 2], [0, 2], [0, 2], [0, 3], [-1, 2], [0, 1], [0, 1], [-1, 1], [0, 1], [0, 1], [0, 1], [0, 2], [0, 2], [1, 2], [-1, 1], [1, 2], [0, 1], [0, 1], [-2, 6], [0, 1], [1, 2], [-1, 2], [0, 5], [0, 3], [-1, 3], [0, 1], [0, 1], [1, 2], [0, 2], [0, 1], [0, 1], [0, 1], [0, 1], [-1, 1], [1, 2], [0, 2], [0, 3], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [1, 1], [0, 1], [-1, 1], [0, 1], [-1, 2], [0, 2], [-1, 1], [0, 1], [1, 0], [1, 1], [3, -1], [2, 0], [1, 1], [2, 3], [1, 0], [1, 1], [0, 1], [2, 4], [1, 2], [1, 1], [0, 3], [2, 9], [0, 1], [0, 2], [0, 1], [-1, 3], [0, 1], [0, 2], [0, 3], [-1, 2], [0, 3], [0, 3], [1, 2], [1, 0], [1, 0], [2, 0], [1, 2], [4, 9], [0, -6], [0, -2], [1, -3], [2, -5], [1, -2], [1, -4], [0, -2], [0, -5], [0, -3], [1, -2]], [[6589, 6083], [0, -1], [1, 0], [-1, -1], [0, 1], [0, -1], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [0, -1]], [[6026, 4568], [0, -3], [-3, 3]], [[6023, 4568], [1, 0], [2, 0]], [[7617, 6252], [1, 3], [1, 0], [1, -1], [1, 0], [2, -2], [1, -1], [1, -1], [0, -2], [-1, -1], [0, -2], [-1, 0], [-1, -2], [0, -4], [-2, -1], [0, 1], [-1, -1], [0, 1], [-1, 1], [0, 2], [-1, 3], [-1, 0], [-1, -1], [0, 1], [-1, -1], [-1, 1], [0, 1], [-1, 2], [-1, -1], [0, -1], [-1, -1], [-1, -2], [0, 1], [-1, 1], [0, 1], [-1, 2], [-1, -1], [-1, 0], [-1, 2], [0, 1], [-1, 0], [0, 1], [-1, 0], [1, 1], [0, 1], [1, 1], [0, 1], [1, 1], [1, 0], [1, 0], [1, 1], [2, 1], [1, 0], [1, -1], [1, 0], [1, 2], [1, -1], [0, -3], [1, -3], [1, 0]], [[7582, 6207], [0, -1], [1, 0], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [0, 1], [0, 1], [1, 1], [0, 1], [0, 1], [0, 1], [1, 0], [0, 1], [0, 1], [1, 0], [0, 1], [1, 0]], [[7345, 6390], [-2, -1], [0, 1], [-1, 1], [1, 2], [1, 1], [1, 1], [0, -2], [1, -1], [-1, -2]]],
        "transform": {
            "scale": [0.03431801938233824, 0.014031961464346428],
            "translate": [-171.08653723899988, -59.47275155999992]
        }
    });
