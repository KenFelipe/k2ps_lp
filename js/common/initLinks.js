"use strict";

function setLinks(linksData) {
  var iconUrl = {
    facebook: "./img/ico-fb.png",
    twitter: "./img/ico-tw.png",
    linkedin: "./img/ico-in.png",
    youtube: "./img/ico-yt.png"
  };
  var div1Description = document.getElementById('link-description-1');
  div1Description.innerHTML = linksData.footerLinks.div1.title.replace(' ', '&nbsp;');
  var div1 = document.getElementById('links-ctnr-1');
  linksData.footerLinks.div1.linkdata.forEach(function (data) {
    div1.append(createLinkTag(data));
  }); // console.log(div1)

  var div2Description = document.getElementById('link-description-2');
  div2Description.innerHTML = linksData.footerLinks.div2.title.replace(' ', '&nbsp;');
  var div2 = document.getElementById('links-ctnr-2');
  linksData.footerLinks.div2.linkdata.forEach(function (data) {
    div2.append(createLinkTag(data));
  }); // console.log(div2)

  function createLinkTag(data) {
    var link = document.createElement('a');
    link.href = data.url || '#';
    link.classList.add('links__link');
    var img = document.createElement('img');
    img.src = iconUrl[iconUrl.hasOwnProperty(data.icon) ? data.icon : ''];
    img.alt = "icon-".concat(data.icon);
    link.appendChild(img);
    return link;
  }
}

function setLogoLinks(linkData) {
  var k2Logo = document.getElementById('k2-logo-link');
  k2Logo.href = linkData.mainLogo || '#';
  var portoLogo = document.getElementById('porto-logo-link');
  portoLogo.href = linkData.portoSeguroLogo || '#';
  var requestLink = document.getElementById('request-link');
  requestLink.href = linkData.solicitarProposta || '#';
}