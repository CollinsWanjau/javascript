const stock = {
        Fruits: ["strawberries", "grapes", "banana", "apple"],
        Holdings: ["cone", "cup", "stick"],
        Toppings: ["chocolate", "sprinkles"],
        Liquids: ["water", "ice"],
};

let is_shop_open = true;

// Create function named order and pass two args

let order = (time, work) => {

	return new Promise((resolve, reject) => {

		if( is_shop_open){

			setTimeout(() => {
				resolve(work())
			},time)
		}

		else
		{
			reject(console.log("Our shop is closed"))
		}
	})
}

order(2000, () => console.log(`${}`))
