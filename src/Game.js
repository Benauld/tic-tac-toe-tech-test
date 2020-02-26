'use strict';
function Game() {
	this.currentTemperature = 20;
}

Game.prototype.increase = function() {
	if (this.currentTemperature < this.maximumTemperature) {
		this.currentTemperature += 1;
	}
	return this.currentTemperature;
};
