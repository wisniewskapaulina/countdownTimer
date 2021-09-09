setInterval(() => {

    const endTime = new Date("2021-12-31 23:59:59").getTime();
    const nowTime = new Date().getTime();
    const time = Math.floor((endTime - nowTime) / 1000);
    console.log(time);

    const days = Math.floor(time / 86400);
    document.getElementById("days").textContent = days;

    const hours = Math.floor((time / 3600) % 24);
    document.getElementById("hours").textContent = hours;

    const minutes = Math.floor((time / 60) % 60);
    document.getElementById("minutes").textContent = minutes;

    const seconds = Math.floor(time % 60);
    document.getElementById("seconds").textContent = seconds;
}, 1000);


