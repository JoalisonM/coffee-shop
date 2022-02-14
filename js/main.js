const Form = {
  resetFields() {
    document.getElementById("addItem").reset();
  },

  submit(event) {
    event.preventDefault();
  }
}