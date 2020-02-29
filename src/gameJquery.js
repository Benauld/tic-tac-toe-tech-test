$(document).ready(function() {
	var game = new Game();
	var turn = 'X';

	$('.button').click(function() {
		$(this).text(turn);
		$(this).attr('disabled', true);
		$(this).css('color', 'white');
		var winner = game.takeTurn(turn, parseInt($(this).attr('id')));

		winnerWinnerChickenDinner(winner);

		turn = changeTurn(turn);
	});

	$('.reset').click(function() {
		$('.button').text('?');
		$('.button').attr('disabled', false);
		$('.button').css('color', 'rgb(84, 83, 83)');
		$('.winner').text('Game On!');
		$('.winner').css('color', 'darkred');
		game.reset();
	});

	function changeTurn(turn) {
		if (turn === 'X') {
			turn = 'O';
			$('#player2').css('color', 'darkred');
			$('#player1').css('color', 'black');
			return turn;
		} else {
			turn = 'X';
			$('#player1').css('color', 'darkred');
			$('#player2').css('color', 'black');
			return turn;
		}
	}

	function winnerWinnerChickenDinner(winner) {
		if (winner === true) {
			$('.winner').text('We have a winner!');
			$('.winner').css('color', 'red');
			$('.button').attr('disabled', true);
		}
	}
});
