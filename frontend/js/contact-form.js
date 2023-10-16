import axios from "axios"

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    var name = document.getElementById("form-name").value
    var email = document.getElementById("form-email").value
    var message = document.getElementById("form-message").value

    listMessages()
  })

function createMessage(name, email, message) {}

async function listMessages() {
  await axios
    .get("localhost:3000/list-messages")
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
