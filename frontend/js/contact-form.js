document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    var name = document.getElementById("form-name").value
    var email = document.getElementById("form-email").value
    var message = document.getElementById("form-message").value
  })
