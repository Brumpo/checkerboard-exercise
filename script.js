// document.addEventListener('DOMContentLoaded', function () {
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

//   var numbertiles=81;
//   for (let i=0;i<numbertiles;i++){
//     let tile = document.createElement('div');
//     tile.style.width = '11.1%';
//     tile.style.float = 'left';
//     tile.style.paddingBottom= '11.1%';
//     var letters = '0123456789ABCDEF';      Randomcolors
//     var randcolor = '#';
//     for (let i = 0; i < 6; i++) {
//       randcolor += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(randcolor)
//     tile.style.backgroundColor= ''+randcolor;
//     document.body.appendChild(tile);
//   }
// })
// var numbertiles=81;
//   for (let i=0;i<numbertiles;i++){
//     let tile = document.createElement('div');
//     tile.style.width = '11.1%';
//     tile.style.float = 'left';
//     tile.style.paddingBottom= '11.1%';
//     var startcolor= randomcolor();
//     var endcolor= randomcolor();
// //     console.log(randcolor)
//     tile.style.backgroundImage= `linear-gradient(45deg, ${startcolor}, ${endcolor})`;
//     console.log(tile.style.backgroundImage);
//     document.body.appendChild(tile);
//   }
// })
  var numbertiles=81;
  for (let i=0;i<numbertiles;i++){
    let tile = document.createElement('div');
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom= '11.1%';

    var randcolor= randomcolor();
//     console.log(randcolor)
    tile.style.backgroundColor=''+randcolor;
    document.body.appendChild(tile);
  }
  document.addEventListener('DOMContentLoaded', function (){
    let jamz=document.createElement('audio');
    jamz.src='Heartbeats.mp3';
    jamz.autoplay='1';
    jamz.display='0';
    document.body.appendChild(jamz)
    let tile = document.getElementsByTagName('div');
    for(let i=0;i<tile.length;i++){
      window.setInterval(function(){
        tile[i].style.backgroundColor= ''+randomcolor() ? ''+randomcolor() : ''+randomcolor();
      },1417)
    }
  })


function randomcolor(){
  var letters = '0123456789ABCDEF';
  var randcolor = '#';
  for (let i = 0; i < 6; i++) {
    randcolor += letters[Math.floor(Math.random() * 16)];
  }
  return randcolor;
}//changes
