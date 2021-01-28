const dateHTML = document.getElementById('date');

const setDate = () => {
    const currentDate = new Date().toString().split(' ');
    const day = currentDate[2];
    const month = currentDate[1];
    const time = currentDate[4].slice(0, currentDate[4].length - 3);

    dateHTML.innerText = `${day} ${month} ${time}`;
}

setDate();
setInterval(setDate, 1000);