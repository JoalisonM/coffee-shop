const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("coffee:menu")) || []
  },

  set(newItem) {
    localStorage.setItem("coffee:menu", JSON.stringify(newItem))
  }
};

const Form = {
  resetFields() {
    document.getElementById("addItem").reset();
  },

  submit(event) {
    event.preventDefault();
  }
};
