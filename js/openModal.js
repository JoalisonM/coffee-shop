const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active-modal")
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active-modal")
  }
}