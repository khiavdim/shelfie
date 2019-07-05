module.exports = {
  add(req, res) {
    const db = req.app.get("db");
    let { img, name, price } = req.body;
    db.add([img, name, price])
      .then(product => res.status(200).send(product))
      .catch(err => {
        console.log(err);
      });
  },

  getAll(req, res) {
    const db = req.app.get("db");
    db.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.log(err);
      });
  }
};
