const { db, Student, Campus } = require("./models/db.js");

const syncandseed = async () => {
  await db.sync({ force: true });

  const atticus = await Student.create({
    firstName: "Atticus",
    lastName: "Finch",
    email: "atticus@harvard.com",
    GPA: 3.5
  });
  const scout = await Student.create({
    firstName: "Scout",
    lastName: "Finch",
    email: "scout@harvard.com",
    GPA: 3.0
  });
  const Harvard = await Campus.create({
    name: "Harvard",
    address: "123 Main St. USA",
    description: "A GREAT SCHOOL!"
  });

  await db.close();
};

syncandseed();

module.exports = syncandseed;
