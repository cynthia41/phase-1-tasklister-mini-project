document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target['new-task-description'].value)
    
  })
});
function buildToDo(task) {
 let p = document.createElement('p')
 let btn = document.createElement('button')
 btn.addEventListener('click', handleDelete)
 btn.textContent= 't'
 p.textContent=task
 p.appendChild(btn)
 console.log(p)
 document.querySelector('#tasks').appendChild(p)

}
function handleDelete (e){
  e.target.parentNode.remove()
}