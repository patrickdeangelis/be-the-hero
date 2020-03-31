const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, city, uf, whatsapp, email } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    const result = await connection("ongs").insert({
      id,
      name,
      city,
      uf,
      whatsapp,
      email
    });

    return res.json({ id });
  },
  async index(req, res) {
    const ongs = await connection("ongs").select("*");
    return res.json({ ongs });
  }
};
