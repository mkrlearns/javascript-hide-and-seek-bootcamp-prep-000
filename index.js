function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranked_list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranked_list.length; i++){
    ranked_list[i].innerHTML = parseInt((i + n))
  }
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}