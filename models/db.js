const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/SEP",
  {
    logging: false
  }
);

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://images.pexels.com/photos/2365532/pexels-photo-2365532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  GPA: {
    type: Sequelize.STRING,
    defaultValue: 0
  }
});

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://image.shutterstock.com/image-photo/university-michigan-600w-543628354.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

Student.belongsTo(Campus);

Campus.hasMany(Student);

module.exports = { Campus, Student, db };
