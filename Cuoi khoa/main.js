

function sdt() {
    document.getElementById('addsdt').style.display="block";
    document.getElementById('open-sdt').style.display="none";
    document.getElementById('cancel-sdt').style.display="block";
}

function huysdt() {
    document.getElementById('cancel-sdt').style.display="none";
    document.getElementById('open-sdt').style.display="block";
    document.getElementById('addsdt').style.display="none";
}
function changeName(){
    document.getElementById('changeName').style.display="none";
    document.getElementById('cancelChangeName').style.display="block";
    document.getElementById('doi-ten').style.display="block" 
}
function cancelChangeName(){
    document.getElementById('changeName').style.display="block";
    document.getElementById('cancelChangeName').style.display="none";
    document.getElementById('doi-ten').style.display="none"
    
}

let products = {


    data: [
        
    ]
}
const dataUsers =JSON.parse(localStorage.getItem('dataUser'))
if (localUser == null){
    localStorage.setItem('dataLogin', JSON.stringify(dataLogin));

}
const SignIn=()=>{
    let email = document.querySelector('.input1').value;
    let pass = document.querySelector('.input3').value;

}
if( email==''|| pass==''){
    alert('vui lòng nhập đầy đủ thông tin')
}
else{
        for(let Users of dataUsers){
            if(email==Users.email && pass == Users.pass){
                localStorage.setItem('IdUser',Users.id);
                alert('đăng nhập thành công')
                window.location.href='profile.html';
                return;
            }
        }
        alert('Đăng nhập thất bại')
}
const signUp = () => {
    let emil = document.querySelector('.input1').value;
    let pss = document.querySelector('.input9').value;
    let name = document.querySelector('input8').value;
    let cpass = document.querySelector('input10').value;
    if (emil==''|| pss==''||name==''||cpass==''){
        alert('Vui lòng nhập đầy đủ thông tin')
    }
    else{
        let UserNew={
            emil,
            pss,
            name,
            id: dataUsers.length+1
        }
        dataUsers.push(UserNew);
        localStorage.setItem("dataUsers", JSON.stringify(dataUsers))
    }
}
