'use strict';

var game;

beforeEach(function() {
	game = new Game();
});

describe('Game', function() {
	it('does not win on the first turn', function() {
		expect(game.takeTurn('X', '1')).toEqual(false);
	});
});
