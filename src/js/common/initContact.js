function setContact(contactData) {
    const tel = document.getElementById('contact-tel')
    tel.innerHTML = `Tel / Cel: &nbsp;${contactData.tel}`

    const adress = document.getElementById('contact-adress')
    adress.innerHTML = contactData.adress

    const email = document.getElementById('contact-email')
    email.href = `mailto:${contactData.email}`
    email.innerHTML = contactData.email
}