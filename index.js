let myTab = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myTab") )

if(leadsFromLocalStorage){
    myTab = leadsFromLocalStorage
    renderTabs(myTab)
}

function renderTabs(Tabs){
    let listItems = ""

    for(let i = 0 ; i < Tabs.length; i++){
        listItems += `
            <li>
                ->
                <a target='_blank' href='${Tabs[i]}'>
                    ${Tabs[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function() {
    localStorage.removeItem("myTab")
    myTab = []
    renderTabs(myTab)
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myTab.push(tabs[0].url)
        localStorage.setItem("myTab",JSON.stringify(myTab))
        renderTabs(myTab)
    })
})

inputBtn.addEventListener("click", function(){
    myTab.push(inputEl.value)
    localStorage.setItem("myTab",JSON.stringify(myTab))
    inputEl.value = ""
    renderTabs(myTab)

})


