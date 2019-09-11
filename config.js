var temp = {
    "data": [
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 1 },
        { "para": 1, "par2": 2, "para3": 5, "id": 1 },
        { "para": 1, "par2": 2, "para3": 4, "id": 1 },
        { "para": 1, "par2": 2, "para3": 2, "id": 1 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": null, "id": 2 },
        { "para": 1, "par2": 2, "para3": 2, "id": 2 },
        { "para": 1, "par2": 2, "para3": 2, "id": 2 },
        { "para": 1, "par2": 2, "para3": 2, "id": 2 },
        { "para": 1, "par2": 2, "para3": 1, "id": 2 }
    ]
}
var heroes = temp["data"]
output = {}
output["array"] = []
for (var j = 1; j <= 2; j++) {
    var output1 = {}
    var marvelHeroes = heroes.filter(function (hero) {
        return hero.id == j;
    });
    output1["id"] = j;
    output1["tag"] = []
    key = Object.keys(marvelHeroes[0]);
    for (var i = 0; i < key.length - 1; i++) {
        temp = {}
        temp["parameter"] = key[i];
        list = []
        marvelHeroes.map(marvelHeroes1 => {
            if (marvelHeroes1[key[i]] != null) {
                list.push(marvelHeroes1[key[i]])
            }
        });
        temp["value"] = list;
        output1["tag"].push(temp)
    }
    output["array"].push(output1);
}
console.log(output["array"][0]["tag"]);

