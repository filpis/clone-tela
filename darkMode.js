 const btn = document.querySelector("#switch-shadow");

 btn.addEventListener("change", (e) => {
     document.body.classList.toggle("dark", e.target.checked);


 })