const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll(".tab-content-item")


function selectItem(e) {
  removeBorder();
  this.classList.add('tab-border');
  console.log("clicked")
}

// remove all bottom border from all tab item
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border')
  })
}
//listen tab click function

tabItems.forEach(item => item.addEventListener('click', selectItem))
