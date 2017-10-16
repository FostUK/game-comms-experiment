import game from '/js/game.js'

class blaster {

	/**
	 * Creates  new Phaser.Weapon with "blaster2 defaults
	 *
	 * @param {Number} quantity - size of bullet pool
	 * @param {String} key - bullet sprite id
	 * @param {Phaser.Sprite} tracked - sprite that the bullets will be attached to
	 * @returns {*|Phaser.Plugin}
	 */
	constructor(quantity, key, tracked) {

		let weapon = game.plugins.add(Phaser.Weapon);

		weapon.createBullets(quantity, key);

		weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		weapon.bulletAngleOffset = 90;
		weapon.bulletSpeed = 400;
		weapon.fireAngle = 0;
		weapon.fireRate = 60;
		weapon.bulletInheritSpriteSpeed  = true;

		//Tell the Weapon to track the 'player' Sprite
		weapon.trackSprite(tracked, 20, -7);

		return weapon;
	}
}

export default blaster