let button = document.querySelector(".footer__form-button");
let form = document.querySelector(".footer__join-form");

button.addEventListener("click", async function (event) {
  event.preventDefault();
  let fio = document.querySelector(".input-name").value;
  let email = document.querySelector(".input-email").value;
  let message = document.querySelector(".input-message").value;

  // console.log('Name', fio);
  // console.log("Email",email);
  // console.log("message", message);

  // https://89ae294b0168b677.mokky.dev/orders

  await fetch("https://89ae294b0168b677.mokky.dev/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
        name: fio,
        email: email,
        message: message
    })
  });

  form.reset()

  alert('Данные отправились')
});
