const stock = {
        Fruits: ["strawberries", "grapes", "banana", "apple"],
        Holdings: ["cone", "cup", "stick"],
        Toppings: ["chocolate", "sprinkles"],
        Liquids: ["water", "ice"],
};

let is_shop_open = true;

function time(ms) {

	return new Promise((resolve, reject) => {

		if(is_shop_open) {
			setTimeout(resolve, ms)
		}
		else
		{
			reject(console.log("Shop is called"))
		}
	});
}

// let's create our kitchen
async function kitchen() {
	try {

		await time(2000)
		console.log(`${stock.Fruits[0]} was selected`)

		await time(0000)
		console.log("production has started")

		await time(2000)
		console.log("fruit has been chopped")

		await time(1000)
		console.log(`${stock.Liquids[0]} and ${stock.Liquids[1]} added`)

		await time(1000)
		console.log("start the machine")

		await time(2000)
		console.log(`ice cream placed on ${stock.Holdings[1]}`)

		await time(3000)
		console.log(`${stock.Toppings[0]} as toppings`)

		await time(2000)
		console.log("Serve Ice Cream")
	}

	catch(error) {
		console.log("Customer has left", error)
	}

	finally {
		console.log("Day ended, shop closed")
	}

}

kitchen();
