'use strict'
let elForm = document.getElementById('Devform')
let elList = document.getElementById('list')

let newDevelopers =[]


function Dev(name, codingSchool, Language){
  this.name = name
  this.codingSchool = codingSchool
  this.Language = Language

}
if(localStorage.local){
  let parseDev = localStorage.getItem('local')
  newDevelopers = JSON.parse(parseDev)
} else {
  

  let developer1 = new Dev ('Kesete', 'CodePartners', 'javaScript')
  let developer2 = new Dev ('Simon', 'General Assembly','Java')
  let developer3 = new Dev ('Henna','Udacity', 'javaScript')
  newDevelopers.push(developer1,developer2,developer3)
}
console.log(newDevelopers)
let elDevNewName
let eltitleName = document.createElement('ol')
elList.appendChild(eltitleName)
eltitleName.innerText = 'Developer Name'
//let eSchool = document.createComment('ol')
//elList.appendChild(eSchool)
//eSchool.innerText ='Name of School'
let eltitlelang = document.createElement('ol')
elList.appendChild(eltitlelang)
eltitlelang.innerText = 'language'
let eltitleSch = document.createElement('ol')
elList.appendChild(eltitleSch)
eltitleSch.innerText = 'Codding School'

Dev.prototype.newNameOfDev = function(){
  for(let i=0; i<newDevelopers.length; i++){
    elDevNewName = document.createElement('li')
    eltitleName.appendChild(elDevNewName)
    let elDevSchool = document.createElement('li')
    eltitleSch.appendChild(elDevSchool)
    let elDevLang = document.createElement('li')
    eltitlelang.appendChild(elDevLang)
    elDevNewName.innerText = newDevelopers[i].name
    elDevSchool.innerText = newDevelopers[i].codingSchool
    elDevLang.innerText = newDevelopers[i].Language
  }
  
}
localStorage.setItem('local', JSON.stringify(newDevelopers))

let elnameOfStudnet1 = elForm.nameOfStudent
let elProgLanguage1 = elForm.Language
let elSchool1 = elForm.schoolName

elForm.addEventListener('submit', function(event){
  event.preventDefault()
  let DevLog = new Dev (elnameOfStudnet1.value, elProgLanguage1.value, elSchool1.value)
  //newDevelopers =[]
  newDevelopers.push(DevLog)
  DevLog.newNameOfDev()
})
