$(document).ready(function() {
	var game = new Game();
	var turn = 'X';

	$('.button').click(function() {
		$(this).text(turn);
		$(this).attr('disabled', true);
		$(this).css('color', 'white');
		var winner = game.takeTurn(turn, parseInt($(this).attr('id')));
		if (winner === true) {
			$('.winner').text('We have a winner!');
			$('.winner').css('color', 'red');
			$('.button').attr('disabled', true);
		}
		if (turn === 'X') {
			turn = 'O';
			$('#player2').css('color', 'darkred');
			$('#player1').css('color', 'black');
		} else {
			turn = 'X';
			$('#player1').css('color', 'darkred');
			$('#player2').css('color', 'black');
		}
	});

	$('.reset').click(function() {
		$('.button').text('?');
		$('.button').attr('disabled', false);
		$('.button').css('color', 'rgb(84, 83, 83)');
		$('.winner').text('Game On!');
		$('.winner').css('color', 'darkred');
		game.reset();
	});
});
