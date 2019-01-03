function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}
let nested = document.getElementById('nested')
function nestedTarget() {
  var done = nested.getElementByClassName('target');
  if (done) return done;
  node = nested.firstChild;
  while (!done) {
    done = nestedTarget();
    if (done) return done;
    node = nested.nextSibling;
  }
}
