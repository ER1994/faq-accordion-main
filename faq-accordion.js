const dl = document.getElementById('faq-accordion')
const faqAccordionBtn = dl.querySelectorAll('.faq-accordion-btn')

function closeBtn (btn) {
    const dd = dl.querySelector(`dd[aria-labelledby = "${btn.id}"]`)
    dd.hidden = true
    btn.setAttribute('aria-expanded', 'false')
    const img = btn.querySelector('img')
    img.src = './assets/images/icon-plus.svg'
}

function openBtn (btn) {
    const dd = dl.querySelector(`dd[aria-labelledby = "${btn.id}"]`)
    dd.hidden = false
    btn.setAttribute('aria-expanded', 'true')
    const img = btn.querySelector('img')
    img.src = './assets/images/icon-minus.svg'
}

function toggleAccordion(e) {
    const currentBtn = e.currentTarget
    faqAccordionBtn.forEach( btn => {
        if (btn.id === currentBtn.id) {
            openBtn(btn)
        } else {
            closeBtn(btn)
        }
    })
}


faqAccordionBtn.forEach( btn => closeBtn(btn))

faqAccordionBtn.forEach( btn => {
    btn.addEventListener('click', (e) => toggleAccordion(e))
})