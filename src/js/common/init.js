/////////// init table and rangeBar ///////////
let DATA = []

fetch('./config/data.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        DATA = data
        // console.log('DATA: ', DATA)
        initTableAndRB()
    })
    .catch(error => console.log('Error:', error))



/////////// init iframe ///////////
fetch('./config/video_url.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        // console.log('video url: ', data.url)
        initIframe(data.url)
    })
    .catch(error => console.log('Error:', error))



/////////// init links ///////////
fetch('./config/links.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        // console.log('links: ', data)
        setLogoLinks(data)
        setLinks(data)
    })
    .catch(error => console.log('Error:', error))



/////////// init contact ///////////
fetch('./config/contact.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        // console.log('contact: ', data)
        setContact(data)
    })
    .catch(error => console.log('Error:', error))



/////////// init card ///////////
fetch('./config/prices_card.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        // console.log('prices: ', data)
        initCarousel(data)
    })
    .catch(error => console.log('Error:', error))
