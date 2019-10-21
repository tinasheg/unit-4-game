$(document).ready(function () {
    let targetNumber;
    let score = 0;
    let wins = 0;
    let losses = 0;
    
    
    function game() {
        // Random number generator for target number between 19 - 120 and append targetNumber to the page
        targetNumber = Math.floor(Math.random() * 102 + 19);
        score = 0;
        $("#button-1").val(Math.floor(Math.random() * 12 + 1));
        $("#button-2").val(Math.floor(Math.random() * 12 + 1));
        $("#button-3").val(Math.floor(Math.random() * 12 + 1));
        $("#button-4").val(Math.floor(Math.random() * 12 + 1));
        $("#randomNumber").text(targetNumber);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#score").text(score);
    }

    let play = function () {
        score += parseInt(this.value);
        $("#score").text(score)
        if (score === targetNumber) {
            alert("You win!")
            wins++;
            $("#wins").text("Wins: " + wins);
            game();
        } else if (score > targetNumber) {
            alert("You lose!")
            losses++;
            $("#losses").text("Losses: " + losses);
            game();
        }
    }
    
    $("#button-1").on("click", play);
    $("#button-2").on("click", play);
    $("#button-3").on("click", play);
    $("#button-4").on("click", play);

    game();
})