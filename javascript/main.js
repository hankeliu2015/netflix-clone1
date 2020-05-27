const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll(".tab-content-item")


function selectItem(e) {
  removeBorder();
  removeShow();
  // let currentId = parseInt(e.currentTarget.id.slice(-1)) - 1;
  let currentId = parseInt(this.id.slice(-1)) - 1;

  this.classList.add('tab-border');
  tabContentItems[currentId].classList.add("show")
}

// remove all bottom border from all tab item
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border')
  })
}

// remove show class from all tab contents
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show')
  })
}


//listen tab click function

tabItems.forEach(item => item.addEventListener('click', selectItem))
