export default function handler(req, res) {
const file = Math.floor(1 + Math.random() * 75);

res.sendFile(`./Nekos/${file}.png`);

}