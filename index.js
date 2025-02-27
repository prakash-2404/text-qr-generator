import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message : "Enter Your URL: ",
    name : "URL"
  }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url)
    qr_svg.pipe(fs.createWriteStream(`QR-Code-${answers.URL}.png`));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log("Something else went wrong");
    }
  });

