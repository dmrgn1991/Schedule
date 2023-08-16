const quotes = [
    "All work and no play make Jack a dull boy.",
    "The truth is out there.",
    "I want to believe.",
    "Follow the white rabbit.",
    "Wu-Tang Clan ain't nuthin ta $%&# with!",
    "See you Space Cowboy...",
    "You're gonna carry that weight.",
    "Tunnel Snakes Rule!",
    "Wolfie's just fine.",
    "The cake is a lie...",
    "Forget it Jake. It's Chinatown.",
    "Everything's coming up Milhouse!",
    "Keep it simple, stupid!",
    "Don't repeat yourself.",
    "Problem exists between keyboard and chair.",
    "PC Load Letter.",
    "Big Brother is watching.",
    "Kept you waiting, huh?",
    "You're pretty good.",
    "You're tearing me apart, Lisa!",
    "Oh, hi Mark!",
    "Go with the flow.",
    "Brawndo's got what plants crave!",
    "But why male models?",
    "We're gonna need a bigger boat.",
    "Remember, remember the 5th of November.",
    "What, me worry?",
    "Zed's dead, baby. Zed's dead.",
    "My name is Mud."


]

window.addEventListener('load', function () {

    const prof_button = document.getElementById("prof_header");
    const prof_links = document.querySelectorAll(".prof_link");
    const admin_button = document.getElementById("admin_header");
    const admin_links = document.querySelectorAll(".admin_link");
    const mohawk_button = document.getElementById("mohawk_header");
    const mohawk_links = document.querySelectorAll(".mohawk_link")
    const tutorial_button = document.getElementById("tutorial_header");
    const tutorial_links = document.querySelectorAll(".tutorial_link")
    const width_break = 1000;
    const typed_text = document.getElementById("typed")


    prof_button.addEventListener("click", function () {
        if (screen.width < width_break) {
            prof_links.forEach(element => {
                element.classList.toggle("force_show");
            })
        }
    })

    admin_button.addEventListener("click", function () {
        if (screen.width < width_break) {
            admin_links.forEach(element => {
                element.classList.toggle("force_show");
            })
        }
    })

    mohawk_button.addEventListener("click", function () {
        if (screen.width < width_break) {
            mohawk_links.forEach(element => {
                element.classList.toggle("force_show");
            })
        }
    })

    tutorial_button.addEventListener("click", function () {
        if (screen.width < width_break) {
            tutorial_links.forEach(element => {
                element.classList.toggle("force_show");
            })
        }
    });
    typed_text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
    typed_text.classList.toggle("typing");
    

});

