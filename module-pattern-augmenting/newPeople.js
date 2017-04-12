var NewPeopleModule = (function (PeopleModule) {
  // add multiple people
  PeopleModule.addPersons = function (personsArray) {
    // foreach person
    personsArray.forEach(function (person) {
      // add the person
      PeopleModule.addPerson(person)
    })
  }

  return PeopleModule
})(PeopleModule || {})
