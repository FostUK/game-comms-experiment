import enemy from './enemy.js';
import game from '/js/game.js';

let enemySprites = [];


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spawn on edge of 640 * 360 screen
 * @returns {{x: *, y: *}}
 */
function getRandomSpawnPoint()
{
	let side = getRandomInt(1,4)
	let x, y

	if (side%2) {
		x = 20 + Math.random() * 620;
		y = side === 3? 20 : 340;
	}
	else {
		y = 20 + Math.random() * 340
		x = side === 2? 20 : 620;
	}

	return {x,y}
}

/**
 * @Optimise enemy pool needed. Currently just adds to an ever increasing array.
 */
class enemyFactory {

	constructor()
	{
		game.time.events.repeat(Phaser.Timer.SECOND /6 , Infinity, this.spawn, this);
	}

	/**
	 * Spawn a single enemy
	 */
	spawn()
	{
		//random point on a rectangle
		let spawnPoint = getRandomSpawnPoint();

		let nextEnemy = new enemy(spawnPoint.x,spawnPoint.y);
		enemySprites.push(nextEnemy.sprite);
	}

	/**
	 * Get an array of current enemy sprites
	 * @Optimise: filter the dead
	 *
	 * @returns {Array}
	 */
	getEnemies()
	{
		return enemySprites;
	}
}


export default enemyFactory;