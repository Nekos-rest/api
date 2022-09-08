import { createReadStream } from 'fs'
import { pipeline } from 'stream'

export default (req, res) => {
res.setHeader('Content-Type', 'image/png')
const imageStream = createReadStream(`${__dirname}/Nekos/${file}.png`)
const file = Math.floor(1 + Math.random() * 75);
pipeline(imageStream, res, (error) => {
if (error) console.error(error)
  })
}