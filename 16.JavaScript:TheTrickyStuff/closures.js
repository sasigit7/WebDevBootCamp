function outer() {
    var outerData = "Closures are";
    return function inner() {
        var innerData = " awesome";
        return outerData + innerData;
    }
}

outer(); // f inner() { var innerData = "awesome"; return outerData + innerData; }
outer()(); // "Closures are awesome"