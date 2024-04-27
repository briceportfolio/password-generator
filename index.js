const dataLowercase = "aazertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = `&éàè"'(-_ç):;!%^`;
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

window.onload = function () {
  alert(
    "NOTICE : \n " +
      "1) Sélectionner vos critères, Majuscules, Minuscules, Nombres, Symboles. \n" +
      "2) Déplacer le curseur latéralement pour définir la taille de votre MDP.\n" +
      "3) cliquer sur le bouton : Générer mot de passe."
  );
};

function generatePassword() {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veuillez sélectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
  generateButton.textContent = "Copié!";
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", () => {
  generatePassword();
});
