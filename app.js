/* ====================
        VARIABLES
   ==================== */
var degrees = 6;
var secHand;
var minHand;
var hourHand;

/* ====================
        FUNCIONES
======================= */

function digitalClock() {
    let digitalTime = document.getElementById("digitalTime");
    let date = new Date();
    let secs = date.getSeconds();
    let mins = date.getMinutes();
    let hours = date.getHours();
    let day_night = 'PM';

    if (hours > 12) {
        day_night = 'PM';
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    digitalTime.textContent = hours + ":" + mins + ":" + secs + " " + day_night;
}
/* =====================
    EVENTO PRINCIPAL
========================*/
function DOMLoaded() {
    setInterval(digitalClock, 1000);
}

/* =====================
    LLAMADA PRINCIPAL
======================== */
document.addEventListener('DOMContentLoaded', DOMLoaded);