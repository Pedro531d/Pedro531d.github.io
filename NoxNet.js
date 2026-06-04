window.addEventListener('scroll', function() {
  if (window.scrollY > 1500) {
    document.getElementById('topo').style.display = 'block';
  } else {
    document.getElementById('topo').style.display = 'none';
  }
});

function voltartopo() {
  window.scrollTo(0, 0);
}

