/////////// init table and rangeBar ///////////
const DATA = {}

fetch('./config/data.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        Object.assign(DATA, data)
        console.log('data: ', DATA)

        initTableAndRB()
    })
    .catch(error => console.log('Error:', error))



/////////// init iframe ///////////
fetch('./config/video_url.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        // initIframe(data.url)

        console.log('video url: ', data.url)
    })
    .catch(error => console.log('Error:', error))



/////////// init links ///////////
fetch('./config/links.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        console.log('links: ', data)

        setLogoLinks(data)
        setLinks(data)
    })



/////////// init contact ///////////
fetch('./config/contact.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        console.log('contact: ', data)

        setContact(data)
    })