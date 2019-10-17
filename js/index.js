/*eslint-env browser*/
var button = document.querySelector('button');
var form = document.querySelector('form');
var list = document.querySelector('nav>ul>li>a');
var li = document.querySelector('nav>ul>li');

button.addEventListener('click', function(){
  form.classList.toggle('push');
});

list.addEventListener('click', function(){
  li.classList.toggle('active');
});
