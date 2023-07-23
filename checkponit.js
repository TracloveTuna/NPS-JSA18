<<<<<<< HEAD
let menu = ["rau xào", "thịt luộc","gà rán"];
let input= prompt("mày chỉ có thể viết c, r, u, d")



do{
if (localStorage.menu){
menu.localStorage.
}
else{
    localStorage.setItem("menu", JSON.stringify(menu));
}



    if (input=="c") create(menu)
    else if (input=="r") read(menu)
    else if (input=="u") updatemenu(menu)
    else if (input=="d") deletemenu(menu)
    else{
        alert("nhập sai rồi nên bye");
        break
    }
}
while(input=="c" || input=="r" || input=="u" || input=="d");
function create() {
type=prompt("mời bạn nhập vào thứ muốn thêm vào menu")
let menu=JSON.parse(localStorage.getItem("menu"));
menu.push(type.prompt.value)
}
function read(){
    alert(menu.localStorage.value)

}
function updatemenu() { 
    

}
function deletemenu(){

}







=======
let menu = ["rau xào", "thịt luộc","gà rán"];
let input= prompt("mày chỉ có thể viết c, r, u, d")



do{
if (localStorage.menu){
menu.localStorage.
}
else{
    localStorage.setItem("menu", JSON.stringify(menu));
}



    if (input=="c") create(menu)
    else if (input=="r") read(menu)
    else if (input=="u") updatemenu(menu)
    else if (input=="d") deletemenu(menu)
    else{
        alert("nhập sai rồi nên bye");
        break
    }
}
while(input=="c" || input=="r" || input=="u" || input=="d");
function create() {
type=prompt("mời bạn nhập vào thứ muốn thêm vào menu")
let menu=JSON.parse(localStorage.getItem("menu"));
menu.push(type.prompt.value)
}
function read(){
    alert(menu.localStorage.value)

}
function updatemenu() { 
    

}
function deletemenu(){

}







>>>>>>> 8c9634ae4db5682541b14ffd733b62b51b762512
