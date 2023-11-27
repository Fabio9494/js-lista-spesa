let list_doc = document.getElementById("shopping_list");
let list = ["farina","acqua","sale","lievito","olio","pomodoro","mozzarella","basilico"];
let i=0;

while(i<list.length){
    let li=document.createElement("li");
    li.innerHTML="<h3>"+list[i]+"<h3>";
    list_doc.appendChild(li);
    i++;
}