function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  let lis = document
    .getElementById(app)
    .querySelectorAll('div')
}
