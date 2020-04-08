const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
   card.addEventListener("click", () => {
      const pageId = card.getAttribute("id")
      modalOverlay.classList.add("active")
      modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
   })
}

document.querySelector('.close-modal').addEventListener("click", () => {
   modalOverlay.classList.remove("active")
   modal.classList.remove("maximize")
})

document.querySelector('.maximize-modal').addEventListener("click", () => {
   if (modal.classList.contains("maximize")){
      modal.classList.remove("maximize")
   } else {
      modal.classList.add("maximize")
   }
})