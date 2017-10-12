document.addEventListener('DOMContentLoaded', function () {
//   var numbertiles=81;
//   for (var i=0;i<numbertiles;i++){
//     let tile = document.createElement('div');    Master
//     tile.style.width = '11.1%';
//     tile.style.float = 'left';
//     tile.style.paddingBottom= '11.1%';
//     if(i%2===0){
//     tile.style.backgroundColor='red';
//     }else{
//     tile.style.backgroundColor='black';
//     }
//     document.body.appendChild(tile);
//   }
//})

  var numbertiles=81;
  for (let i=0;i<numbertiles;i++){
    let tile = document.createElement('div');
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom= '11.1%';
    var letters = '0123456789ABCDEF';
    var randcolor = '#';
    for (let i = 0; i < 6; i++) {
      randcolor += letters[Math.floor(Math.random() * 16)];
    }
    console.log(randcolor)
    tile.style.backgroundColor= ''+randcolor;
    document.body.appendChild(tile);
  }
})
