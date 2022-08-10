let red = document.querySelector(".red")
let yellow = document.querySelector(".yelow")
let green = document.querySelector(".green")

let num = 15;

red.textContent = num
red.classList.add("res")

let timered =  setInterval(() => {
  num--
  red.textContent = num
},1000)


setTimeout(()=>{
  clearInterval(timered)
  num = 15;
  red.classList.remove("res")
  yellow.classList.add("yel")
  yellow.textContent = num


  let timeyel =  setInterval(() => {
    num--
    yellow.textContent = num
  },1000)

  setTimeout(()=>{
    clearInterval(timeyel)
    num = 15;
    yellow.classList.remove("yel")
    green.classList.add("gre")
    green.textContent = num


    let timegreen =  setInterval(() => {
      num--
      green.textContent = num
    },1000)

    setTimeout(()=>{
      clearInterval(timegreen)
      num = 15;
      green.classList.remove("gre")
      window.location.reload();
    },15000)
    
  },15000)

}, 15000)