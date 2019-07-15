const faker = require("faker");
const { db, Student, Campus } = require("./models/db.js");

const syncandseed = async () => {
  await db.sync({ force: true });

  await Campus.create({
    name: "University of Florida",
    address: "123 Main St. USA",
    description: "Go Gators"
  });
  await Campus.create({
    name: "Radcliffe",
    address: "123 Main St. USA",
    description: "Across the street",
    imageURL: faker.image.city()
  });

  await Campus.create({
    name: "Boston College",
    address: "123 Main St. Massachusetts USA",
    description: "Go eagles",
    imageURL: faker.image.city()
  });

  await Campus.create({
    name: "University of Southern California",
    address: "123 Main St. California USA",
    description: "We are going surfing today",
    imageURL: faker.image.city()
  });

  await Campus.create({
    name: "University of South Carolina",
    address: "123 Main St. South Carolina",
    description: "Go gamecocks",
    imageURL: faker.image.city()
  });

  await Campus.create({
    name: "University of Georgia",
    address: "123 Main St. Athens Georgia",
    description: "Go dawgs",
    imageURL: faker.image.city()
  });
  await Campus.create({
    name: "University of Alabama",
    address: "123 Main St. Tuscaloosa Alabame",
    description: "We love Bear Bryant",
    imageURL: faker.image.city()
  });

  await Student.create({
    firstName: "Atticus",
    lastName: "Finch",
    email: "atticus@harvard.com",
    imageURL: faker.image.avatar(),
    GPA: 3.5,
    campusId: 2
  });
  await Student.create({
    firstName: "Scout",
    lastName: "Finch",
    email: "scout@harvard.com",
    GPA: 3.0,
    imageURL: faker.image.avatar(),
    campusId: 1
  });

  await Student.create({
    firstName: "Jem",
    lastName: "Finch",
    email: "jem@USC.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 3
  });
  await Student.create({
    firstName: "Boo",
    lastName: "Radley",
    imageURL: faker.image.avatar(),
    email: "Boo@Unf.com",
    GPA: 3.0,
    campusId: 1
  });
  await Student.create({
    firstName: "Mayella",
    lastName: "Ewell",
    email: "Mayella@abc.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 5
  });

  await Student.create({
    firstName: "Dill",
    lastName: "Harris",
    email: "Dill@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 7
  });

  await Student.create({
    firstName: "Calpurnia",
    lastName: "Smith",
    email: "Cal@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 2.0,
    campusId: 1
  });

  await Student.create({
    firstName: "Tom",
    lastName: "Robinson",
    email: "tom@UF.com",
    imageURL: faker.image.avatar(),
    GPA: 4.0,
    campusId: 5
  });

  await Student.create({
    firstName: "Boo",
    lastName: "Radley",
    email: "Boo@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 1
  });

  await Student.create({
    firstName: "Maude",
    lastName: "Atkinson",
    email: "maude@UF.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 7
  });

  await Student.create({
    firstName: "Aunt",
    lastName: "Alexandra",
    email: "aunt@gmail.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 6
  });

  await Student.create({
    firstName: "Nathan",
    lastName: "Radley",
    email: "nathan@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 4
  });

  await Student.create({
    firstName: "Heck",
    lastName: "Tate",
    email: "Heck@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 4
  });

  await Student.create({
    firstName: "Dolphus",
    lastName: "Raymond",
    email: "Dolph@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 3
  });

  await Student.create({
    firstName: "Walter",
    lastName: "Cunningham",
    email: "Boo@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 2
  });

  await Student.create({
    firstName: "Henry",
    lastName: "Dubose",
    email: "henry@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 2
  });

  await Student.create({
    firstName: "George",
    lastName: "Costanza",
    email: "Boo@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 2.0,
    campusId: 4
  });

  await Student.create({
    firstName: "Jerry",
    lastName: "Seinfeld",
    email: "Jerry@UF.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 5
  });

  await Student.create({
    firstName: "Elaine",
    lastName: "Benes",
    email: "Elaine@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 7
  });

  await Student.create({
    firstName: "Cosmo",
    lastName: "Kramer",
    email: "Cosmo@Unf.com",
    imageURL: faker.image.avatar(),
    GPA: 1.0,
    campusId: 7
  });

  await Student.create({
    firstName: "Newman",
    lastName: "Newman",
    email: "Newman@USC.com",
    imageURL: faker.image.avatar(),
    GPA: 3.0,
    campusId: 6
  });

  // await atticus.setCampus(1);
  // await scout.setCampus(2);

  await db.close();
};

syncandseed();

module.exports = syncandseed;
