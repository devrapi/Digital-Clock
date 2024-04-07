// DIGITAL CLOCK PROGRAM

function updateClock(){

    const time = new Date();
    const meridian = time.getHours() >= 12 ? 'PM' : 'AM';
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');
    const timeString = `${hour}:${minute}:${second}:${meridian}`;
    document.getElementById('Clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);


