//variables//

let ranNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);

$('.NumbertoMatch').text(ranNum);

let crysNum = Math.floor(Math.random() * (12) + 1);
console.log(crysNum);

// let storedNum = 

const jewels = {
    blue: Math.floor(Math.random() * (12) + 1),
    ruby: Math.floor(Math.random() * (12) + 1),
    pink: Math.floor(Math.random() * (12) + 1),
    green: Math.floor(Math.random() * (12) + 1)
}

let userScore = 0;

$('.jewel').on('click', function () {
    const color = $(this).attr('data-color');
    console.log(jewels[color]);
    userScore += jewels[color]
    $(".showntotalscore").text(userScore);
})
