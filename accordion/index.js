const list = document.getElementsByClassName('item')
console.log(list)
for (const item of list) {
  item.addEventListener('click', () => {
    Array.prototype.forEach.call(list, (item => {
      item.className = 'item'
    }))
    item.className = 'item active'
  })
}