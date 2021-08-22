function createDescs() {
    const descCtn = document.getElementById('tbl-desc-ctn')

    DATA.forEach(data => {
        const descDev = document.createElement('ul')
        descDev.className = 'desc-col'

				if(!data.descriptions) {
					return
				}
        data.descriptions.forEach(desc => {
            const li = document.createElement('li')
						li.innerText = desc.text

            descDev.appendChild(li)

        })

        descCtn.appendChild(descDev)
    })
}
