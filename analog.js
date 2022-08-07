setInterval(setClock, 1000);
const hrHand = document.getElementById('hour'),
 minHand = document.getElementById('minute'),
 secHand = document.getElementById('second');
 
function setClock(){
    const currentDate = new Date()
    const sec = currentDate.getSeconds() * 6;
    const min = currentDate.getMinutes() * 6;
    const hr = currentDate.getHours() * 30;

    secHand.style.transform = `rotate(${sec}deg)`;
    minHand.style.transform = `rotate(${min}deg)`;
    hrHand.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
}
setClock();


