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
  },

  delete(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.status(200).send(products))
      .catch(err => {
        console.log(err);
      });
  },

  update(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    let { img, name, price } = req.query;
    db.update([id, img, name, price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  }
};
