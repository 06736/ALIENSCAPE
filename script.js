//sets the current location
let current_location = "courtyard initial";
let inventory = [];
//                 star    craft  moon   sun   black  dont  mirror
let items_taken = [false, false, false, false, false,false,false];
function main_menu() {
    $(document).ready(function () {
        $(".h1").fadeOut("2000", function () {
            $(".h1").empty();
        });
        $(".p1").fadeOut("2000", function () {
            $(".p1").empty();

        });
        $(".btn").fadeOut("2000");
    });
}
//new input, courtesy of tom steer xd
function new_input(){
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    input.addEventListener("keyup",function(event){
        if(event.which == 13){
            on_input(input);
        }
    });
    document.body.appendChild(input);
}
//finds the current location and gives the visual cue depending on




function courtyard_initial(){
    $(".p1").append(locations[0]["description"]).fadeIn("normal");
    new_input();



}
function on_input(input){
    //will run until the user types "quit"
    let quit = false;
    while(quit === false) {
        let user_input = $("input").val().toLowerCase();
        $(input).val("");
        switch (current_location){
            case "courtyard initial":
                if(user_input === "look around"){
                    $(".p1").empty().append(locations[1]["description"]);//adds the description for the courtyard

                    current_location = locations[1]["name"];
                }
                break;
            case "Courtyard":
                if (user_input === "go north"){ // the star room
                    current_location = locations[2]["name"];
                    $(".p1").empty().append(locations[2]["description"])
                }else if(user_input === "go east"){ // the moon room
                    current_location = locations[4]["name"];
                }else if (user_input === "go south"){ // the sun room
                    current_location = locations[5]["name"];
                }else if(user_input === "go west"){ // the black hole room

                }
                break;
            case "The Star Room":

                if (user_input === "look around"){
                    $(".p1").empty().append(locations[2]["description"], locations[2]["on_look_around"]);
                }else if(user_input === "take all" && items_taken[0] === false){ //adds these all to your inventory
                    inventory.push("Crystalline Spyglass", "Dark Matter Capsule", "Rusty Handgun", "Key Fragment")
                    $(".p1").empty().append("You have acquired: The Crystalline Spyglass, the Dark Matter Capsule, the Rusty Handgun and a Key Fragment")
                    items_taken[0] = true;
                }else if(user_input === "go door"){
                    if(inventory.includes("Rusty Handgun")){
                        current_location = locations[3]["name"];
                        $(".p1").empty().append(locations[3]["description"]);
                    }else{
                        $(".p1").empty().append(locations[3]["requirement"])
                    }
                }else if (user_input === "go moon room"){
                    current_location = locations[4]["name"]
                }else if(user_input === "go back"){
                    current_location = locations[1]["name"]
                    $(".p1").append("You are back in the courtyard")
                }
                break;
            case "The Crafting Room":
                if(user_input === "take manual"){
                    $(".p1").append(locations[3]["items"])
                }else if (user_input === "go back"){
                    current_location = locations[2]["name"]
                    $(".p1").empty().append(locations[2]["description"]);
                }
                break;
            case "The Moon Room":
                break;
            case "The Sun Room":
                break;
            case "The Black Hole Room":
                break;
            case "The Do Not Enter Room":
                break;
            case "The Mirror Room":
                break;
        }


        quit = true;
    }
}
function play_the_game(){

    //fades out all the text on the screen

    main_menu();
    setTimeout("courtyard_initial()", 2000)



}









