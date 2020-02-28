'use strict';
function Game() {
	this.gameBoard = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	this.turn = 'X';
	this.turnNo = 0;
	this.winner = false;
}

Game.prototype.takeTurn = function(turn, id) {
	this.winner = false;
	Game.prototype.getNameNo(turn);
	Game.prototype.updateGridRef(id, this.gameBoard);
	this.winner = Game.prototype.determineWinner();
	console.log(this.winner);
	return this.winner;
};

Game.prototype.determineWinner = function() {
	var y = this.turnNo * 3;
	console.log(this.gameBoard);
	for (var x = 0; x < 3; x++) {
		if (
			this.gameBoard[x][0] + this.gameBoard[x][1] + this.gameBoard[x][2] == y ||
			this.gameBoard[0][x] + this.gameBoard[1][x] + this.gameBoard[2][x] == y
		) {
			console.log('line', this.winner);
			this.winner = true;
			return this.winner;
		}
	}
	if (
		this.gameBoard[0][0] + this.gameBoard[1][1] + this.gameBoard[2][2] == y ||
		this.gameBoard[2][0] + this.gameBoard[1][1] + this.gameBoard[0][2] == y
	) {
		console.log('Diagonal', this.winner);
		this.winner = true;
		return this.winner;
	}
};

Game.prototype.reset = function() {
	this.turn = 'X';
	this.turnNo = 0;
	this.winner = false;
	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			this.gameBoard[x][y] = 0;
		}
	}
};

Game.prototype.getNameNo = function(turn) {
	if (turn == 'X') {
		this.turnNo = 1;
	} else {
		this.turnNo = 9;
	}
};

Game.prototype.updateGridRef = function(id, gameBoard) {
	this.gameBoard = gameBoard;
	var row = 0;
	var column = 0;
	if (id > 5) {
		row = 2;
		column = id - 6;
	} else if (id > 2) {
		row = 1;
		column = id - 3;
	} else {
		row = 0;
		column = id;
	}
	this.gameBoard[row][column] = this.turnNo;
};
