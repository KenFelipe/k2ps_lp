function setLinks(linksData) {
    const iconUrl = {
        facebook: "./img/ico-fb.png",
        twitter:  "./img/ico-tw.png",
        linkedin: "./img/ico-in.png",
        youtube:  "./img/ico-yt.png",
    }

    const div1Description = document.getElementById('link-description-1')
    div1Description.innerHTML = 
        linksData.footerLinks.div1.title.replace(' ', '&nbsp;')

    const div1 = document.getElementById('links-ctnr-1')
    linksData.footerLinks.div1.linkdata.forEach(data => {
        div1.append(createLinkTag(data))
    })

    const div2Description = document.getElementById('link-description-2')
    div2Description.innerHTML = 
        linksData.footerLinks.div2.title.replace(' ', '&nbsp;')

    const div2 = document.getElementById('links-ctnr-2')
    linksData.footerLinks.div2.linkdata.forEach(data => {
        div2.append(createLinkTag(data))
    })

    function createLinkTag(data) {
        const link = document.createElement('a')
        link.href = data.url || '#'
        link.target = '_blank'
        link.classList.add('links__link')

        const img = document.createElement('img')
        img.src = iconUrl.hasOwnProperty(data.icon) ? 
            iconUrl[data.icon] : data.icon

        img.alt = `icon-${data.icon}`

        link.appendChild(img)
        return link
    }
}

function setLogoLinks(linkData) {
    const k2Logo = document.getElementById('k2-logo-link')
    k2Logo.href = linkData.mainLogo || '#'
    k2Logo.target = '_blank'

    const portoLogo = document.getElementById('porto-logo-link')
    portoLogo.href = linkData.portoSeguroLogo || '#'

    const requestLink = document.getElementById('request-link')
    requestLink.href = linkData.solicitarProposta || '#'
}