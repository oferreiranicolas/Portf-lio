// Navegação suave
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// To-do list
const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

btn.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const del = document.createElement('button');
  del.innerHTML = '<i class="fas fa-trash-alt"></i>';
  del.textContent = 'X'
  del.title = "Remover";
  del.addEventListener('click', e => {
    e.stopPropagation();
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  input.value = '';
  input.focus();
});

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    btn.click();
  }
});
