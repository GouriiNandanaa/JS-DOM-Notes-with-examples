const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const dltbtn = document.querySelectorAll(".delete");
const filter = document.querySelector("#filter");


form.addEventListener("submit", addItem);
itemList.addEventListener("click",removeItem)
filter.addEventListener("keyup",filterItems)


function addItem(e) {
  e.preventDefault();
  const newListItem = document.createElement("li");

  const newItemContent = document.querySelector('#addForm input[type="text"]').value;
  document.querySelector('#addForm input[type="text"]').value="";

  newListItem.textContent = newItemContent;
  newListItem.className = "list-group-item";
  itemList.appendChild(newListItem)


//creaitng button for delete

    const dltbtn = document.createElement("button");
    dltbtn.className = "btn btn-danger btn-sm float-right delete";
    dltbtn.innerText = "X"
    newListItem.appendChild(dltbtn)
}



function removeItem(e){
    if(e.target.classList.contains("delete")){
        const parentNode = e.target.parentNode;
        parentNode.remove();

    }
}

function filterItems(e){
    const text = e.target.value.toLowerCase();
    console.log(text)

    const items = document.querySelectorAll(".list-group-item");
    items.forEach((item)=>{
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";

        }
        else
            item.style.display = "none";
    });
    
}