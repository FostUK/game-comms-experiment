import game from '/js/game.js'

class controls {

	constructor()
	{
		/** @private */
		this._ = {
			"cursors" : game.input.keyboard.createCursorKeys(),
			"fireButton": game.input.keyboard.addKey(Phaser.KeyCode.Z)
		}
	}

	/**
	 * Check defined controls
	 *
	 * @param {Object} shared - game namespace
	 */
	poll(shared) {

		//UP / DOWN
		if (this._.cursors.up.isDown) {
			shared.player.sprite.body.velocity.y = -200;
		}
		else if (this._.cursors.down.isDown) {
			shared.player.sprite.body.velocity.y = 200;
		}
		else {
			shared.player.sprite.body.velocity.y = 0;
		}

		//LEFT / RIGHT
		if (this._.cursors.left.isDown) {
			shared.player.sprite.body.velocity.x = -200;
			shared.player.sprite.scale.setTo(-0.2, 0.2)
			shared.weapon.fireAngle = 180;
			shared.weapon.trackSprite(shared.player.sprite, -20, -7);
		}
		else if (this._.cursors.right.isDown) {
			shared.player.sprite.scale.setTo(0.2)
			shared.player.sprite.body.velocity.x = 200;
			shared.weapon.fireAngle = 0;
			shared.weapon.trackSprite(shared.player.sprite, 20, -7);
		}
		else {
			shared.player.sprite.body.velocity.x = 0;
		}

		if (this._.fireButton.isDown) {
			shared.weapon.fire();
		}
	}
}

export default controls