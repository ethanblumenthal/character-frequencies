function getFrequencies(str) {
    var sorted = str.split('').sort();
    var data = [];
    for (var i = 0; i < sorted.length; i++) {
        var last = data[data.length - 1];
        if (last && last.character === sorted[i]) last.count++;
        else data.push({ character: sorted[i], count: 1 });
    }
    return data;
}