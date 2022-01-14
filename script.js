function bruh() {
  let textId = document.getElementById("txt").value;
  let numId = document.getElementById("num").value;
  let text = "";
  if (numId == 0) {
    alert("the number of lines can't be zero");
  } else if (textId == "") {
    alert("You can not copy blank message.");
  } else if (numId > 300) {
    alert("You can only generate 300 lines of spam");
  } else {
    let out = "";
    let num = numId;
    for (let i = 0; i < num; i++) {
      out += textId + "\n";
    }
    console.log(text);
    navigator.clipboard.writeText(out);
    alert("Succesfully generated spam");
    console.log(textId);
  }
}
