function createDescs() {
    const descCtn = document.getElementById('tbl-desc-ctn')

    DATA.forEach(data => {
				const sec = document.createElement('div')
				sec.className = 'desc-div'

				data.tableDataList.forEach(tableData => {
						const descDev = document.createElement('ul')
						descDev.className = 'desc-col'

						tableData.descriptions.forEach(desc => {
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

						if(tableData.aside) {
								const li = `
									<li class="desc-aside-li">
										<span class="desc-aside">${tableData.aside}</span>
									</li>
								`
								descDev.innerHTML += li
						}

						sec.appendChild(descDev)
				})

				descCtn.appendChild(sec)
    })
}
