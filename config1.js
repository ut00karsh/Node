var temp = {
    "data": [
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": null, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 }, 
        { "para": null, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 1 },
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2}, 
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": null, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": null, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": null, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
        { "para": null, "timestamp": 2, "id": 2},
        { "para": 1, "timestamp": 2, "id": 2},
    ]
}
var heroes = temp["data"]
output = {}
output["array"] = []

var marvelHeroes = heroes.filter(function (hero) {
    return hero.para != null;
});

for (var j = 1; j <= 2; j++) {
    output1={}
    output1["id"]=j
    var marvelHeroes = marvelHeroes.filter(function (hero) {
        return hero.id == j;
    });
  output1["graphdata"]=marvelHeroes;
  output["array"].push(output1);
}
console.log(output["array"][0]);