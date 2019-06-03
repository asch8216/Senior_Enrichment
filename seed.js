const { db, User, Product } = require("./models/db.js");

const syncandseed = async () => {
  await db.sync({ force: true });

  const moe = await User.create({
    name: "Moe"
  });
  const larry = await User.create({
    name: "Larry"
  });
  const curly = await User.create({
    name: "Curly"
  });

  const ipad = await Product.create({
    name: "ipad"
  });
  const iwatch = await Product.create({
    name: "iwatch"
  });
  const iphone = await Product.create({
    name: "iphone"
  });
  await db.close();
};

syncandseed();

module.exports = syncandseed;
