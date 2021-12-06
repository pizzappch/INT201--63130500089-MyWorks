let names = [];

let name = {
    name: document.getElementById('name').value
}

names.push(names);
document.forms[0].reset();

console.warn('added', {names});


localStorage.setItem('addName', JSON.stringify(name));

document.addEventListener('DOM', () => {
    document.getElementById('btn').addEventListener('click', addName);
});