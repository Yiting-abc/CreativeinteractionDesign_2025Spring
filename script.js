document.write("")

function sayHello(){
  var response = prompt("What is you name");
  alert("Hello " + response + ", Welcome to our game!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(150,20078));

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize ="25px";
  x.style.color ="tan";
}
  const card=document.querySelector('.card')
  card.addEventListener('mousedown',function(e){
    //鼠标位置距离卡片左边
    let x=e.pageX-card.offsetLeft
    let y=e.pageY-card.offsetTop
    document.addEventListener('mousedown',moveTo)
    function moveTo(e1){
      let x1=e1.pageX-x+'px'
      let y1=e1.pageY-y+'px'
      //设置卡片位置
      card.style.left=x1
      card.style.top=y1
    }
    document.addEventListener('mouseup',()=>{
      document.removeEventListener('mousemove',moveTo)
    })
  })

  //sayHello();
