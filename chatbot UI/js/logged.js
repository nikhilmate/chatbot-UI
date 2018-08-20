document.querySelector('.trigger-query').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#query-result').classList.remove('hide', 'fade');
});
document.querySelector('.got-it').addEventListener('click', function(e){
  document.querySelector('#query-result').classList.add('hide', 'fade');
});
