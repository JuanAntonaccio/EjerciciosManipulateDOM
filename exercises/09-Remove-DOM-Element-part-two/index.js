let list = document.querySelector("#parentLi");
let childs = list.childNodes;  
//element.parentNode.removeChild(element);
childs.removeChild(childs.childNodes[2]);
