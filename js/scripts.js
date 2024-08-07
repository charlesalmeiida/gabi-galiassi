const buttonFaq = document.querySelectorAll(".js-button-faq")

buttonFaq.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active")
  })
})

