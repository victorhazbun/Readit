
// Track items with array
exports.toReadItems = JSON.parse(localStorage.getItem('toReadItems')) || []

// Save items to localstorage
exports.saveItems = () => {
  localStorage.setItem('toReadItems', JSON.stringify(this.toReadItems))
}


// Add new item
exports.addItem = (item) => {

  // Hide 'no items' message
  $('#no-items').hide()

  // New item html
  let itemHtml = `<a class="panel-block read-item">
                  <figure class="image has-shadow is-64x64 thumb">
                    <img src="${item.screenshot}">
                  </figure>
                  <h2 class="title is-4 column">${item.title}</h2>
                  </a>`

  // Append to read-list
  $('#read-list').append(itemHtml)
}