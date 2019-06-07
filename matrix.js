$(document).ready(function(){
  const nums = [0,1,0,1,0,1,0,1,0,1];
  const columns = ['1','2','3','4','5','6','7','8','9','10','11','12']
  let counter = 0;
  let height = 120;
  setInterval(function(){
    var node = document.createElement("p");
    var textNode = document.createTextNode(nums[Math.floor(Math.random() * 10)]);
    node.appendChild(textNode);
    var x = document.getElementById('matrix-column-' + columns[Math.floor((Math.random() * 12))])
    x.appendChild(node);
    counter += 1;
    if(counter > height){
      x.children[0].remove()
    }
  }, 10);
});
