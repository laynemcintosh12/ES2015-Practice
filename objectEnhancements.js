/* function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  } */


  // write an ES2015 version

  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }



  /* var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" */

// write an ES2015 version

var favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}





/* 
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  } */


  // write an ES 2015 version


  var teacher = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }



  //create animal function


  function createAnimal(species, noise, words){
    return {
        species,
        [noise](){
            return words;
        }
    }
  }