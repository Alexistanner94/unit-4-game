//variables//

let ranNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);

$('.NumbertoMatch').text(ranNum);

let crysNum = Math.floor(Math.random() * (12) + 1);
console.log(crysNum);
console.log(ranNum)


const jewel = {
    blue: Math.floor(Math.random() * (12) + 1),
    ruby: Math.floor(Math.random() * (12) + 1),
    pink: Math.floor(Math.random() * (12) + 1),
    green: Math.floor(Math.random() * (12) + 1)
}

let userScore = 0;

$('.jewel').on('click', function () {
    const color = $(this).attr('data-color');
    console.log(jewel[color]);
    userScore += jewel[color]
    $(".container").text(userScore);
})

// const count = 0;
// count < crysNum; i++;

// for (let wins = 1; wins > ranNum; win++) {
//     document.getElementById("#win")++;

if (crysNum === ranNum) {
    $("#win").text(userScore)
    document.getElementById("#win")++;
    alert("You Won!");
}

// else ranNum != crysNum
// $("#loser").text(userScore)
// document.getElementById("#loser");
// // alert("You Loss!");