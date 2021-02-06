/* ******************* Configurar os dados das tabelas aqui ************************ */

/* Formato */
// const TABLES_DATA = { 
//     "nome_do_botao": {           *nome do botao nao pode repetir*
//         "nome_da_aba(tab)": {    *nome da aba nao pode repetir dentro de mesmo botao*
//             head: [ ... ],
//             body: [
//                 [ ... ],
//                 [ ... ],
//                 [ ... ], ...
//             ]
//         },
//     }, ...
// }

const TABLES_DATA = {
    // "test": { type: "table", table: { "Ate 580mil": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ], }, } },
    "TEST3": {
        type: "bar",
        bar: {
            parcela: {
                min: 3333,
                max: 33333,
                step: 1,
                formula: "x / 1000"
            },
            credito: {
                min: 33,
                max: 333,
                step: 1,
                formula: "x * 100"
            }
        },
    },
    "TEST4": {
        type: "bar",
        bar: {
            parcela: {
                min: 4444,
                max: 44444,
                step: 1,
                formula: "x / 1000"
            },
            credito: {
                min: 44,
                max: 444,
                step: 1,
                formula: "x * 100"
            }
        },
    },
    "automovel": {
        type: "table",
        bar: {
            parcela: {
                min: 1000,
                max: 50000,
                step: 1,
                formula: "x / 1000"
            },
            credito: {
                min: 100,
                max: 4000,
                step: 1,
                formula: "x * 100"
            }
        },
        table: {
            "Ate 580mil": {
                head: ["500mil", "thead"],
                body: [
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                ],
            },
        }
    },
    "imovel": {
        type: "table",
        table: {
            "Ate 240mil": {
                head: ["thead", "thead"],
                body: [ 
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                ],
            },
            "Ate 580mil": {
                head: ["500mil", "thead"],
                body: [
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                ],
            },
        }
    },
    "APOS TEST": {
        type: "table",
        table: {
            "Ate 240mil": {
                head: ["thead", "thead"],
                body: [ 
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                ],
            },
            "Ate 580mil": {
                head: ["500mil", "thead"],
                body: [
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                    ["R$55.000,00", "R$349.00"],
                ],
            },
            "A": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], },
            "B": { head: ["501mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], },
            "2 145": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], },
            // "3 1453": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], },
        }
    },
    "TEST5": {
        type: "bar",
        bar: {
            parcela: {
                min: 5555,
                max: 55555,
                step: 1,
                formula: "x / 1000"
            },
            credito: {
                min: 55,
                max: 555,
                step: 1,
                formula: "x * 100"
            }
        },
    }
}

// const TABLES_DATA = { 
    // "automovel": {
        // type: "bar",
        // bar: {
            // parcela: {
                // min: 1000,
                // max: 50000,
                // step: 1,
                // formula: "x / 1000"
            // },
            // credito: {
                // min: 100,
                // max: 4000,
                // step: 1,
                // formula: "x * 100"
            // }
        // },
        // table: {
    //         "FLEX50MESES": {
    //             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
    //             body: [
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //             ]
    //         },
    //         "2 50MESES": {
    //             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
    //             body: [
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //             ]
    //         },
    //         "3 50MESES": {
    //             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
    //             body: [
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //             ]
    //         },
    //         "250MESES": {
    //             head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
    //             body: [
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
    //                 ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"]
    //             ]
    //         }
    //     // }
    // },
    // "imovel": {
    //     "Ate 240mil": {
    //         head: ["thead", "thead"],
    //         body: [ 
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //         ],
    //     },
    //     "Ate 580mil": {
    //         head: ["500mil", "thead"],
    //         body: [
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //         ],
    //     },
    //     "Ate 100mil": {
    //         head: ["1000mil", "thead"],
    //         body: [
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //             ["R$55.000,00", "R$349.00"],
    //         ]
    //     },
    // },
    // "test": {
    //     "tab1": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab2": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab3": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab4": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab5": { head: [1, 3, 4], body: [[11, 22, 33]] },
    // },
    // "test2": {
    //     "tab1": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab2": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab3": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab4": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab6": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     "tab7": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     // "tab8": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     // "tab9": { head: [1, 3, 4], body: [[11, 22, 33]] },
    //     // "tab10": { head: [1, 3, 4], body: [[11, 22, 33]] },
    // },
    // "TEST2": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST3": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST4": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST5": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST6": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST7": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
// } 
