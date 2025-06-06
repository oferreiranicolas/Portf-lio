const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Muda o texto do botão também
    if (body.classList.contains("dark")) {
        toggleButton.textContent = "Modo Claro";
    } else {
        toggleButton.textContent = "Modo Escuro";
    }
});
