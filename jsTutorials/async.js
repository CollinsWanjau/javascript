async function kitchen() {

	try{
		await abc;
	}
	
	catch(error){
		console.log("abc does not exist", error)
	}

	finally{
		console.log("Run code anyways")
	}
}

kitchen()
