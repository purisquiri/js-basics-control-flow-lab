function scuberGreetingForFeet(fr){
  let ride
  if (fr < 400) {
    ride = "This one is on me!"
  }
  else if (fr>2000&&fr<=2500) {
    ride = "I will gladly take your thirty bucks."
  }
  else if (fr>2500) {
    ride = 'No can do.'
  }
  return ride
}

function ternaryCheckCity(city){
  let findCity
  if (city == "NYC") {
    findCity = "Ok, sounds good.";
  }
  else if (city != "NYC") {
    findCity = "No go.";
  }
  return findCity
}

function switchOnCharmFromTip(tips){
  let charm
  if (tips == 'generous') {
    charm = "Thank you so much.";
  }
  else if (tips == 'not as generous') {
    charm = "Thank you.";
  }
  else {
    charm = "Bye.";
  }
  return charm
}