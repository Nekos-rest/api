import fs from 'fs'
import path from 'path'

const file = Math.floor(1 + Math.random() * 75);
const filePath = path.resolve('.', `Nekos/${file}.jpg`)
const imageBuffer = fs.readFileSync(filePath)

export default function(req, res) {
res.setHeader('Content-Type', 'image/png')
res.send(imageBuffer)
}