import game from '/js/game.js'

/**
 * Enemy to Bullet collision handler
 *
 * @param {Object} body1 - Phaser body
 * @param {Object} body2 - Phaser body
 */
function hitEnemy(body1, body2) {

	if (body1.enemy) {
		body1.kill();
		this.HUD.incWinnings(1)
	}
	else if (body2.enemy) {
		body2.kill();
		this.HUD.incWinnings(1)
	}
}

function hitPlayer() {

	//Go back to shop
	game.state.start('shop');
}

/**
 * Main game loop
 *
 * @param {Object} shared - shared game namespace
 */
function gameLoop(shared) {
    shared.controls.poll(shared);

	game.physics.arcade.overlap(shared.weapon.bullets, shared.enemyFactory.getEnemies(), hitEnemy.bind(shared), null, this);
	game.physics.arcade.overlap(shared.player.sprite, shared.enemyFactory.getEnemies(), hitPlayer, null, this);

	//game.debug.body(shared.player.sprite);
	//
	//shared.enemyFactory.getEnemies().forEach(sprite => {
	//	game.debug.body(sprite);
	//})
}


export default gameLoop