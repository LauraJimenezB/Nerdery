const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role = "tab"]');
//const tabPanels = tabs.querySelectorAll('[role = "tabpanel"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role = "tabpanel"]'));

function handleTabClick (e) {
    tabPanels.forEach(panel => {
        panel.hidden = true;
    })
    tabBtns.forEach(btn=>{
        btn.ariaSelected = false;
        //btn.setAttribute('aria-selected', false);
    })
    e.currentTarget.ariaSelected = true; // mark the clicked tab as selected
    const {id} = e.currentTarget;
    /* const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false; */
    const tabPanel = tabPanels.find(panel=> panel.getAttribute('aria-labelledby')===id) //return true
    tabPanel.hidden = false;
}

tabBtns.forEach(btn=> btn.addEventListener('click', handleTabClick));