function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}
let nested = document.getElementById('nested')
function nestedTarget() {
  var done = func(node);
  if (done) return true;
  if ('shadowRoot' in node && node.shadowRoot) {
    done = nestedTarget(node.shadowRoot, func);
    if (done) return true;
  }
  node = node.firstChild;
  while (node) {
    done = nestedTarget();
    if (done) return true;
    node = node.nextSibling;
  }
}
