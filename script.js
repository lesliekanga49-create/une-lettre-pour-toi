function ouvrirLettre() {
  const lettre = document.getElementById("lettre");
  lettre.classList.toggle("visible");

  const bouton = document.querySelector("button");

  if (lettre.classList.contains("visible")) {
    bouton.textContent = "Refermer ma lettre ❤️";
  } else {
    bouton.textContent = "Ouvre ta lettre 💌";
  }
}