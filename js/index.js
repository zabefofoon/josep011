function vp(){
  return new Promise((resolve, reject)=>{
    we.addEventListener("canplaythrough",resolve)
  })
}
vp().then(()=>{
  console.log("hello")
  window.addEventListener("scroll",function(e){
    if(we.getBoundingClientRect().top<window.innerHeight/2*1.4){
      document.getElementById('we').play()
    }
    if(we.getBoundingClientRect().top>window.innerHeight/2*2 ){
      we.pause()
      we.currentTime = 0;
    }
  })

})

sec2.style.backgroundPosition = "50% ".concat(50 + (sec2.getBoundingClientRect().top) / 4, "%");
if(window.innerWidth<768)sec2.style.backgroundPosition = "50% ".concat(0 + (sec2.getBoundingClientRect().top) / 4, "%");
window.addEventListener("scroll",parallax)
function parallax(){
    var section = document.getElementsByTagName('section')
    var speed = 4
    if(window.innerWidth<768)speed=5
    for(var i=1;i<section.length;i++){
      if(i%2==0){
        eval("sec" + i).style.backgroundPosition = "50% ".concat(50 + (eval("sec" + i).getBoundingClientRect().top) / speed, "%");
        if(window.innerWidth<768)eval("sec" + i).style.backgroundPosition = "50% ".concat(0 + (eval("sec" + i).getBoundingClientRect().top) / speed, "%");
      }
    }
}

var sec11Row = sec11.getElementsByClassName('row')
sec11Row[2].style.transform = "translateY(0)"
sec11Row[2].style.opacity = "1"
function scrollFade(){
  var sec3Row = sec3.getElementsByClassName('row')
  var sec5Row = sec5.getElementsByClassName('row')
  var sec7Row = sec7.getElementsByClassName('row')
  var sec9Row = sec9.getElementsByClassName('row')
  var sec11Row = sec11.getElementsByClassName('row')
  var secArr = [sec3Row,sec5Row,sec7Row,sec9Row,sec11Row]
  var lookpos = window.innerHeight/2

  for(var o=0;o<secArr.length;o++){
    for(var i=0;i<secArr[o].length;i++){
      if(secArr[o][i].getBoundingClientRect().top<lookpos*1.5){
        secArr[o][i].style.transform = "translateY(0)"
        secArr[o][i].style.opacity = "1"
      }
    }
  }

  for(var o=0;o<secArr.length;o++){
    for(var i=0;i<secArr[o].length;i++){
      if(secArr[o][i].getBoundingClientRect().top>lookpos*1.5){
        secArr[o][i].style.transform = "translateY(100px)"
        secArr[o][i].style.opacity = "0"
      }
    }
  }

  sec11Row[2].style.transform = "translateY(0)"
  sec11Row[2].style.opacity = "1"

  //레터링 타이밍
  if(letter.getBoundingClientRect().top<lookpos){
    letter.style.opacity = "1"
    letter.style.transform = "translateX(0%)"
  }
  if(letter.getBoundingClientRect().top>lookpos){
    letter.style.opacity = "0"
    letter.style.transform = "translateX(10%)"
  }
  if(window.innerWidth>768){
    if(b6Change.getBoundingClientRect().top<lookpos/10){
      letter2.style.opacity = "1"
      letter2.style.transform = "translate(-50%, 0%)"
    }
  }else {
    if(b6Change.getBoundingClientRect().top<lookpos/2){
      letter2.style.opacity = "1"
      letter2.style.transform = "translate(-50%, 0%)"
    }
  }

  if(b6Change.getBoundingClientRect().top>lookpos){
    letter2.style.opacity = "0"
    letter2.style.transform = "translate(-50%, 50%)"
  }


  if(rightLetter.getBoundingClientRect().top<lookpos*1.2){
    rightLetter.style.opacity = "1"
    leftLetter.style.opacity = "1"
  }
  if(rightLetter.getBoundingClientRect().top>lookpos){
    rightLetter.style.opacity = "0"
    leftLetter.style.opacity = "0"
  }


  if(letter3.getBoundingClientRect().top<lookpos*1.5){
    letter3.style.opacity = "1"
    letter3.style.transform = "translateX(0%)"
  }
  if(letter3.getBoundingClientRect().top>lookpos){
    letter3.style.opacity = "0"
    letter3.style.transform = "translateX(30%)"
  }
}

window.addEventListener("scroll",scrollFade)

function sticker(){
  var lookpos = window.innerHeight/2
  var sticker = sec9.getElementsByClassName('sticker')
  window.addEventListener("scroll",function(e){
    for(var i=0;i<sticker.length;i++){
      if(sticker[i].getBoundingClientRect().top<lookpos){
        sticker[i].style.opacity = "1"
        sticker[i].style.transform = "rotateY(0deg)"
      }else if(sticker[i].getBoundingClientRect().top>lookpos*2){
        sticker[i].style.opacity = "0"
        sticker[i].style.transform = "rotateY(60deg)"
      }
    }
  })
}

sticker()

var textwrap = orderChange.getElementsByClassName('textwrap')
if(window.innerWidth<768){
  textwrap[0].innerHTML = '<img src="./imgs/jpg/i1.jpg" alt="">'
  textwrap[1].innerHTML = '</div><h3>Easypass Amante Card Wallet Eve Edition</h3><p>Blue<br/>Magenta'
}

if(window.innerWidth<768){
  i4Change.setAttribute("src","./imgs/jpg/i4mobile.jpg")
}
if(window.innerWidth<768){
  b6Change.setAttribute("src","./imgs/jpg/b6mobile.jpg")
}
