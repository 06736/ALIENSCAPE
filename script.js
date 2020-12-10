
function courtyard_initial(){
    console.log("Slowly, you open your eyes. You are in the middle of a courtyard, enclosed between four ancient dusty walls." +
        "You look around. Everything around you is decayed and rotten, as if it had only died very recently. The entire courtyard stinks of " +
        "midlew. Upon closer inspection, you notice that the cobblestone underfoot has been cracked, like there had been a recent impact." +
        "\nType into the box 'Look Around' to see what happens");
    let look_around_validation = true;


        let look_around_courtyard = prompt("");
        look_around_courtyard.toLowerCase();//case insensitive
        if(look_around_courtyard === "look around"){
            console.log("");
            look_around_validation = false;
        }else{
            console.log("Try Retyping...")
        }


}



function play_the_game() {


}
play_the_game();




