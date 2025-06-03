function scrollImages(distance){
   const track = document.getElementById("imageTrack");
   track.scrollBy({
    left:distance,
    behavior:'smooth'
   })
}

function scrollImage(distance){
    const image = document.getElementById("imageTrack-1");
    image.scrollBy({
        left:distance,
        behavior:"smooth"
    })
}

/*form validation */
document.getElementById('code-input').style.display = 'none';

document.querySelector('.btn-code').addEventListener('click', function () {
  const codeInput = document.getElementById('code-input');
  codeInput.style.display = codeInput.style.display === 'none' ? 'block' : 'none';
});

function formValidation(){
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    if(emailInput === '' || passwordInput === ''){
        alert('Please fill in both Email/Mobile Number and Password.')
        return false
    }

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = /^[0-9]{10,15}$/;

    const isEmail = email.test(emailInput);
    const isPhone = phone.test(passwordInput);

    if(!isEmail && !isPhone){
        alert("Please enter a valid email or mobile number.")
        return false
    }

    document.getElementById("sign-in-form").reset();
    alert("Form submited Successfully!")
    return false;


}

/* document.querySelector(".btn-code").addEventListener("click",function(){
const codeInput = document.getElementById("code-input");

if(codeInput.style.display === 'none'){
    codeInput.style.display = 'block';
    codeInput.focus();
}else{
    codeInput.style.display ="none"
}
}) */