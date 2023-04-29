const entry = document.querySelector(".wrap1");
entry.addEventListener("click", (e) => {
  if (e.target.closest(".responses__button1")) {
    const login = document.querySelector(".sign__in");
    const login2 = document.querySelector(".responses");

    login.style.display = "block";
    login2.style.display = "block";
    entry.style.display = "none";

    console.log(login);
  }
  if (e.target.closest(".responses__button2")) {
    const registr = document.querySelector(".registr");

    registr.style.display = "block";
    entry.style.display = "none";
    registr.preventDefault()();
    console.log(registr);
  }
});
