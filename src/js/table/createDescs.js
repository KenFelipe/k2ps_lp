function createDescs() {
    const descCtn = document.getElementById('tbl-desc-ctn')

    DATA.forEach(data => {
        const descDev = document.createElement('ul')
        descDev.className = 'desc-col'

				if(!data.descriptions) {
					return
				}
        data.descriptions.forEach(desc => {
						const li = `
							<li>
								<span class="desc-icon">
									<i 
										class="${desc.icon}"
										style="color: ${desc.color};"
									></i>
								</span>
								<span class="desc-text">${desc.text}</span>
							</li>
						`

						descDev.innerHTML += li
        })

        descCtn.appendChild(descDev)
    })
}
