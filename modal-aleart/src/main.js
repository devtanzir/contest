const modal_open_btn = document.getElementById("modal_open_btn");
const modal_close_btn = document.getElementById("modal_close_btn");
const modalContainer = document.querySelector(".modal-container");
const alertBody = document.querySelector(".alert");
modal_open_btn.onclick = (e) => {
  e.preventDefault();
  modalContainer.classList.add("modal-active");
};
modal_close_btn.onclick = () => {
  alertBody.classList.add("alert-active");
};
document.querySelector(".update-button").onclick = () => {
  modalContainer.classList.remove("modal-active");
};

modalContainer.onclick = (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.classList.remove("modal-active");
  }
};

const cancelButton = () => {
  alertBody.classList.remove("alert-active");
};
const discardButton = () => {
  alertBody.classList.remove("alert-active");
  modalContainer.classList.remove("modal-active");
};
