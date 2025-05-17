export class HoroscopeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.input.addEventListener("input", (e) => {
      const dateStr = e.target.value;
      const valid = /^\d{2}-\d{2}-\d{4}$/.test(dateStr);
      this.view.setButtonEnabled(valid);
    });

    this.view.button.addEventListener("click", (e) => {
      e.preventDefault();
      const dateStr = this.view.input.value;
      const message = this.model.getHoroscopeByDate(dateStr);

      this.view.setButtonEnabled(false);
      this.view.showMessage(message);

      setTimeout(() => {
        this.view.hideMessage();
        this.view.setButtonEnabled(true);
        this.view.resetForm();
      }, 15000);
    });
  }
}
