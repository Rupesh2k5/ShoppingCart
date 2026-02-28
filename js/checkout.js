document.getElementById("form").onsubmit=e=>{
  e.preventDefault();
  localStorage.removeItem("cart");
  location="success.html";
};
