const OrderSubmit = document.getElementById("OrderSubmit");
const counter = document.querySelector(".counter");

OrderSubmit.onsubmit = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);

  let { date, time } = Object.fromEntries(formData.entries());
  if (!date) {
    return alert("invalid date");
  }
  if (!time) {
    return alert("invalid time");
  }

  setInterval(() => {
    let startTime = new Date();
    let endTime = new Date(`${date} ${time}`);

    let timeDiff = Math.floor(
      Math.abs(endTime.getTime() - startTime.getTime())
    );
    let totalSec = Math.floor(timeDiff / 1000);
    let totalMin = Math.floor(totalSec / 60);
    let totalHours = Math.floor(totalMin / 60);
    let totalDays = Math.floor(totalHours / 24);

    let hours = totalHours - totalDays * 24;
    let min = totalMin - totalDays * 24 * 60 - hours * 60;
    let sec = totalSec - totalDays * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
    counter.innerHTML = `${totalDays < 10 ? "0" + totalDays : totalDays} : ${
      hours < 10 ? "0" + hours : hours
    } : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  });
};
