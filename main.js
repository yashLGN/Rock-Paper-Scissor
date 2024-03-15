let score = JSON.parse(localStorage.getItem
    ('score')) || {
            Wins: 0,
            Losses: 0,
            Ties: 0
        };

    updateScoreElement();

    function playGame (playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissor') {
            if (computerMove === 'Rock') {result = 'Lose'}
            else if (computerMove === 'Paper') {result = 'Win'}
            else if (computerMove === 'Scissor') {result = 'Tie'}
        }
        else if (playerMove === 'paper') {
            if (computerMove === 'Rock') {result = 'Win'}
            else if (computerMove === 'Paper') {result = 'Tie'}
            else if (computerMove === 'Scissor') {result = 'Lose'}
        }
        else if (playerMove === 'rock') {
            if (computerMove === 'Rock') {result = 'Tie'}
            else if (computerMove === 'Paper') {result = 'Lose'}
            else if (computerMove === 'Scissor') {result = 'Win'}
        }

        if (result === 'Win') {
            score.Wins = score.Wins+1;
        }
        else if (result === 'Lose') {
            score.Losses = score.Losses+1;
        }
        else if (result === 'Tie') {
            score.Ties = score.Ties+1;
        }

        localStorage.setItem('score' , JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = `You ${result}`;

        document.querySelector('.js-moves').innerHTML = `You - ${playerMove} , Computer - ${computerMove}`;
        }

        function updateScoreElement() {  document.querySelector('.js-score')
            .innerHTML = `Wins : ${score.Wins} , Losses : ${score.Losses} , Ties : ${score.Ties} `;
        };

    function pickComputerMove() {
                const randomNumber = Math.random();

                let computerMove = '';

                if (randomNumber >= 0  && randomNumber <1/3) {computerMove = 'Rock';}
                else if (randomNumber >= 1/3 && randomNumber < 2/3) {computerMove = 'Paper';}
                else if (randomNumber >=2/3 && randomNumber<1) {computerMove = 'Scissor';}

                console.log(computerMove);

                return computerMove;
                    }
