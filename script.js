function displayNameLength(e) {
    e.preventDefault()
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value

    document.getElementById("display").innerText =
    (firstName.length + lastName.length)
}

const formVariable =
document.getElementById("formId")

formVariable.addEventListener("submit", displayNameLength)

