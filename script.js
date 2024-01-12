
function setAlarm() {
    //to print the time which i selecton the web 
    const wakeup = document.getElementById("wakeup").value;
    const lunch = document.getElementById("lunch").value;
    const nap = document.getElementById("nap").value;
    const dinner = document.getElementById("dinner").value;

    document.getElementById("spanWakeup").innerHTML = wakeup;
    document.getElementById("spanLunch").innerHTML = lunch;
    document.getElementById("spanNap").innerHTML = nap;
    document.getElementById("spanNight").innerHTML = dinner;

    const btn=document.getElementById("btn");
    btn.innerHTML="Party Time"

}
//to get time on the webpage
function clock() {
    const hours = document.getElementById("hour");
    const minuts = document.getElementById("minut");
    const seconds = document.getElementById("second");
    let time = new Date();

    // to change image according to time
    const hour1 = time.getHours();
    const rtext = document.getElementById("rtext");
    const image = document.getElementById("image");
    const ltext = document.getElementById("ltext");
    switch (true) {
        case hour1 >= 10 && hour1 < 12:
            rtext.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
            image.setAttribute("src","morning.jpg");
            ltext.innerHTML="GOOD MORNING!! WAKE UP !!";
            break;
        case hour1 >=12 && hour1 < 16:
            rtext.innerHTML = "LET'S HAVE SOME LUNCH !!";
            image.setAttribute("src","food.png");
            ltext.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
            break;
        case hour1 >= 16 && hour1 < 20:
            rtext.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            image.setAttribute("src","evening.jpg");
            ltext.innerHTML="GOOD EVENING !!";
            break;
        // case hour1 >= 20 && hour1 < 18:
        //     rtext.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        //     image.setAttribute("src","night.jpg")
        //     break;

        default:
            rtext.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
            image.setAttribute("src","night.jpg");
            ltext.innerHTML="GOOD NIGHT !!";
            break;
    }


    //for AM , PM and 12 hour timing 
    const ampm = document.getElementById("ampm");

    if (hour1 > 12) {
        hours.innerText = time.getHours()-12 + "\n" + "Hours";
        ampm.innerHTML = "PM";
    }
    else {
        hours.innerText = time.getHours() + "\n" + "Hours";
        ampm.innerHTML = "AM";
    }
    minuts.innerText = time.getMinutes() + "\n" + "Minuts";
    seconds.innerText = time.getSeconds() + "\n" + "sec";


}
clock();
setInterval(clock, 1000);