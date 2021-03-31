let title = document.title
let titleLength = document.title.length
let splitted = []
let splittedBase = title.split``
let splittedEnd = [...Array(titleLength-1).fill('⠀'), title[0]]
let goingIn = true
let currIndex = 0
setInterval(() => {
  if(goingIn){
    splitted.push(splittedBase[currIndex++])
  }else{
    splitted.unshift('⠀')
    splitted.pop()
  }
  document.title = splitted.join``
  if(splittedBase.join`` === splitted.join``){
    goingIn = false
  }
  if(splittedEnd.join`` === splitted.join``){
    splitted = []
    currIndex = 0
    goingIn = true
  }
},300)