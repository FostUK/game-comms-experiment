import game from '/js/game.js'

class enemy {

	/**
	 * Create a generic test enemy
	 *
	 * @param {Number} x - horizontal start position
	 * @param {Number} y - vertical start position
	 */
	constructor(x, y) {

		/** @private */
		this.sprite = game.add.sprite(x, y, 'enemy')

		this.sprite.anchor.setTo(0.5);

		game.physics.arcade.enable(this.sprite);
		this.sprite.body.collideWorldBounds = true;

		this.sprite.body.velocity.x = (Math.random() * 200) - 100;
		this.sprite.body.velocity.y = (Math.random() * 200) - 100;

		this.sprite.body.bounce.set(1);
		this.sprite.body.setCircle(12);
		this.sprite.body.x = 0

		//Shortcut code!! A real game would extend phaser sprite to have an id or reference to this enemy instance
		this.sprite.enemy = this
	}

	kill () {
		console.warn("Enemy Killed")
	}

	update() {

	}
}

export default enemy