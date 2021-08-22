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
								<i 
									class="${desc.icon}"
									style="color: ${desc.color};"
								></i>
								<span>${desc.text}</span>
							</li>
						`

						descDev.innerHTML += li
        })

        descCtn.appendChild(descDev)
    })
}
