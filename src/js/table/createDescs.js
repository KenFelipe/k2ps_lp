function createDescs() {
    const descCtn = document.getElementById('tbl-desc-ctn')

    DATA.forEach(data => {
        const descDev = document.createElement('ul')
        descDev.className = 'desc-col'

        data.descriptions.forEach(desc => {
						const li = `
							<li>
								<span class="desc-icon">
									<i 
										class="${desc.icon}"
										style="color: #008def;"
									></i>
								</span>
								<span class="desc-text">${desc.text}</span>
							</li>
						`
						descDev.innerHTML += li
        })

				if(data.aside) {
						const li = `
							<li class="desc-aside-li">
								<span class="desc-aside">${data.aside}</span>
							</li>
						`
						descDev.innerHTML += li
				}

        descCtn.appendChild(descDev)
    })
}
