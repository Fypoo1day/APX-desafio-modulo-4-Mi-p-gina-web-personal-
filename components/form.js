function contactComponent(el) {
  const headerEl = document.createElement("div");
  headerEl.classList.add("form__container");

  headerEl.innerHTML = `

  <h2 class="form__title">Escribime</h2>

<form class="form__contact">
  <label>
    <h3 class="form__label-title">NOMBRE</h3>
    <input name="name" class="form__input" type="text" required />
  </label>
  <label>
    <h3 class="form__label-title">EMAIL</h3>
    <input name="email" class="form__input" type="text" required />
  </label>
  <label>
    <h3 class="form__label-title">Mensaje</h3>
    <textarea
      name="message"
      class="form__textarea form__input"
      required
    ></textarea>
  </label>
  <button class="form__btn">Enviar</button>
</form>
    `;

  const formEl = headerEl.querySelector(".form__contact");
  el.appendChild(headerEl);
  sendForm(formEl);
}

function sendForm(formEl) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    const message = `
          User: ${obj.name} <br> <br>
          Email: ${obj.email} <br> <br>
          Message: ${obj.message}
        `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        to: "ancopp71@gmail.com",

        message: message,
      }),
    }).then(() => {
      alert(
        "Mensaje enviado. Gracias, " +
          obj.name +
          " por cominucarte! Responderé a la brevedad :)."
      );
    });
  });
}
