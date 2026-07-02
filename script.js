function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error")
    if(email==="admin@1234" && password==="1234")
    {
        localStorage.setItem("isloggedin","true");
        localStorage.setItem("user",email)
        window.location.href="home.html"
    }
    else
    {
        error.innerHTML="Invalid Email Or Password";
    }
}
function togglepassword(){
    let passwordInput=document.getElementById("password");
    if (passwordInput.type==="password"){
         passwordInput.type="text"
    }
    else{
        passwordInput.type="password"
    }
}