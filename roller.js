(function (window) {

  var actors, movies, title, fullList, button, refresh;


  actors= [
    'Angelina Jolie',
    'Anthony Hopkins',
    'Amy Adams',
    'Brad Pitt',
    'Cameron Diaz',
    'Christian Bale',
    'Clint Eastwood',
    'Drew Barrymore',
    'Ed Norton',
    'Emily Blunt',
    'Emma Stone',
    'Ewan McGregor',
    'Jeff Bridges',
    'Jessica Chastain',
    'Johnny Depp',
    'Kirsten Dunst',
    'Gary Oldman',
    'George Clooney',
    'Gerald Butler',
    'Halle Berry',
    'Harrison Ford',
    'Jude Law',
    'Katherine Keener',
    'Keanu Reeves',
    'Kevin Bacon',
    'Kevin Costner',
    'Kevin Spacey',
    'Leonardo DiCaprio',
    'Liam Neeson',
    'Mark Wahlberg',
    'Matt Damon',
    'Mel Gibson',
    'Michael Caine',
    'Morgan Freeman',
    'Natalie Portman',
    'Nic Cage',
    'Olivia Wilde',
    'Phillip Seymour Hoffman',
    'Robert DeNiro',
    'Robert Downey Jr',
    'Robin Williams',
    'Russell Crowe',
    'Ryan Reynolds',
    'Samuel L Jackson',
    'Tom Cruise',
    'Tom Hanks',
    'Tom Hardy',
    'Tommy Lee Jones',
    'Will Smith'
  ],

  movies = [
    'The Avengers',
    'Batman',
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
    'Tombstone',
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

  function isListEmpty () {

    if (window.localStorage.getItem('options') === "") {
      return true;
    }

    var list = window.localStorage.getItem('options').split(',');

    if (list.length < 1) {
      return true;
    } else {
      return false;
    }
  }


  function roll () {
    if (!window.localStorage.getItem('options') || isListEmpty()) {
      makeList();
    } else if (fullList === undefined) {
      fullList = window.localStorage.getItem('options').split(',');
    }

    var randomIndex = Math.floor(Math.random() * ((fullList.length - 1) - 0));

    title.innerHTML = fullList.splice(randomIndex, 1);

    console.log(title.innerHTML);

    window.localStorage.setItem('options', fullList);

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




})(window)
