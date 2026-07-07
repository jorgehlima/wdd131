// 5
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 8
const li = document.createElement('li');

// 9
const deleteButton = document.createElement('button');

// 10
li.textContent = input.value;

// 11
deleteButton.textContent = '❌';

// Accessibility
deleteButton.setAttribute('aria-label', 'Remove chapter');

// 12
li.append(deleteButton);

// 13
list.append(li);