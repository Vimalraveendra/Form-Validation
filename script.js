const formEl = document.getElementById('form');
const submitBtnEl = document.getElementById('submit')
const demoParaEl = document.getElementById('demo')
const emailEl = document.getElementById('email')
const phoneEl = document.getElementById('phone')

function validate(){
    let text;
    if(formEl.name.value===""){
      text="Name cannot be empty";
      demoParaEl.textContent = text;
      formEl.name.focus();

    }
    if(formEl.email.value===""){
        text="Email cannot be empty";
        demoParaEl.textContent = text;
        formEl.email.focus();
    
      }
      pos = emailEl.value.indexOf("@")
      dotPos = emailEl.value.indexOf('.')
 if(pos<1 || dotPos<1 || (dotPos-pos<2)){
    text = "Please enter valid email ID";
    demoParaEl.textContent = text;
    formEl.email.focus();

}
if(phoneEl.value ==="" || isNaN(phoneEl.value) || phoneEl.value .length!==10){
    text = "Please enter a valid 10-digit phone number";
    demoParaEl.textContent = text;
    phoneEl.focus();
   
}
if(formEl.subject.value==="0"){
    text ="Please select the subject"
    demoParaEl.textContent = text;
    phoneEl.focus();
    r
}

}
submitBtnEl.addEventListener('click',validate)