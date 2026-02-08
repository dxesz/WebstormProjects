const form = document.querySelector('#todo-form');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#todoList');
const filterButtons = document.querySelectorAll('[data-filter]');

let currentFilter = 'all';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === '') return;

    createTask(text);
    input.value = '';

    applyFilter();
});

function createTask(text) {

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'todo-text';

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
}

list.addEventListener('click', function(e) {

    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }

    applyFilter();
});

list.addEventListener('change', function(e) {

    if (e.target.type === 'checkbox') {
        const li = e.target.parentElement;
        const text = li.querySelector('.todo-text');

        text.classList.toggle('is-completed', e.target.checked);
        li.classList.toggle('is-completed', e.target.checked);
    }

    applyFilter();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {

        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        currentFilter = this.dataset.filter;
        applyFilter();
    });
});

function applyFilter() {

    const items = list.querySelectorAll('li');

    items.forEach(item => {

        const completed = item.classList.contains('is-completed');

        let show = true;

        if (currentFilter === 'active') show = !completed;
        if (currentFilter === 'completed') show = completed;

        item.classList.toggle('is-hidden', !show);
    });

}
