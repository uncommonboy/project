const entry = document.querySelector(".wrap1");
const sign_in = document.querySelector(".sign__in");
const registr = document.querySelector(".registr");

const numb = "93-531-08-98";
const password = "asilbek1234";

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

sign_in.addEventListener("click", (e) => {
  const numb_inp = document.querySelector(".number__inp");
  const password_inp = document.querySelector(".password__inp");
  const togglePassword = document.querySelector(".main__passshow");
  const cancel = document.querySelector(".main__cancel");
  if (e.target.closest(".main__button")) {
    if (numb_inp.value == "") {
      console.log("salom");
      alert("Enter Number Fisrt!!!");
    } else if (password_inp.value == "") {
      alert("Enter Password!!!");
    }
    if (numb_inp.value == numb && password_inp.value == password) {
      const wraper = document.querySelector(".wraper");
      wraper.style.display = "flex";
      sign_in.style.display = "none";
    } else if (numb_inp.value != numb) {
      alert("Number Is Incorrect ");
    } else if (password_inp.value != password) {
      alert("Password Is Incorrect ");
    }
  }
  if (e.target.closest(".main__passshow")) {
    togglePassword.addEventListener("click", () => {
      if (password_inp.type === "password") {
        password_inp.type = "text";
      } else {
        password_inp.type = "password";
      }
    });
  }
  if (e.target.closest(".main__cancel")) {
    cancel.addEventListener("click", () => {
      console.log("salom");
      sign_in.style.display = "none";
      entry.style.display = "block ";
    });
  }
});

registr.addEventListener("click", (e) => {
  const numb_inp2 = document.querySelector(".number__inp2");
  const email_inp2 = document.querySelector(".email__inp2");
  const password_inp2 = document.querySelector(".parol__inp2");
  const password_inp3 = document.querySelector(".parol__inp3");

if (e.target.closest(".main__button")) {
    if (numb_inp2.value == "") {
      alert("Enter Number First!!!");
    } else if (email_inp2.value == "") {
      alert("Enter Your E-mail!!!");
    } else if (password_inp2.value == "") {
      alert("Enter Password!!!");
    } else if (password_inp3.value == "") {
      alert("Reenter Password!!!");
    }else if(password_inp2.value!=password_inp3.value){
      alert('Passwords Are Not The Same')
    }

  }
});
