const containerNode = document.getElementById('fifteen')
const itemNodes = Array.from(containerNode.querySelectorAll('.item'))
const countItems = 16

if(itemNodes.length != 16){
  throw new Error(`Должно быть ровно ${countItems} элементов`)
}