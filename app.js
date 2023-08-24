
var bodyvar = document.body
var consumption = document.getElementById("consumption")
console.log(consumption)
var climate = document.getElementById("climate")
console.log(climate)
var save = document.getElementById("save")
console.log(save)
var button = document.getElementById("button")
console.log(button)
var resources = document.getElementById("resources")
console.log(resources)
var people = document.getElementById("people")
console.log(people)
var frame = document.getElementById("frame")
console.log(frame)
consumption.onclick=()=>{
  // backgound
  
  bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
  bodyvar.style.backgroundSize="100% 100%"

  consumption.style.background="green"
  climate.style.background="transparent"
  people.style.background="transparent"
  resources.style.background="transparent"

  save.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."


}
climate.onclick=()=>{
  // background
  bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
  bodyvar.style.backgroundSize="100% 100%"
  climate.style.background="blue"
  save.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
  consumption.style.background="transparent"
  people.style.background="transparent"
  resources.style.background="transparent"

}
resources.onclick=()=>{
  bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
  bodyvar.style.backgroundSize="100% 100%"
  resources.style.background="orange"
  resources.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
  consumption.style.background="transparent"
  climate.style.background="transparent"
  people.style.background="transparent"

}
people.onclick=()=>{
  bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
  bodyvar.style.backgroundSize="100% 100%"
  people.style.background="Red"
  people.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
  consumption.style.background="transparent"
  climate.style.background="transparent"
  resources.style.background="transparent"
}