import game from "/js/game.js";
import roBlaster from "/js/states/roBlaster/init.js";
import shop from "/js/states/shop/init.js";
import gmi from "./gmi.js";


/**
 * TODO currently the gmi is a global. Worth considering this just being a module?
 *
 * @type {gmi}
 */
window.gmi = new gmi()


game.state.add('roBlaster', roBlaster);
game.state.add('shop', shop);
game.state.start('shop');