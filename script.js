let inputField = document.getElementById("inputField")
let btn = document.querySelector("button")
let listContainer = document.getElementById("list")
let alert = document.querySelector("p")

function addTask() {
   if(inputField.value == ''){
        alert.innerHTML = "write something bish"
   }
   else{ const li = document.createElement("li")
        li.innerHTML = inputField.value 
        listContainer.appendChild(li)
        let cross = document.createElement("img");
        cross.src = "https://cdn-icons-png.flaticon.com/512/59/59836.png"
        li.appendChild(cross)
        alert.innerHTML = "";
    }
    inputField.value = "";
    saveData()
}

listContainer.addEventListener('click', function(e){
   if(e.target.tagName == "LI") {
     e.target.classList.toggle("done")
     saveData()
   }
   else if(e.target.tagName == "IMG"){
    listContainer.removeChild(e.target.parentNode)
    saveData()
}
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function updateData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

updateData()