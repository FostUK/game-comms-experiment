/**
 * Phaser button with text overlay
 *
 * @example game.add.existing(new textButton( ...parameters))
 */
class textButton extends Phaser.Button {

	constructor(game, x, y, key, label, style, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {

		super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group)

		this.anchor.setTo( 0.5, 0.5 );
		this.label = new Phaser.Text(game, 0, 0, label, style);
		this.label.anchor.setTo( 0.5, 0.5 );
		this.addChild(this.label);
	}

	/**
	 * Disables input and makes button semi-transparent
	 *
	 * @param {Boolean} bool - enables button if true
	 */
	enable(bool = true) {

		this.inputEnabled = bool;
		this.alpha = bool? 1 : 0.5;
	}
}

export default textButton


