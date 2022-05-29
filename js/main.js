let userName
document.querySelector('#paper').addEventListener('click',paper)
document.querySelector('#scissors').addEventListener('click',scissors)
document.querySelector('#rock').addEventListener('click',rock)
  

async function paper(){
userName = 'paper'
document.querySelector('#choice').innerText= userName
  document.querySelector('#clickMe').addEventListener('click', makeReq)
}

async function scissors(){
  userName = 'scissors'
  document.querySelector('#choice').innerText= userName
  document.querySelector('#clickMe').addEventListener('click', makeReq)
}

async function rock(){
  userName = 'rock'
  document.querySelector('#choice').innerText= userName
  document.querySelector('#clickMe').addEventListener('click', makeReq)
}

async function makeReq(){

const res = await fetch(`/api?student=${userName}`)
const data = await res.json()
console.log(data)
document.querySelector("#personName").textContent = data.flip
document.querySelector('#bot').textContent = data.bot

}
