"use strict";

alert("All data is entered in English using the British keyboard layout.");

function informUser() {
  let yearUser = prompt(
    "Please enter your year of birth in numbers (the number must be in four digits)"
  );
  if (yearUser === null) {
    alert("There are no data");
    return;
  }
  yearUser = Number(yearUser);

  let cityUser = prompt("What city do you live in?");
  if (cityUser === null) {
    alert("There are no data");
    return;
  }
  cityUser = cityUser.trim();

  let sportUser = prompt("What is your favorite sport?");
  if (sportUser === null) {
    alert("There are no data");
    return;
  }
  sportUser = sportUser.trim();

  if (isNaN(yearUser)) {
    alert("There are no data");
    return;
  }

  if (cityUser === "") {
    alert("There are no data");
    return;
  }

  if (sportUser === "") {
    alert("There are no data");
    return;
  }

  const age = new Date().getFullYear() - yearUser;

  let cityMessage = "";
  if (cityUser.toUpperCase() === "KYIV") {
    cityMessage = "You live in the capital of Ukraine";
  } else if (cityUser.toUpperCase() === "WASHINGTON") {
    cityMessage = "You live in the capital of the USA";
  } else if (cityUser.toUpperCase() === "LONDON") {
    cityMessage = "You live in the capital of Great Britain";
  } else {
    cityMessage = `You live in a populated area (village, city) ${cityUser}.`;
  }

  const sportChampion = {
    chess: "Magnus Carlsen",
    volleyball: "Wilfredo Leon Venero",
    football: "Cristiano Ronaldo",
  };

  let sportMessage = "";
  if (sportUser.toLowerCase() in sportChampion) {
    sportMessage = `Cool! Do you want to become ${
      sportChampion[sportUser.toLowerCase()]
    }?`;
  }

  const message = `Your age: ${age}\n${cityMessage}\n${sportMessage}`;
  alert(message);
}

informUser();
