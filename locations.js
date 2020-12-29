let locations = [
    {//index 0
        name: "Tutorial",
        description: "You are about to enter the tutorial. Type 'skip' into the box at any time to skip. If you would like to continue with the tutorial, type 'continue' into the box.",
        on_continue: "Wow, somebody actually using the tutorial! For the first command, type into the box 'go north'",
        on_go_north: "You enter a room, which looks strangely familiar. Oh yes, it's where you work. Now type 'look around'",
        on_look_around: "You notice a water bottle on the floor. Try typing 'take water bottle'",
        on_take: "Acquired: water bottle. Finally, enter 'drop water bottle'",
        on_drop: "Dropped: water bottle. Ah, you might want to clean that up... Anyways, I'll let you get to it. Best of luck! Press enter (or any sequence of characters followed with an enter) to start!",
        items: [],
        taken: []


    },
    {//index 1
        name: "Courtyard",
        description: "Slowly, you open your eyes. You are in the middle of a courtyard, enclosed between four ancient dusty walls." +
            "You look around. Everything around you is decayed and rotten, as if it had only died very recently. The entire courtyard stinks of " +
            "midlew. Upon closer inspection, you notice that the cobblestone underfoot has been cracked, like there had been a recent impact.",
        on_look_around: "Everything around you seems to have died recently. Every weed, patch of grass \n" +
            "and vein of ivy is now rotten and decaying, as if it had been alive recently.\n" +
            "The entire courtyard stinks of mildew, a closer look at the cobble underfoot\n" +
            "shows it to be completely cracked, like there has been a recent impact\n" +
            "Four doors surround you. North there is a door with a star crest atop it,\n" +
            "East there is a door with a moon crest atop it,\n" +
            "South there is a door with a sun crest atop it,\n" +
            "And west there is a door with a black hole atop it.\n" +
            "and directly beneath your feet, there is a trapdoor, which you cannot open...",
        requirement: "none",
        items: ["Small Rucksack", "Ionic Fabric"],
        taken: [false, false]

    },
    {//index 2
        name: "The Star Room",
        description:"You open the doors. Inside, you are met with a small circular room. The ceiling\n" +
            "was peppered with stars, each one individulistic and yet equal. There is a small \n" +
            "brown door at the far end of the room, with a feeble looking lock on it." +
            "To the right, there is a door which leads to the Moon room.\n" +
            "To the left side, there is a small metal desk with an upturned chair.   \n",
        requirement: "none",
        on_look_around: "You move to the far side of the room, and turn around. Instantly, you notice three out-of-place objects. A crystalline Spyglass. A Dark Matter Capsule." +
            " \nA small, thumbnail sized metallic fragment of sorts. You move to the metal desk and rummage through the contents of the drawer. Your hands brush away some paper" +
            ", and there sits a rusty handgun, fully loaded.",
        items: ["handgun","spyglass", "dark matter capsule",  "key fragment"],
        taken: [false, false, false, false]



    },
    { // index 3
        name: "The Crafting Room",
        description: "You shoot out the lock with the handgun, the recoil of which is horrid and jolts " +
            " your arm. You continue down a very short passage until you reach a small room. " +
            " Inside, there is a large 3D printer, with trays to put the materials inside of." +
            " On top of which, there is a manual with all the items you can craft with it. To craft anything," +
            "just enter 'craft' + the name of the item you want to craft whilst within this room",
        requirement: "You need a handgun to break through this door!",
        items: ["manual"],
        taken: [false]
    },
    {// index 4
        name: "The Moon Room",
        description: "You open the door to the moon room. It is a large, square room, with eerily " +
            "modern walls for such an old building. You step inside, and a harsh white light " +
            "blinks on. There are at least a dozen pedestals, each with a pale, dusty stone" +
            "on display behind the thin sheen of glass. Each has a label, stating:" +
            "SPECEMIN FROM THE DARK SIDE OF THE MOON",

        on_look_around: "you are drawn towards the pedestal in the centre." +
            "The writing is hardly legible as it is clear an attempt has been made to" +
            "scratch it off." +
            "SP*CEM*N FR*M  *I**N" +
            "The rock here was a deep shade of black. You put your head closer." +
            "The rock is covered in pinpricks of pulsating, purple light",
        requirement: "none",
        items: ["moon rock", "titan rock", "key fragment"],
        taken: [false, false, false]
    },
    { // index 5
        name: "The Sun Room",
        description: "You enter the Sun Room. Inside, there is a miniscule nuclear fusion reactor, \n" +
            "small enough to fit in the palm of a human hand. It has a small red button on it,  \n" +
            "which states 'Power On'. You decide not to click it due to how rusty it looks.",
        on_look_around: "",
        requirement: "none",
        items: ["fusion reactor", "key fragment"],
        taken: [false, false]
    },
    { // index 6
        name: "The Black Hole Room",
        description: "You turn the key, and gently push open the door. You are met again with a harsh" +
            "white light. There is a single pedestal in the centre of the room. However, there is " +
            "nothing within the glass. A 'BEEP' emits from your rucksack, and you pull out" +
            "the source; the dark matter capsule. A message is being displayed on the " +
            "screen: 'DARK MATTER NEARBY - PRESS HERE TO" +
            "COLLECT'. You press the button, the glass pedestal crashes and - silence." +
            "The collector is also much heavier now. Another prompt shows up on the screen:" +
            "'PRESS HERE TO CONCENTRATE'. You press again, and instantaneously," +
            "a small black ball appears in the middle of the capsule. " ,
        on_look_around: "To the far side of the room, there is another door with a sign next to it, stating: 'DO NOT ENTER'. Directly " +
            "adjacent, there is an armour stand, and upon it was what can only be described as the most boring suit of armour" +
            "you have ever seen. It was grey and dull and boring, however seemingly solidly built.",
        items: ["concentrated dark matter", "boring armour"],
        taken: [false, false]
    },
    { // index 7
        name: "The Do Not Enter Room",
        description: "You enter the room. You are met with silence, then... a distant humming. " +
            "You walk down the corridor, handgun out, then reach a clearing. In the center " +
            "of the room, there is a small cube on the floor.",
        on_look_around: "You approach. It begins to shake," +
        "then a hatch opens on it. A small being, made purely of blue light-or so it seemed-" +
                "popped out. It looks closely at you. Then it quadroupled in size, screeched, and " +
            "charged at you. It leaps, and bites onto your arm. With your other hand, you grab" +
            "your gun from the holster and shoot it, once to the head. Instantly, the blue light " +
            "dies down. You glimpse at the box. It begins to hum again. You run. Once back through the door," +
            "you break the handle. You won't be going back in there again.",
        requirement: "in the black hole room",
        items: []
    },
    { // index 8
        name: "The Mirror Room",
        description: "You descend down the old ladder, which can hardly hold your weight, as it \n" +
            "creaks so loudly. Once fully descended, a light switches on, and all you can see\n" +
            "is a big mirror. You take a glimpse of yourself, and remember everything.\n",
        requirement: "a set of armour",
        items: []
    },
    {
            }

]

















