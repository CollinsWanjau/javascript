const stock = {
        Fruits: ["strawberries", "grapes", "banana", "apple"],
        Holdings: ["cone", "cup", "stick"],
        Toppings: ["chocolate", "sprinkles"],
        Liquids: ["water", "ice"],
};

let order = (fruit_name, call_production) => {
	
	setTimeout(function(){
		console.log(`${stock.Fruits[fruit_name]} was selected`);

		// order placed. Call production to start
		call_production();
	}, 2000)
};

// function 2
let production = () => {

	setTimeout(() => {

		console.log("Production has started");

		setTimeout(() => {

			console.log("The fruit has been chopped")

			setTimeout(() => {

				console.log(`${stock.Liquids[0]} and ${stock.Liquids[1]} added`)

				setTimeout(() => {

					console.log("Start the machine")

					setTimeout(() => {
						console.log(`Ice cream placed on ${stock.Holdings[1]}`)

						setTimeout(() => {

							console.log(`${stock.Toppings[0]} as toppings`)

							setTimeout(() => {
								console.log("Serve Ice cream")
							},2000)
						}, 3000)
					}, 2000)
				}, 1000)

			},1000)
		},2000)
	}, 0000)
};

// Trigger

order("", production);
