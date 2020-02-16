for (var i = 1; i <= 9; i++) {
    console.log("таблица умножения на число :" + i)
    for (var j = 9; j >= 1; j--) {
        var figures = i * j;
        console.log(i + "*" + j + "=" + figures)
    }
}