let locations = [
    {//index 0
        name: "Tutorial",
        description: "You are about to enter the tutorial. Type 'skip' into the box at any time to skip. If you would like to continue with the tutorial, type 'continue' into the box.",
        on_continue: "Wow, somebody actually using the tutorial! For the first command, type into the box 'go north'",
        on_go_north: "You enter a room, which looks strangely familiar. Oh yes, it's where you work. Now type 'look around'",
        on_look_around: "You notice a water bottle on the floor. Try typing 'take water bottle'",
        on_take: "Acquired: water bottle. Finally, enter 'drop water bottle'",
        on_drop: "Dropped: water bottle. Ah, you might want to clean that up... One final command you will have to use - a lot - is '?', so that you can have a helping hand. Anyways, I'll let you get to it. Best of luck! Press enter (or any sequence of characters followed with an enter) to start!",
        items: [],
        taken: [],
        hint: ""


    },
    {//index 1
        name: "Courtyard",
        description: "Slowly, you open your eyes. You are in the middle of a courtyard, enclosed between four ancient dusty walls." +
            "You look around. Everything around you is decayed and rotten, as if it had only died very recently. The entire courtyard stinks of " +
            "decaying flesh. Upon closer inspection, you notice that the murky cobblestone underfoot has been cracked, like there had been a recent impact.",
        on_look_around: "Every weed, patch of grass \n" +
            "and vein of ivy is rotten and decaying, as if some foul, foreign object has only recently arrived in the vicinity.\n" +
            "The fragmented cobble is covered in lichen, as if the area had not been touched for a millennia,"+
            "You look up, and around."+
            "In each instance of north, east, south and west there is a small black door, all identical, other than the west room, which seems to have a lock on it."+
            "You look down, and notice a trapdoor, and for whatever reason, a shiver echoes across your back.",
        requirement: "none",
        items: [],
        taken: [],
        hint: "You can go: north, south, east, west or down. Available items: "

    },
    {//index 2
        name: "The Star Room",
        description:"You open the door, slowly. Inside, you are met with a small circular room. The ceiling\n" +
            "is peppered with stars, each one individulistic and yet equal. There is a small \n" +
            "brown door at the far end of the room, with a feeble looking lock on it. The label on the door reads 'The Crafting Room'." +
            "To the right, there is another door which leads to the Moon room.\n" +
            "You continue to inspect some of the constellations above you. Strangely, there is a feeling that you know what they are - however that feeling is very hazy...\n",
        requirement: "none",
        on_look_around: "You move to the far side of the room, and turn around. Instantly, you notice three out-of-place objects. A Spyglass. A Dark Matter Capsule." +
            " \nAnd small key fragment. You move to the metal desk and rummage through the contents of the drawer. Your hands brush away some paper" +
            ", and there sits a handgun, fully loaded.",
        items: ["handgun","spyglass", "key fragment"],
        taken: [false, false, false, false],
        hint: "You can go: crafting room, back or moon room. Available items: "



    },
    { // index 3
        name: "The Crafting Room",
        description: "You shoot out the lock with the handgun, the recoil of which is horrid and jolts " +
            " your arm. You continue down a very short passage until you reach a small room. " +
            " Inside, there is a large 3D printer, with trays to put the materials inside of. On top of which, there is a small manual. If it is in your inventory, you can type" +
            " 'read manual' to view the crafting recipes!" +
            " To craft anything, just enter 'craft' + the name of the item you want to craft whilst within this room",
        requirement: "You need a handgun to break through this door!",
        items: ["manual"],
        taken: [false],
        hint: "You can go: back. Available items: "
    },
    {// index 4
        name: "The Moon Room",
        description: "You open the door to the moon room. It is a large, square room, with eerily " +
            "modern walls for such an old building. You step inside, and a harsh white light " +
            "stuns you. After readjusting for another minute, you look up. There are at least a dozen pedestals, each with a pale, dusty stone" +
            "on display behind the thin sheen of glass. Each has a label, stating:" +
            "SPECIMEN FROM THE DARK SIDE OF THE MOON",

        on_look_around: "you are drawn towards the pedestal in the centre." +
            "The writing is hardly legible as it is clear an attempt has been made to" +
            "scratch it off." +
            "SP*CEM*N FR*M  *I**N" +
            "The rock here was a deep shade of black. You put your head closer." +
            "The rock is covered in pinpricks of pulsating, purple light",
        requirement: "none",
        items: ["moon rock", "titan rock", "key fragment"],
        taken: [false, false, false],
        hint: "You can go: back. Available items: "
    },
    { // index 5
        name: "The Sun Room",
        description: "You enter the Sun Room. Or more specifically, it entered you. Bright, scintillating colours attacked your every sense, \n" +
            "rendering you almost completely useless. Then, as quickly as the intense battery of light came, it disappeared.\n" +
            "You look up, confused, and notice hieroglyphs covering every side of the wall, each - upon closer inspection - a glowing, pulsating purple",
        on_look_around: "You approach a desk, which sitting in the dead centre, sits a small metal sphere. You reach out to grab it, however notice a small" +
            "label right next to it stating: fusion reactor - do not touch!",
        requirement: "none",
        items: ["fusion reactor", "key fragment"],
        taken: [false, false],
        hint: "You can go: back. Available items: "
    },
    { // index 6
        name: "The Black Hole Room",
        description: "You turn the key, and gently push open the door. You are met again with a harsh" +
            "white light. The room itself is very underwhelming. That being said, you feel an odd kind of presence in the room, whilst you cannot see anything.",
        on_look_around: "To the far side of the room, there is another door with a sign next to it, stating: 'DO NOT ENTER'. Directly " +
            "adjacent, there is an armour stand, and upon it was what can only be described as the most boring suit of armour" +
            "you have ever seen. It was grey and dull and boring, however seemingly solidly built.",
        items: ["armour", ],
        taken: [false, false],
        hint: "You can go: door or back. Available items: "
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
            "you break the handle. You won't be going back in there again. Suddenly, you notice something on your arm, and instinctively flick it off." +
            " You stare. It is the corpse of the light-dog. However, it can hardly be called a dog. Or a corpse. For the " +
            "dead body was actually made of - fabric. Ionic fabric, to be exact.",
        requirement: "in the black hole room",
        items: [],
        hint: ""
    },
    { // index 8
        name: "The Mirror Room",
        description: "You descend down the old ladder, which can hardly hold your weight, as it \n" +
            "creaks so loudly. Once fully descended, a light switches on, and all you can see\n" +
            "is a big mirror. You take a glimpse of yourself, and remember everything.\n",
        requirement: "",
        items: []
    },
    {
            }

]

















