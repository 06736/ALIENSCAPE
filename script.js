


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
function new_input(){
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    document.body.appendChild(input);
    let x = $("input").val();
    console.log(x);
}
function courtyard_initial(){
    $(".p1").append("Slowly, you open your eyes. You are in the middle of a courtyard, enclosed between four ancient dusty walls." +
        "You look around. Everything around you is decayed and rotten, as if it had only died very recently. The entire courtyard stinks of " +
        "midlew. Upon closer inspection, you notice that the cobblestone underfoot has been cracked, like there had been a recent impact." +
        "Type into the box 'Look Around' to see what happens").fadeIn("normal");
    new_input();


}
function play_the_game(){

    //fades out all the text on the screen

    main_menu();
    setTimeout("courtyard_initial()", 2000)



}








