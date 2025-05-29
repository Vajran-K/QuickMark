let myTab = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myTab.push(inputEl.value)
    inputEl.value = ""
    renderTabs()
})

function renderTabs(){
    let listItems = ""

    for(let i = 0 ; i < myTab.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${myTab[i]}'>
                    ${myTab[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

