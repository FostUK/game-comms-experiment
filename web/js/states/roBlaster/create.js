import enemyFactory from "./enemyFactory.js"
import player from "./player.js"
import HUD from "./HUD.js"
import controls from "./controls.js"
import blaster from "./weapons/blaster.js"

var create = function(shared) {

	shared.player = new player(100,100);
	shared.controls = new controls()
	shared.weapon = new blaster(30, 'bullet', shared.player.sprite)
    shared.enemyFactory = new enemyFactory()
	shared.HUD = new HUD()
}

export default create