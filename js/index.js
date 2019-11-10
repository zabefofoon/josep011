sec2.style.backgroundPosition = "50% ".concat(50 + (sec2.getBoundingClientRect().top) / 4, "%");
if(window.innerWidth<768)sec2.style.backgroundPosition = "50% ".concat(0 + (sec2.getBoundingClientRect().top) / 4, "%");
window.addEventListener("scroll",parallax)
function parallax(){
    var section = document.getElementsByTagName('section')
    var speed = 4
    if(window.innerWidth<768)speed=4
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
  if(we.getBoundingClientRect().top<lookpos*1.4){
    document.getElementById('we').play()
  }
  if(we.getBoundingClientRect().top>lookpos*2 || we.getBoundingClientRect().top<-lookpos*3){
    we.pause()
    we.currentTime = 0;
  }
  //레터링 타이밍
  if(letter.getBoundingClientRect().top<lookpos){
    letter.style.opacity = "1"
  }
  if(letter.getBoundingClientRect().top>lookpos){
    letter.style.opacity = "0"
  }
  if(window.innerWidth>768){
    if(b6Change.getBoundingClientRect().top<lookpos/10){
      letter2.style.opacity = "1"
    }
  }else {
    if(b6Change.getBoundingClientRect().top<lookpos/2){
      letter2.style.opacity = "1"
    }
  }

  if(b6Change.getBoundingClientRect().top>lookpos){
    letter2.style.opacity = "0"
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
  }
  if(letter3.getBoundingClientRect().top>lookpos){
    letter3.style.opacity = "0"
  }
}

window.addEventListener("scroll",scrollFade)
