let list=[]
for(let i=2;i<30;i++){
 list.push(Array.from(document.querySelectorAll(`table tr.unique-${i}`)))
};
let input = document.querySelector(".inp input");input.addEventListener('input',(e) => {
	let val=e.target.value.toLowerCase();
	list.forEach((element) => {
			if(element.some((f) => f.innerHTML.toLowerCase().search(val) != -1)){
				element.forEach(k => k.style.display="table-row")
			} else {
				element.forEach(k => k.style.display="none")
			}
	});
})