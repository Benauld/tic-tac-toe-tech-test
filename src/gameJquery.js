$(document).ready(function() {
	var game = new Game();
	var turn = 'X';

	$('.button').click(function() {
		$(this).text(turn);
		$(this).attr('disabled', true);
		console.log(turn);
		if (turn === 'X') {
			turn = 'O';
		} else {
			turn = 'X';
		}
	});

	function displayGrid(gridArray) {
		for (let i = 1; i < 11; i++) {
			if (i === 1) {
				$('#create-table').replaceWith('<tr id="create-table"></tr>');
			}
			if (typeof scoreArray[i] !== 'undefined') {
				$('#create-table').append(
					'<tr><th rowspan="2">' +
						String(i) +
						':</th><td>' +
						scoreArray[i].displayPins1stRole +
						'</td>\
          <th rowspan="2">' +
						scoreArray[i].displayScore +
						'</th></tr>\
          <tr><td>' +
						scoreArray[i].displayPins2ndRole +
						'</td> </tr>'
				);
				var nextRole = scoreArray[i].nextTurn;
				score = scoreArray[i].score;
			}
		}
		return (role = nextRole);
	}
});
