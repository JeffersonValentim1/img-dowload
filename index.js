const axios = require('axios')
const fs = require('fs')
const timeout = 3000;
const sleep = (tempoDelayMilisegundos) =>
  new Promise((onResolve) => setTimeout(onResolve, tempoDelayMilisegundos));

for (let index = 3264; index <= 18264; index++) {
  sleep(timeout);

  let imageUrls = `https://axiecdn.axieinfinity.com/axies/${index}/axie/axie-full-transparent.png`

  axios({
    method: 'get',
    url: imageUrls,
    responseType: 'stream'
  }).then(Response => {
    sleep(timeout);
    Response.data.pipe(fs.createWriteStream(`image${index}.png`))
    sleep(timeout);

    console.log('image downloaded')
  })

  console.log(imageUrls)
  sleep(timeout);

}
