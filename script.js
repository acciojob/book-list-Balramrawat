
let btn=document.getElementById("submit")

btn.addEventListener("click",(e)=>{
	e.preventDefault();

	let title=document.getElementById("title").value
	let author=document.getElementById("author").value
	let isbn=document.getElementById("isbn").value

	if(title===""||author===""||isbn===""){
		alert("please fill details......")
		return;
	}

	let list=document.getElementById("book-list")
	let tr=document.createElement("tr")

		tr.innerHTML=`<td>${title}</td>
						<td>${author}</td>
						<td>${isbn}</td>
						<td><button class="delete" > x </button></td>`
	list.appendChild(tr)

	document.getElementById("title").value=""
    document.getElementById("author").value=""
    document.getElementById("isbn").value=""
})

let list2=document.getElementById("book-list")
list2.addEventListener("click",(e)=>{

	// e.preventDefault()
	if(e.target.classList.contains("delete")){
		e.target.parentElement.parentElement.remove()
	}
	
})










