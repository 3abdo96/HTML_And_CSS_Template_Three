let myDiv = document.querySelector(".mega-menu");
let arr = document.querySelector("li.menu");

// Mega Menu 
arr.onclick = function (e) { 
        myDiv.classList.toggle("active");
}

// scrollDown in the Page
let goDown = document.querySelector(".landing .go-down");
goDown.onclick = function () {
    window.scrollTo({
        top: document.lastChild.lastChild.children[16].offsetTop+500,
        behavior: "smooth",
    });
};

// Progress when Scroll and Top Button and increase stats
let skillsDiv = document.querySelector(".services");
let spans = document.querySelectorAll(".our-skills .progress span"); 
let top1 = document.querySelector(".top");

let videosDiv = document.querySelector(".videos");
let stats = document.querySelectorAll(".stats .container .box .number");
let started = false;

top1.onclick = function () { 
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
window.onscroll = function () {
    if (window.scrollY >= skillsDiv.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.prog;
        })
    }
    if (window.scrollY >= 400) {
        top1.style.display = "block"
    }
    else {
        top1.style.display = "none"
    }
    if (window.scrollY >= videosDiv.offsetTop) {
        if (!started) {
            stats.forEach((stat) => { 
                startCount(stat);
            })
            }
                started = true;
        }
    }

function startCount(element) { 
    let goal = element.dataset.stat;
    let counter = setInterval(function () {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(counter);
        }
    }, 1000 / goal);
}

// CountDown Function
let countDown = new Date("Jan 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
    let time = new Date().getTime();
    let timeDiff = countDown - time;

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.querySelector(".events .count-down .calender .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .count-down .calender .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .count-down .calender .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .count-down .calender .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (timeDiff < 0) { 
        clearInterval(counter);
    }

}, 1000);
