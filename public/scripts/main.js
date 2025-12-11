
function changeStatus(button, newStatus) {
  const row = button.closest('tr');
  const statusCell = row.querySelector('.status');
  statusCell.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
  statusCell.className = 'status ' + newStatus;
}

function deletePedido(button) {
  const row = button.closest('tr');
  row.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("itensContainer");
  const addBtn = document.getElementById("addItemBtn");

  // Se a página não tiver o cardápio, interrompe (evita erro nas outras páginas)
  if (!container || !addBtn) return;


  function ativarBotaoRemover(card) {
    const btnRemove = card.querySelector(".remove-item");
    if (!btnRemove) return;

    btnRemove.addEventListener("click", () => {
      card.remove();
    });
  }

  // Ativa remover em todos os cards existentes
  document.querySelectorAll(".item-card").forEach(card => {
    ativarBotaoRemover(card);
  });
 

  addBtn.addEventListener("click", () => {
    const novoCard = document.createElement("div");
    novoCard.classList.add("item-card");

    novoCard.innerHTML = `
      <button class="remove-item">×</button>
      <h3>Novo Item</h3>
      <p>Descrição do item.</p>
      <p><strong>R$ 0,00</strong></p>
    `;

    container.appendChild(novoCard);

    // ativa o X do novo item
    ativarBotaoRemover(novoCard);
  });
});

