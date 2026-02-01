const faqAccordionBtn = document.querySelectorAll('.faq-accordion-btn')


function toggleAccordion(e) {
    // const description = document.querySelector(`dd[aria-labelledby="${e.currentTarget.id}"]`)
    const dds = document.querySelectorAll(`dd`)
    dds.forEach( dd => {
        if (dd.getAttribute('aria-labelledby') === e.currentTarget.id ) {
            dd.toggleAttribute('hidden')
        } else {
            dd.hidden = true
        }
    })
}

faqAccordionBtn.forEach( btn => {
    btn.addEventListener('click', (e) => toggleAccordion(e))
})