const faqItems = document.querySelectorAll('.faq-header');
const questions = document.querySelectorAll('.question')


faqItems.forEach(item => {
    const quest = item.querySelector('.question')

    item.addEventListener('click', () => {
        if (!item.parentElement.classList.contains('open')) {

            removeActives(faqItems)
            questions.forEach(item => {
                item.classList.remove('active')
            })
            item.parentElement.classList.add('open')
            quest.classList.add('active')
        }
        else {
            quest.classList.remove('active')
            item.parentElement.classList.remove('open')
        }
    })
})

function removeActives(element) {

    element.forEach(item => {

        item.parentElement.classList.remove('open')
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const lastFaqItem = document.querySelector(".faq-item:last-of-type");
    if (lastFaqItem) {
        lastFaqItem.style.border = "none";
    }
});


