let form=document.querySelector("form");
let button=document.querySelector("#button");
let div1=document.querySelector('#name1');
let div2=document.querySelector('#email1');
let div3=document.querySelector('#pass1');

let ch=/(^[^0-9])+([a-zA-Z0-9]{10,15})(\@[a-z]{5})\.([a-z]{3})$/i;
let chpass=/^[0-9a-zA-Z]{8,10}/i;
let chname=/^[^0-9]+[a-zA-Z]$/i;
form.name.addEventListener("keyup",()=>{
    if(chname.test(form.name.value)){
        form.name.classList.add("is-valid");
        form.name.classList.remove("is-invalid");
        button.removeAttribute("disabled");
        div1.textContent=form.name.value;

    }
    else{
        form.name.classList.remove("is-valid");
        form.name.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
        div1.textContent="Your name is invalid"
    }


});       
 
form.email.addEventListener("keyup",()=>{
    if(ch.test(form.email.value)){
        form.email.classList.add("is-valid");
        form.email.classList.remove("is-invalid");
        button.removeAttribute("disabled");
        div2.textContent=form.email.value;

    }
    else{
        form.email.classList.remove("is-valid");
        form.email.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
        div2.textContent="Your email is invalid"
    }


});       
 form.password.addEventListener("keyup",()=>{ 
    if(chpass.test(form.password.value)){
        form.password.classList.add("is-valid");
        form.password.classList.remove("is-invalid");
        button.removeAttribute("disabled");
        div3.textContent=form.password.value;


    }
    else{
        form.password.classList.remove("is-valid");
        form.password.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
        div3.textContent="Your password is invalid";


    }


});
