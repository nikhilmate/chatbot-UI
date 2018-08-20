// Login triggering
document.querySelector('.trigger-search').addEventListener('click', function(e) {
  document.querySelector('.login').classList.remove('hide', 'fade');
});
document.querySelector('span.close').addEventListener('click', function(e) {
  document.querySelector('.login').classList.add('hide', 'fade');
});

//Register triggering
document.querySelector('.register-trigger').addEventListener('click', function(e) {
  document.querySelector('.register').classList.remove('hide', 'fade');
  document.querySelector('.register').classList.add('in');
});
document.querySelector('span.close-register').addEventListener('click', function(e) {
  document.querySelector('.register').classList.add('hide', 'fade');
  document.querySelector('.register').classList.remove('in');
});

// Link Login triggering
document.querySelector('#linking-register').addEventListener('click', function(e) {
  document.querySelector('.login').classList.add('hide', 'fade');
  document.querySelector('.login').classList.remove('in');
  document.querySelector('.register').classList.remove('hide', 'fade');
  document.querySelector('.register').classList.add('in');
});

// Link Register triggering
document.querySelector('#linking-login').addEventListener('click', function(e) {
  document.querySelector('.register').classList.add('hide', 'fade');
  document.querySelector('.register').classList.remove('in');
  document.querySelector('.login').classList.remove('hide', 'fade');
  document.querySelector('.login').classList.add('in');
});