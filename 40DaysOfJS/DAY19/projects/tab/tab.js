console.log("Tab task");

const tabHeads = document.querySelector('.tab-headers');
const tabContents = document.querySelector('.tab-contents');

function switchToTab(tabNum) {

    if (!tabNum) return;

    document.querySelector(".tab.active").classList.remove('active');
    document.querySelector(".content.active").classList.remove('active');

    [...tabHeads.children].forEach((elem) => {
        
        if(elem.getAttribute("data-tab") == tabNum) {

            elem.classList.add("active");

            let tabEvent = new CustomEvent("tabChanged", {
                detail: { name : elem.innerText }
            })

            document.dispatchEvent(tabEvent)
        } else {
            
            elem.classList.remove("active")
        }
    });

    [...tabContents.children].forEach((elem) => {
        
        if(elem.getAttribute("data-tab") == tabNum) {

            elem.classList.add("active");

        } else {
            
            elem.classList.remove("active")
        }
    });
}

tabHeads.addEventListener("click", (e) => {
    
    if (!e.target.classList.contains("tab")) return;
    e.stopPropagation(); // optional for clarity

    switchToTab(e.target.getAttribute("data-tab"))
})

document.addEventListener("keydown", (e) => {
    if (e.key === "1") switchToTab(1);
    if (e.key === "2") switchToTab(2);
    if (e.key === "3") switchToTab(3);
    if (e.key === "Enter") {
        switchToTab(e.target.dataset.tab);
    }
});

document.addEventListener("tabChanged", (e) => {
    console.log(e.detail.name);
})