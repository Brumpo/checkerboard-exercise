document.addEventListener('DOMContentLoaded', function () {
  var numbertiles=81;
  for (var i=0;i<numbertiles;i++){
    let tile = document.createElement('div');
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom= '11.1%';
    if(i%2===0){
    tile.style.backgroundColor='red';
    }else{
    tile.style.backgroundColor='black';
    }
    document.body.appendChild(tile);
  }
})
