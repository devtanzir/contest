const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

setInterval(() => {
  let time = new Date();
  let Current_sec = time.getSeconds();
  let Current_min = time.getMinutes();
  let Current_hour = time.getHours();

  sec.style.transform = `rotate(${getOrgTime(60, Current_sec)}deg)`;
  min.style.transform = `rotate(${getOrgTime(60, Current_min)}deg)`;
  hour.style.transform = `rotate(${getOrgTime(12, Current_hour)}deg)`;
}, 1000);
