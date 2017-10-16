import game from '/js/game.js'

const style = { font: "bold 12px Arial", fill: "#FFCC66", boundsAlignH: "right", boundsAlignV: "right" };

class HUD {

	constructor() {

		/** @private */
		this._ = {

			"winnings": 0,
			"winText": game.add.text(535, 343, "", style)
		}

		this._.winText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		this._.winText.setTextBounds(0, 0, 100, 30);

		this.incWinnings(0)
	}

	/**
	 * Add a value to the player's winnings
	 *
	 * @param {Number} incremement - amount to add to winnings
	 */
	incWinnings(incremement) {
		this._.winnings += incremement
		this._.winText.setText("WINNINGS: Ƀ" + this._.winnings)

		gmi.setUserData({"winnings": this._.winnings})
	}

}

export default HUD