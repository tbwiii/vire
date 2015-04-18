(function (window) {

  var actors, movies, title, fullList, button, refresh;

  // Set Cookie to handle app refresh
  docCookies = {
    getItem: function (sKey) {
      if (!sKey) { return null; }
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      if (!sKey) { return false; }
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };


  actors= [
    // 'Angelina Jolie',
    // 'Anthony Hopkins',
    // 'Brad Pitt',
    // 'Cameron Diaz',
    // 'Christian Bale',
    // 'Clint Eastwood',
    // 'Drew Barrymore',
    // 'Gary Oldman',
    // 'George Clooney',
    // 'Halle Berry',
    // 'Harrison Ford',
    // 'Jude Law',
    // 'Keanu Reeves',
    // 'Kevin Bacon',
    // 'Nic Cage',
    // 'Robert Downey Jr',
    // 'Robin Williams',
    // 'Tom Cruise',
    // 'Tom Hanks',
    // 'Tommy Lee Jones',
    // 'Tommy Lee Jones',
    'Will Smith'
  ],

  movies = [
    // 'The Avengers',
    // 'Batman Begins',
    // 'The Dark Knight',
    // 'Fifth Element',
    // 'Inception',
    // 'Independence Day',
    // 'Indiana Jones',
    // 'Jurassic Park',
    // 'The Lord of the Rings',
    // 'The Matrix',
    // 'Men in Black',
    // 'Pirates of the Caribbean',
    // 'Star Wars',
    // 'Spider-Man',
    // 'Spider-Man 3',
    // 'Top Gun',
    // 'X-Men',
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

    if (docCookies.getItem('options') === null) {
      return true;
    }

    var list = docCookies.getItem('options').split(',');

    if (list.length < 1) {
      return true;
    } else {
      return false;
    }
  }


  function roll () {
    if (!docCookies.hasItem('options') || isListEmpty()) {
      makeList();
    } else if (fullList === undefined) {
      fullList = docCookies.getItem('options').split(',');
    }

    var randomIndex = Math.floor(Math.random() * ((fullList.length - 1) - 0));

    title.innerHTML = fullList.splice(randomIndex, 1);

    console.log(title.innerHTML);

    docCookies.setItem('options', fullList);

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
