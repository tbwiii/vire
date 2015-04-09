(function (window) {

  var actors, movies, title, button, refresh;


  actors= [
    'Tom Cruise',
    'Will Smith',
    'Keanu Reeves',
    'Brad Pitt',
    'George Clooney',
    'Tommy Lee Jones',
    'Tom Hanks',
    'Robin Williams',
    'Christian Bale',
    'Harrison Ford',
    'Nic Cage',
    'Kevin Bacon',
    'Halle Berry',
    'Drew Barrymore',
    'Cameron Diaz',
    'Angelina Jolie'
  ],

  movies = [
    'Batman Begins',
    'The Dark Knight',
    'Fifth Element',
    'The Avengers',
    'Star Wars',
    'Spider-Man',
    'Spider-Man 3',
    'The Matrix',
    'X-Men',
    'Men in Black',
    'Indiana Jones',
    'Pirates of the Caribbean',
    'The Lord of the Rings',
    'Top Gun',
    'Zoolander'
  ];

  title = document.getElementById('starting-point');
  newRoundBtn = document.getElementById('new-round-btn');
  refreshBtn = document.getElementById('refresh-btn');


  function roll () {
    var allOpts = actors.concat(movies);

    var randomIndex = Math.floor(Math.random() * ((allOpts.length - 1) - 0));

    title.innerHTML = allOpts[randomIndex]
  }

  function refresh () {
    location.reload(true);
  }

  newRoundBtn.onclick = roll;

  refreshBtn.onclick = refresh;



})(window)
