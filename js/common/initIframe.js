"use strict";

function initIframe(video_url) {
  var iframeContainer = document.getElementById('video-iframe');
  iframeContainer.innerHTML = "<iframe width=\"853\" height=\"480\" src=\"".concat(video_url, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
}