const superagent = require("superagent");
const fs = require("fs");

//Callback hell
/* fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  console.log(data);

  superagent
    .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err);
      console.log(res.body.message);

      fs.writeFile("dog.img.txt", res.body.message, (err) => {
        if (err) return console.log(err);
        console.log("dog image saved succesfully to file");
      });
    });
}); */

//THEN SYNTAX
/* fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  console.log(data);

  superagent
    .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("dog.img.txt", res.body.message, (err) => {
        if (err) return console.log(err);
        console.log("dog image saved succesfully to file");
      });
    })
    .catch((err) => console.log(new Error(err.message)));
});
 */

//PROMISES
const readFilePro = (file) => {
  // executor function
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePro = (file) => {
  //executor function
  return new Promise((resolve, reject) => {
    fs.writeFile("dog.img.txt", file, (err) => {
      if (err) reject(err);
      resolve("dog image saved succesfully to file");
    });
  });
};

/* readFilePro(`${__dirname}/dog.txt`).then(data =>
  superagent
  .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
  .then(res => writeFilePro(res.body.message))
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("done"))); */

//ASYNC/AWAIT
/* const getDogImg = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const result = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim()}/images/random`
    );
    const text = await writeFilePro(result.body.message);
    console.log(text);
    return text;
  } catch (e) {
    console.log(e);
  }
}; */

//IFFI -> Immediately Invoked Function Expression
/* (async () => {
  const data = await getDogImg();
  console.log(data);
})(); */

//How to handle multiple  promises
const getDogImg = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const result = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim()}/images/random`
    );
    const result2 = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim()}/images/random`
    );
    const result3 = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim()}/images/random`
    );

    const all = await Promise.all([result, result2, result3]);
    const images = (await all).map((element) => element.body.message);
    console.log(images);

    const text = await writeFilePro(images.join("\n"));
    console.log(text);
    return text;
  } catch (e) {
    console.log(e);
  }
};
getDogImg();
