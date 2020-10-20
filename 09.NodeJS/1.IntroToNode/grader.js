function average(scores) {
    // add all scores together
    var total = 0;
    //Using forEach loop: 
    scores.forEach(function (score) {
        total += score;
    });

    // Using for loop:
    // for(var i = 0; i < scores.length; i++) {
    //     total += scores[i];
    // }

    // divide total by number of scores 
    var averageScore = total / scores.length;

    // round average
    return Math.round(averageScore);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // Should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // Should return 68