function kitchen() {

	return new Promise((resolve, reject) => {

		if(true) {
			resolve("promise is fulfilled")
		}

		else {
			reject("error was caught here")
		}
	})
}

kitchen()
.then()
.then()
.catch()
.finally()
