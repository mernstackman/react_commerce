const fs = require("fs");
const path = require("path");
const util = require("util");

const gCompFromObj = async (
  input,
  outputDir = "",
  content = "",
  strToRemove = "",
  replaceWith = ""
) => {
  // iterate through the object
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      // REMOVE THE LAST WORD IN OBJECT'S KEY TO DEFINE COMPONENT NAME
      // const name = await key.split(/(?=[A-Z][^A-Z]+$)/)[0];
      const name = await key.replace(strToRemove, replaceWith);

      // CREATE THE COMPONENT USING THE NAME AND OBJECT'S KEY
      const mapReplacement = await {
        __key_: key,
        __value_: input[key],
        __name_: name
      };

      const fileContent = await content.replace(
        /__key_|__name_|__value_/gi,
        matched => mapReplacement[matched]
      );

      console.log(path.resolve(outputDir, `./${name}.js`));

      // CREATE DIRECTORY IF THE USER IS DEFINING THE OUTPUT DIRECTORY
      if (outputDir != "") {
        fs.mkdir(
          outputDir,
          {
            recursive: true
          },
          err => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
      //CREATE THE COMPONENT FILE
      fs.writeFileSync(path.resolve(outputDir, `./${name}.js`), fileContent, err =>
        console.log(err)
      );

      /*       console.log(key, input[key], name);
      console.log(fileContent); */
    }
  }
};

module.exports = gCompFromObj;
