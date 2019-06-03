const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://localhost:5432/acme_product_managers2",
  {
    logging: false
  }
);

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Product.belongsTo(User);

module.exports = { User, Product, db };
