// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
passengerFirstName=ride.passengerDetails.first
passengerLastName=ride.passengerDetails.last
passengerPhoneNumber=ride.passengerDetails.phoneNumber

pickupAddress=ride.pickupLocation.address
pickupCity=ride.pickupLocation.city 
pickupState=ride.pickupLocation.state
pickupZip=ride.pickupLocation.zip

dropoffAddress=ride.dropoffLocation.address
dropoffCity=ride.dropoffLocation.city 
dropoffState=ride.dropoffLocation.state
dropoffZip=ride.dropoffLocation.zip

passengers=ride.numberOfPassengers

let serviceLevel
if (ride.purpleRequested){
  serviceLevel=`Noober Purple`
}
else if (passengers>3){
  serviceLevel=`Noober XL`
}
else{
  serviceLevel=`Noober X`
}
  console.log(`${serviceLevel} Passenger: ${passengerFirstName} ${passengerLastName} 
  ${passengerPhoneNumber}.
  Pickup at: ${pickupAddress}, ${pickupCity}, ${pickupState}, ${pickupZip}.
  Drop off at: ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.
  Number of passengers: ${passengers}`)
  


  // 🔥 YOUR CODE ENDS HERE 🔥
})
