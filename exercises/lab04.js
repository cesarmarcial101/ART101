 let count = 0;
let buttonCreature = {
    name: "Weather Button",
    species: "extraterrestrial",
    favoriteFood: "interactions",
    moods: ["sunny", "rainy", "foggy", "cloudy", "snowy"]
};
let arrayPosition = 0;
$("#needy-button").click(function () {
    count = count + 1;


    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "Today the weather is looking " + currentMood;
   
    $("#output").html(message);


    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    if(arrayPosition == 4){
        arrayPosition = 0;
    }
    arrayPosition  += 1;

});