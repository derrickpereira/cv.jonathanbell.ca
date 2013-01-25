/* Author:
  Jonathan Bell - jonathanbell.ca
  functions and vars live here.
*/

// set some vars so maybe we'll only have to place them in one place in the doc.
var
  phoneNumber = '250 514 3982',
  homeAddress = '211 - 955 Humboldt Street',
  homeAddress = '1015 Redfern Street',
  homeCity = 'Victoria',
  homeProvince = 'BC',
  homeCountry = 'Canada',
  interests = 'photography, front-end web development, rock climbing & mountaineering, coffee',
  startedProgramming = new Date(2011, 1-1, 11, 9, 0, 0),
  bDay = new Date(1981, 1-1, 11, 5, 33, 33);
  // update tele number!


// simple print function
function printpage() {
  window.print();
}


// calc age
function calcAge(e) {
  function t(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
  }
  var
    n = new Date,
    r = n.getFullYear() - e.getFullYear(),
    i = n.getDoY(),
    s = e.getDoY();
  if (t(n.getFullYear()) && i > 58 && s > 59) i--;
  if (t(e.getFullYear()) && i > 58 && s > 59) s--;
  if (i <= s) r--;
  return r;
}
Date.prototype.getDoY = function () {
  var e = new Date(this.getFullYear(), 0, 1);
  return Math.floor((this - e) / 864e5 + 1);
};


// add unicorns to the page on a click of the 'Javascript' 'link'
if (screen.width >= 1024) {

  function makeUnicorns() {

    var times = [42, 27, 75, 21, 62];
    times = times[Math.floor(Math.random()*times.length)];

    while (--times)  {
      cornify_add();
    }

    clearUnicorns.style.display = 'block';

  }

  var unicornButton = document.getElementById('unicornTime');
  if (unicornButton.attachEvent) {
    // handle IE
    unicornButton.attachEvent('onclick', makeUnicorns);
  } else {
    // handle other browsers
    unicornButton.addEventListener('click', makeUnicorns);
  }

  var new_div, clearUnicorns;

  clearUnicorns = document.createElement('div');
  newContentt = document.createTextNode('Get these unicorns outtah here!');
  clearUnicorns.appendChild(newContentt);

  // add the newly created element and its content into the DOM
  new_div = document.getElementById('jonathanBell');
  document.body.insertBefore(clearUnicorns, new_div);
  clearUnicorns.setAttribute('id', 'clearUnicorns');

  // get rid of the unicorns onclick
  clearUnicorns.onclick = function() {

    var paras = document.getElementsByClassName('unicorn');
    while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }

    clearUnicorns.style.display = 'none';

  }

}
