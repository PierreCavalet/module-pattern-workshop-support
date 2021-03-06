var peopleParams;
var PeopleModule = (function (peopleParams) {
  // init
  var limit = 5;
  if (peopleParams.limit) {
    limit = peopleParams.limit;
  }

  // private data
  var people = ['Franck', 'Jack'];

  /**
   * render - render the people list
   */
  var render = function () {
    var peopleNode = document.getElementById('peopleList');
    // clean the list
    while (peopleNode.firstChild) {
      peopleNode.removeChild(peopleNode.firstChild);
    }

    // create the elements
    people.forEach(function (person) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(person));
      peopleNode.appendChild(li);
    });
  };


  /**
   * addPerson - add a person to the people list
   * and re-render the list
   *
   * @param {string} person description
   */
  var addPerson = function (person) {
    if (people.length >= limit) {
      throw 'You have reach the people limit';
    }

    people.push(person);
    render();
  };

  // cache the DOM
  var addButton = document.getElementById('addPerson');
  var personInput = document.getElementById('personInput');

  // bind events
  addButton.addEventListener('click', function (e) {
    addPerson(personInput.value);
    personInput.value = '';
  });

  render();

  return {
    addPerson: addPerson
  };
})(peopleParams || {});
