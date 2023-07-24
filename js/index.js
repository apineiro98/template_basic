
//! Ham Menu **//
((d) => {
  const $barButton = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu')
  ;

  $barButton.addEventListener('click', e => {
    // Le intercambia la clase none.
    $barButton.firstElementChild.classList.toggle('none');
    $barButton.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });

  //! Click y cierra el menu.
  d.addEventListener('click', e => {
    // Si el evento que genero el click en el document no es un ('.menu a'), return false.
    if(!e.target.matches('.menu a')) return false;

    $barButton.firstElementChild.classList.remove('none');
    $barButton.lastElementChild.classList.add('none');
    $menu.classList.remove('is-active');

  });

})(document);