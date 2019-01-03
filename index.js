function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  var done = func(node);
  if (done) return node;
  node = node.firstChild;
  while (node) {
    done = nestedTarget();
    if (done) return node;
    node = node.nextSibling;
  }
}
