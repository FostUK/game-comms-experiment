import game from '/js/game.js'
import textButton from '/js/util/textButton.js'

function startGame () {
	game.state.start('roBlaster');
}

const winningsStyle = { font: "bold 12px Arial", fill: "#FFCC66", boundsAlignH: "right", boundsAlignV: "right" };

const buttonStyle = {
	'font': '20px Arial',
	'fontWeight': 'bold',
	'fill': 'white'
};

let startButton

var shop = {

	"preload": function() {
		game.load.spritesheet('button', 'assets/images/button_sprite_sheet.png', 193, 71);
	},

	"create": function() {

		let userData = gmi.getUserData();
		let winnings = userData.winnings ? userData.winnings : 0;

		let button1 = game.add.existing( new textButton(game, game.world.centerX - 95, 100, 'button', "Buy Blaster", buttonStyle, startGame, this, 2, 1, 0));
		let button2 = game.add.existing( new textButton(game, game.world.centerX - 95, 180, 'button', "Buy Plasma", buttonStyle, startGame, this, 2, 1, 0));
		let button3 = game.add.existing( new textButton(game, game.world.centerX - 95, 260, 'button', "Buy Laser", buttonStyle, startGame, this, 2, 1, 0));


		//let button4 = game.add.button(game.world.centerX - 95, 320, 'button', ))

		button2.enable(winnings > 10)
		button3.enable(winnings > 20)

		startButton = game.input.keyboard.addKey(Phaser.KeyCode.ENTER)

		let winningsText = game.add.text(535, 343, "WINNINGS: Ƀ" + winnings, winningsStyle)
	},

	"update": function() {

		if (startButton.isDown) {
			startGame()
		}
	}
}

export default shop