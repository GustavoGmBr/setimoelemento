document.addEventListener("DOMContentLoaded", function() {
  fetch('src/menu.html')
    .then(response => {
      if (!response.ok) throw new Error("Menu não encontrado!");
      return response.text();
    })
    .then(html => {
      document.getElementById('menu-sidebar').innerHTML = html;
    })
    .catch(error => {
      console.error("Erro ao carregar menu:", error);
    });
});
