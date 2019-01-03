function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  let lis = document
    .getElementById(app)
    .querySelectorAll('div')
  for (let i = 0; i < lis.lenght; i++) {
    let contaier = lis[i]
    while (lis.getElementsByClassName('target') == null) {
      
    }
  }
}
