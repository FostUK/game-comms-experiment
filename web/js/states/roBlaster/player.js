import game from '/js/game.js'

class player {

	constructor(x,y) {

		this.sprite = game.add.sprite(x, y, 'moonSuit')

		this.sprite.scale.setTo(0.2);
		this.sprite.anchor.setTo(0.5);
		game.physics.arcade.enable(this.sprite);
		this.sprite.body.collideWorldBounds = true;
		this.sprite.body.offset.x = 87
		this.sprite.body.width = 10

	}

}

export default player