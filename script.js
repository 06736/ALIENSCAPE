//sets the current location
let current_location = "Tutorial";
let inventory = ["key"];
let have_visited = [false, false, false];
let current_objective = "Break into the Crafting Room";
let objective_check = [false, false, false]

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
    document.getElementById("input_div").appendChild(input);
}
//finds the current location and gives the visual cue depending on

function tutorial(){

    $(".p1").append(locations[0]["description"]).fadeIn("normal");
    new_input();




}
function on_input(input){
    //will run until the user types "quit"
    let location_index = 0;
    let quit = false;

    while(quit === false) {
        let user_input = $("input").val().toLowerCase();
        $(input).val("");
        $("#objective").empty().append(current_objective);
        console.log(current_objective + "Hi")
        switch (current_location){
            case "Tutorial":
                location_index = 0
                if(user_input === "continue"){
                    $(".p1").empty().append(locations[0]["on_continue"])
                }else if(user_input === "go north"){
                    $(".p1").empty().append(locations[0]["on_go_north"])
                }else if(user_input === "look around"){
                    $(".p1").empty().append(locations[0]["on_look_around"])
                }else if(user_input=== "take water bottle"){
                    $(".p1").empty().append(locations[0]["on_take"])
                }else if(user_input === "drop water bottle"){
                    $(".p1").empty().append(locations[0]["on_drop"])
                    current_location = locations[1]["name"];
                }else if(user_input === "skip"){
                    current_location = locations[1]["name"]
                    $(".p1").empty().append(locations[1]["description"]).fadeIn("normal");
                }
                break;
            case "Courtyard":
                location_index = 1;
                $("#current_location_div").css("visibility", "visible");
                $("#objective_div").css("visibility", "visible");
                $("#inventory_div").css("visibility", "visible");
                if (user_input === "go north"){ // the star room
                    current_location = locations[2]["name"];
                    $(".p1").empty().append(locations[2]["description"])
                }else if(user_input === "go east"){ // the moon room
                    current_location = locations[4]["name"];
                    $(".p1").empty().append(locations[4]["description"])
                }else if (user_input === "go south"){ // the sun room
                    current_location = locations[5]["name"];
                    $(".p1").empty().append(locations[5]["description"])
                }else if(user_input === "go west"){ // the black hole room
                    if(inventory.includes("key") || have_visited[2] === true){
                        current_location = locations[6]["name"];
                        $(".p1").empty().append(locations[6]["description"])
                    }else if (!inventory.includes("key")){
                        $(".p1").empty().append("You must craft a key in order to open this door")
                    }
                }else if(user_input === "look around"){
                    $(".p1").empty().append(locations[1]["on_look_around"])
                } else if(user_input === "go down"){
                    if(inventory.includes("ionic armour")){
                        current_location = locations[8]["name"];
                        $(".p1").empty().append(locations[8]["description"])
                    }else if(inventory.includes("armour")){
                        $(".p1").empty().append("You are still not strong enough. Try to upgrade your armour in the crafting room!");
                    }else{
                        $(".p1").empty().append("You are not strong enough to open the overgrown trapdoor. Try using a set of armour to increase your strength.")
                    }
                } else if (user_input.substring(0,4) === "take"){
                    take(user_input, current_location, location_index);
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                    console.log(user_input.substring(0, 4))
                }
                break;
            case "The Star Room":
                location_index = 2
                if (user_input === "look around"){
                    $(".p1").empty().append(locations[2]["on_look_around"]);
                }else if(user_input.substring(0,4) === "take"){ //adds these all to your inventory
                    take(user_input, current_location, location_index);
                }else if(user_input === "go crafting room"){
                    if(inventory.includes("handgun")){
                        current_location = locations[3]["name"];
                        $(".p1").empty().append(locations[3]["description"]);
                        have_visited[0] = true;
                    }else if(have_visited[0] === true){
                        current_location = locations[3]["name"];
                        $(".p1").empty().append("You are now in the crafting Room")
                    }
                    else{
                        $(".p1").empty().append(locations[3]["requirement"])
                    }
                }else if (user_input === "go moon room"){
                    current_location = locations[4]["name"]
                    $(".p1").empty().append(locations[4]["description"])
                }else if(user_input === "go back"){
                    current_location = locations[1]["name"]
                    $(".p1").empty().append("You are back in the courtyard")
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                }
                break;
            case "The Crafting Room":
                location_index = 3;
                current_objective = "Enter the Black Hole Room"
                if(user_input.substring(0,4) === "take"){
                    take(user_input, current_location, location_index);
                }else if(user_input === "craft key"){
                    if(inventory[0] === "key fragment" && inventory[1] === "key fragment" && inventory[2] === "key fragment"){
                        inventory.splice(0, inventory.length);
                        inventory.push("key");
                        $(".p1").empty().append("Crafted: An Ancient Key")
                    }
                }else if (user_input === "craft armour"){
                    if(inventory.includes("fusion reactor") && inventory.includes("armour") && inventory.includes("ionic fabric")){
                        inventory.splice(0, inventory.length);
                        inventory.push("ionic armour");
                        $(".p1").empty().append("Crafted: Ionic Armour")
                    }
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                }
                else if (user_input === "go back"){
                    current_location = locations[2]["name"]
                    $(".p1").empty().append(locations[2]["description"]);
                }
                break;
            case "The Moon Room":
                location_index = 4;
                if(user_input === "look around"){
                    $(".p1").empty().append(locations[4]["on_look_around"])
                }else if (user_input.substring(0,4) === "take"){
                    take(user_input, current_location, location_index);
                }else if (user_input === "go back"){
                    current_location = locations[1]["name"];
                    $(".p1").empty().append("You are back in the courtyard")
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                }
                break;
            case "The Sun Room":
                location_index = 5;
                if(user_input === "look around"){
                    $(".p1").empty().append(locations[5]["on_look_around"])
                }else if(user_input.substring(0,4) === "take"){
                    take(user_input, current_location, location_index);
                }else if(user_input === "go back"){
                    current_location = locations[1]["name"];
                    $(".p1").empty().append("You are back in the courtyard");
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                }

                break;
            case "The Black Hole Room":
                have_visited[2] = true;
                current_objective = "Descend through the trapdoor..."
                location_index = 6;
                if(user_input === "look around"){
                    $(".p1").empty().append(locations[6]["on_look_around"]);
                }else if(user_input.substring(0,4) === "take"){
                    take(user_input, current_location, location_index);
                }else if (user_input === "go door"){
                    if(have_visited[1] === false) {
                        $(".p1").empty().append(locations[7]["description"]);
                        current_location = locations[7]["name"];
                    }else{
                        $(".p1").empty().append("You broke the handle, so cannot re-enter this room!")
                    }
                }else if (user_input === "go back"){
                    current_location = locations[1]["name"];
                    $(".p1").empty().append("You are back in the courtyard")
                    $(".p3").append(current_location)
                }else if(user_input.substring(0, 4) === "drop"){
                    remove(user_input, current_location, location_index)
                }
                break;
            case "The Do Not Enter Room":
                location_index = 7
                if(user_input === "go closer") {
                    have_visited[1] = true;
                    $(".p1").empty().append(locations[7]["on_look_around"])
                    current_location = locations[6]["name"];

                }
                break;
            case "The Mirror Room":
                location_index = 8;
                objective_check[2] = true;
                break;
        }
        if(have_visited[1] === true){
            if(user_input === "take ionic fabric"){
                $(".p1").empty().append("Acquired: Ionic Fabric");
                inventory.push("ionic fabric")
            }
        }
        if(user_input === "read manual"){
            if(inventory.includes("manual")){
                $(".p1").empty().append("CRAFTING RECIPES: 3 KEY FRAGMENTS = KEY | IONIC FABRIC + FUSION REACTOR + ARMOUR = IONIC ARMOUR")
            }
        }
        $("#inventory_1").empty().append(inventory[0])
        $("#inventory_2").empty().append(inventory[1])
        $("#inventory_3").empty().append(inventory[2])
        $("#current_location1").empty().append(current_location)



        quit = true;
    }
}
function take(user_input, current_location, location_index){
    let item_in_focus = "";
    let item_index = locations[location_index]["items"].indexOf(user_input.substring(5, user_input.length)); //matches the item the user wants to take with the location of the item within the list
    if (locations[location_index]["items"].includes( user_input.substring(5, user_input.length))) {
        if(locations[location_index]["taken"][item_index] === false){
            if(inventory.length < 3){
                inventory.push(locations[location_index]["items"][item_index])
                $(".p1").empty().append("Acquired: " + user_input.substring(5, user_input.length))
                locations[location_index]["taken"][item_index] = true;
            }else{
                $(".p1").empty().append("Your inventory is full!")
            }
        }else{
            $(".p1").empty().append("You already picked this up!");
        }


    }else{
        $(".p1").empty().append("This item is not in this room");
    }
}
function remove(user_input, current_location, location_index){ //drops the item but cannot be picked back up...
    let item_in_focus = user_input.substring(5, user_input.length);
    console.log(item_in_focus)
    if(inventory.includes(item_in_focus)){
        console.log(inventory + "before")
        inventory.splice(inventory.indexOf(item_in_focus), inventory.indexOf(item_in_focus) + 1)
        console.log(inventory + "after")
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < locations[i]["items"].length; j++){
                if(locations[i]["items"][j].includes(item_in_focus)){
                    locations[i]["items"].splice(j, j+1); //effectively drops the item where you are standing
                    locations[i]["taken"].splice(j, j+1);
                    locations[location_index]["items"].push(item_in_focus);
                    locations[location_index]["taken"].push(false);
                    $(".p1").empty().append("You have dropped " + item_in_focus)
            }


            }
        }
    }else{
        $(".p1").empty().append("That item doesn't exist!")
    }

}
function play_the_game(){

    //fades out all the text on the screen

    main_menu();
    setTimeout("tutorial()", 2000)



}









