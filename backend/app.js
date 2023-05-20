const express = require('express')
const app = express()
const port = 3003
const ayanworks = require("@ayanworks/polygon-did-registrar")
const cors = require('cors')
const { json } = require("body-parser");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

app.post('/api/did/', json(), async (req, res) => {
  console.log(req.body)

  const data = await ayanworks.createDID("testnet", req.body.privateKey)
    .then((res) => { return res.data; })
    .catch((e) => {
      console.log(e)
    })

  const txHash = await ayanworks.registerDID(data["did"], req.body.privateKey)
    .then((res) => { return res.data; })
    .catch((e) => {
      console.log(e)
    })
  res.send(txHash);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})