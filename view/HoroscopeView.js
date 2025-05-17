export class HoroscopeView {
  constructor() {
    this.input = document.getElementById("birthdate");
    this.button = document.getElementById("consult-button");
    this.messageBox = document.getElementById("horoscope-message");
  }

  setButtonEnabled(state) {
    this.button.disabled = !state;
  }

  showMessage(message) {
    this.messageBox.textContent = message;
    this.messageBox.classList.remove("hidden");
    this.messageBox.classList.add("visible");
  }

  hideMessage() {
    this.messageBox.classList.remove("visible");
    this.messageBox.classList.add("hidden");
  }

  resetForm() {
    this.input.value = "";
  }
}
