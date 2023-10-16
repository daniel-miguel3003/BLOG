document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    listMessages()

    event.preventDefault()

    var name = document.getElementById("form-name").value
    var email = document.getElementById("form-email").value
    var message = document.getElementById("form-message").value
  })

function createMessage(name, email, message) {}

async function listMessages() {
  await axios
    .get("0.0.0.0:3000/list-messages")
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
