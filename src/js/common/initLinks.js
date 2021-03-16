function setLinks(linksData) {
    const iconUrl = {
        facebook: "./img/ico-fb.png",
        twitter:  "./img/ico-tw.png",
        linkedin: "./img/ico-in.png",
        youtube:  "./img/ico-yt.png",
    }

    const div1 = document.getElementById('links-ctnr-1')
    linksData.footerLinks.div1.forEach(data => {
        div1.append(createLinkTag(data))
    })
    // console.log(div1)

    const div2 = document.getElementById('links-ctnr-2')
    linksData.footerLinks.div2.forEach(data => {
        div2.append(createLinkTag(data))
    })
    // console.log(div2)

    function createLinkTag(data) {
        const link = document.createElement('a')
        link.href = data.url || '#'
        link.classList.add('links__link')

        const img = document.createElement('img')
        img.src = iconUrl[
            iconUrl.hasOwnProperty(data.icon) ? 
            data.icon : '' 
        ]
        img.alt = `icon-${data.icon}`

        link.appendChild(img)
        return link
    }
}

function setLogoLinks(linkData) {
    const k2Logo = document.getElementById('k2-logo-link')
    k2Logo.href = linkData.mainLogo || '#'

    const portoLogo = document.getElementById('porto-logo-link')
    portoLogo.href = linkData.portoSeguroLogo || '#'

    const requestLink = document.getElementById('request-link')
    requestLink.href = linkData.solicitarProposta || '#'
}