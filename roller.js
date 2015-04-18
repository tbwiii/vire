(function (window) {

  var actors, movies, title, fullList, button, refresh;


  actors= [
    'Angelina Jolie',
    'Anthony Hopkins',
    'Brad Pitt',
    'Cameron Diaz',
    'Christian Bale',
    'Clint Eastwood',
    'Drew Barrymore',
    'Gary Oldman',
    'George Clooney',
    'Halle Berry',
    'Harrison Ford',
    'Jude Law',
    'Keanu Reeves',
    'Kevin Bacon',
    'Nic Cage',
    'Robert Downey Jr',
    'Robin Williams',
    'Tom Cruise',
    'Tom Hanks',
    'Tommy Lee Jones',
    'Tommy Lee Jones',
    'Will Smith'
  ],

  movies = [
    'The Avengers',
    'Batman Begins',
    'The Dark Knight',
    'Fifth Element',
    'Inception',
    'Independence Day',
    'Indiana Jones',
    'Jurassic Park',
    'The Lord of the Rings',
    'The Matrix',
    'Men in Black',
    'Pirates of the Caribbean',
    'Star Wars',
    'Spider-Man',
    'Spider-Man 3',
    'Top Gun',
    'X-Men',
    'Zoolander'
  ];

  title = document.getElementById('starting-point');
  newRoundBtn = document.getElementById('new-round-btn');
  updateBtn = document.getElementById('refresh-btn'),
  modal = document.getElementById('modal'),
  reloadButton = document.getElementById('reload-button'),
  cancelReload = document.getElementById('cancel-reload');

  function makeList () {
    fullList = actors.concat(movies);

    return;
  }


  function roll () {
    if (!fullList || fullList.length < 1) {
      makeList();
    }

    var randomIndex = Math.floor(Math.random() * ((fullList.length - 1) - 0));

    title.innerHTML = fullList.splice(randomIndex, 1);

    return;
  }

  function toggleModal () {

    if (modal.style.display === "none") {
      modal.style.display = "block"
    } else {
      modal.style.display = "none"
    }

    return;
  }

  function refresh () {
    location.reload(true);

    return true;
  }

  newRoundBtn.onclick = roll;

  updateBtn.onclick = toggleModal;

  cancelReload.onclick = toggleModal;

  reloadButton.onclick = refresh;

  // Start or resume session
  session_start(); 

  // Extend cookie life time by an amount of your liking
  $cookieLifetime = 365 * 24 * 60 * 60; // A year in seconds
  setcookie(session_name(),session_id(),time()+$cookieLifetime);


})(window)
