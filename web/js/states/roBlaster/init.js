import preload from "./preload.js";
import create from "./create.js";
import update from "./update.js";

var shared = {}

var gameState = {

	"preload": preload,

	"create": function()
	{
		create(shared)
	},

	"update": function() {
		update(shared)
	}
}

export default gameState