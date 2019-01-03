function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}
let nested = document.getElementById('nested')
function nestedTarget() {
  var done = func(nested.getElementByClassName('target'));
  if (done) return node;
  node = node.firstChild;
  while (node) {
    done = nestedTarget();
    if (done) return node;
    node = node.nextSibling;
  }
}
