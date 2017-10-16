/**
 * Fake GMI Object for testing module interaction
 *
 */
class gmi {

	constructor() {

		/** @private */
		this._ = {
			"userData": {}
		}
	}

	getUserData() {

		return this._.userData
	}

	setUserData(newData) {

		this._.userData = newData
	}
}


export default gmi