function pakhiBhai(callMeBack, patro, patri) {
  console.log("patro", patro);
  // console.log("call me back", callMeBack);

  if (patri) {
    callMeBack(patro);
  } else {
    console.log("tor kopale biya nai");
  }
}

function callingSomeone(person) {
  console.log("calling", person);
}

// callingSomeone("jodu");
pakhiBhai(callingSomeone, "jodu khan", "mis. modhu");
