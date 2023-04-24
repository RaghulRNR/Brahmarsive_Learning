function display(){
  var x='rahul'
  for(var i=0;i<5;i++)
  {
  console.log(i)
  }
  console.log(i)// in var this line will not  show up the error
}

display()

function displayLet(){
  for(let i=0;i<5;i++)
  {
    console.log(i)
  }
 // console.log(i)// in let this line will show up the error
}

//var--> block scope
//let-->block scope
//const -->block scope cannot be reassigned

let obj={
  name:'rahul',
  rollno:123,
  walk:function (){ return 'Walk method'},
  talk(){ return 'Talk Method' },
  swim(){ return this}

}

console.log(obj.name)
console.log(obj['rollno'])
console.log(obj.walk())
console.log(obj.talk())
console.log(obj.swim())

let walk=obj.walk
console.log(walk)
console.log(walk())


console.log(walk())


const square=number=>number*number
const add=(num1,num2)=>num1+num2
console.log(square(4))
console.log(add(2,3))

const max=(num1,num2)=>{if(num1>num2){return num1} else{ return num2}}
console.log(max(20,130))

let arr=['red','green','black']
const newarr=arr.map(color => `<li>${color}</li>`)
console.log(newarr)

const {name ,rollno:no}=obj
console.log(name)
console.log(no)

const firstarr=[10,20,30]
const secondarr=[40,50,60]

let oldCombined=firstarr.concat(secondarr)
console.log(oldCombined)

let newcombined=[...firstarr,70,...secondarr]
console.log(newcombined)

const firstobj={name:'rahul'}
const secondobj={lastname:'Rnr'}

let combinedObj={...firstobj,...secondobj,location:'Sathy'}
console.log(combinedObj)