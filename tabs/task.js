const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

tab.forEach(function (tabElement) {
    let indexOfTab;
    let indexOfContent;
    tabElement.addEventListener('click', function () {
        tab.forEach(function (tabElement) {
            tabElement.classList.remove('tab_active')

        })

        tabContent.forEach(function (contentElement) {
            contentElement.classList.remove('tab__content_active')

            indexOfTab = tab.indexOf(tabElement)
            indexOfContent = tabContent.indexOf(contentElement)

            if(indexOfTab === indexOfContent) {
                contentElement.classList.add('tab__content_active')
                tabElement.classList.add('tab_active')
            }
        })


    })

})