let distanceInKm= prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`)//variable used to prompt the user to choose their desired destination
distanceInKm=Number(distanceInKm);// conversion of strings to numbers

function calculateBodaFare(distanceInKm){
    const baseFare= 50;//minimum charge
    const chargePerKilometer=15 //charge depending on kilometers e.g KES 15 per kilometer

    let totalfare= baseFare+(distanceInKm * chargePerKilometer)
    //calculation of the total fare

    console.log(`Uko kwote? Io ni ${distanceInKm} km:
        Ukikalia Pikipiki: KES 50
        Mpaka uko: KES ${distanceInKm *15}
        Total: KES ${totalfare}`)

        console.log("Panda Senke!")
        //prints on the console
}

calculateBodaFare(distanceInKm);// Calling the function to calculate and display the fare based on user input