const entry = document.querySelector(".wrap1");

const numb = "93-531-08-98";
const password = "udevs1234";

entry.addEventListener("click", (e) => {
  if (e.target.closest(".responses__button1")) {
    const login = document.querySelector(".sign__in");
    const login2 = document.querySelector(".responses");

    login.style.display = "block";
    login2.style.display = "block";
    entry.style.display = "none";
  }
  if (e.target.closest(".responses__button2")) {
    const registr = document.querySelector(".registr");
    registr.style.display = "block";
    entry.style.display = "none";
  }
});

const sign_in = document.querySelector(".sign__in");
sign_in.addEventListener("click", (e) => {
  const numb_inp = document.querySelector(".number__inp");
  const password_inp = document.querySelector(".password__inp");
  const togglePassword = document.querySelector(".main__passshow");
  if (e.target.closest(".main__button")) {
    if (numb_inp.value == "") {
      console.log("salom");
      alert("Enter Number Fisrt!!!");
    } else if (password_inp.value == "") {
      alert("Enter Password!!!");
    }
    if(numb_inp.value==numb && password_inp.value==password){
      const wraper=document.querySelector('.wraper')
      wraper.style.display='flex'
      sign_in.style.display='none'
    }
  }
  if(e.target.closest('.main__passshow')){
    togglePassword.addEventListener("click", ()=> {
      if (password_inp.type === "password") {
        password_inp.type = "text";
      } else {
        password_inp.type = "password";
      }
    });
  }
});
