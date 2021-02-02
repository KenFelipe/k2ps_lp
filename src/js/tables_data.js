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
    "automovel": {
        "FLEX 50MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
            ]
        },
        "2 50MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
            ]
        },
        "250MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"]
            ]
        }
    },
    "imovel": {
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
        "Ate 100mil": {
            head: ["1000mil", "thead"],
            body: [
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
            ]
        },
    },
    "test": {
        "tab1": {
            head: [1, 3, 4],
            body: [[11, 22, 33]]
        }
    },
    "TEST2": {
        "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] },
        "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ]
        }
    },
    // "TEST3": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST4": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST5": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST6": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
    // "TEST7": { "TAB1": { head: ["1000mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] }, "TAB2": { head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"], body: [ ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"], ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"] ] } },
}

/* ********************************************************************************* */
