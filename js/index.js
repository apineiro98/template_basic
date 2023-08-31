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

//! Contact-Form **//
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response")
  ;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/alejopineiro98@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente!";
        $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
      }).finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });

})(document);