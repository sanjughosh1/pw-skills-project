function valedate(){
    let password = document.getElementById("password").value;
    let valedate_password = document.getElementById("valedate_password").value;
    // console.log(password,valedate_password)
    let massage = document.getElementById("massage");
    if(password != 0 && password == valedate_password){
        massage.textContent = "Password Matched. Password validation Successful." ;
        massage.style.color = '#31de85';
    }else{
        massage.textContent ="Password didn't match. Password validation unsuccessful";
        massage.style.color = 'red';
    }

}
