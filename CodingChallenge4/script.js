"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
let text;
document.querySelector("button").addEventListener("click", function () {
  const data = document.querySelector("textarea").value.split("\n");

  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].trim().toLowerCase();

    data[i] =
      data[i]
        .replace(
          "_" + data[i][data[i].indexOf("_") + 1],
          data[i][data[i].indexOf("_") + 1].toUpperCase()
        )
        .padEnd(20, " ") + "🆗".repeat(i + 1);

    console.log(data[i]);
  }
});
const testData = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`;
