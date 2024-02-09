let addTask=document.querySelector('#add-task');
let inputTask=document.querySelector('#input-task');
let taskContainer=document.querySelector('#task-container');
addTask.addEventListener('click',function(){
	let task =document.createElement('div');
	task.classList.add('task');

	let li =document.createElement('li');
	li.innerText=`${inputTask.value}`;
	task.appendChild(li);

 let checkBtn=document.createElement("button");
 checkBtn.innerHTML='<i class="bi bi-check2"></i>';
 checkBtn.classList.add('check');
 task.appendChild(checkBtn);

 let deletBtn=document.createElement("button");
 deletBtn.innerHTML='<i class="bi bi-trash3"></i>';
 deletBtn.classList.add('delete');
 task.appendChild(deletBtn);

 if(inputTask.value === ""){
 	alert("please enter a task");
 }
 else{
 	taskContainer.appendChild(task);
 }
 inputTask.value="";
 checkBtn.addEventListener('click',function(){
 	checkBtn.parentElement.style.textDecoration="line-through"
 });
deletBtn.addEventListener('click',function(e){
	let target=e.target;
	target.parentElement.parentElement.remove();
}); 

});
