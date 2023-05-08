// alert("hello-------");
let cl=console.log;
const SignInForm=document.getElementById("SignInForm")
const email =document.getElementById("email");
const password =document.getElementById("password");

let emailFromDb = 'Lubna@shaikh.com';
let passFromDB = 'Lubnashaikh';


// let db=[
//     {email : "Lubna@shaikh.com",password:"Lubnashaikh"},
//     {email : "Lubna@shaikh.com",password:"Lubnashaikh"},
//     {email : "Lubna@shaikh.com",password:"Lubnashaikh"},
//     {email : "Lubna@shaikh.com",password:"Lubnashaikh"},
// ]
const onSignInHandler =(eve)=>{
    eve.preventDefault();
    //cl(`Sign In !!!`)
    let emailval = email.value;
    let passwordval= password.value;
    if(emailval === emailFromDb && passwordval === passFromDB){
        //alert(`Sign In Successfully`)
        Swal.fire({
           // position: 'top-end',
            icon: 'success',
            title: 'Sign In Successfull',
            showConfirmButton: false,
            timer: 3000
          })
        SignInForm.reset()
        return true;
    }else{
       // alert(`Invalid Username or Password`);
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Username or Password',
        timer :3000,
        //position:'top-start'     
      })
        SignInForm.reset()
        return false;
    }
    
}



SignInForm.addEventListener("submit",onSignInHandler)