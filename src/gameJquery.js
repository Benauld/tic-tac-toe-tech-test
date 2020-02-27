$(document).ready(function() {
	var game = new Game();
	var turn = 'X';

	$('.button').click(function() {
		$(this).text(turn);
		$(this).attr('disabled', true);
		$(this).css('color', 'white');
		console.log(turn);
		var winner = game.takeTurn(turn, parseInt($(this).attr('id')));
		console.log(winner);
		if (winner === true) {
			console.log(turn);
		}
		if (turn === 'X') {
			turn = 'O';
		} else {
			turn = 'X';
		}
	});

	$('.reset').click(function() {
		$('.button').text('?');
		$('.button').attr('disabled', false);
		$('.button').css('color', 'rgb(84, 83, 83)');
		game.reset();
	});
});
