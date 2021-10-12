const perro = document.getElementById("perro");
const eiji = document.getElementById("eiji");
eiji.style.display = "none";

perro.onmouseover = () => {
  perro.style.display = "none";
  eiji.style.display = "block";
};

perro.onmouseleave = () => {
    perro.style.display = "block";
    eiji.style.display = "none";
  
}
