const campusPhotos = [
  "https://image.shutterstock.com/image-photo/university-michigan-600w-543628354.jpg",
  "https://www.aclu.org/sites/default/files/styles/content_area_full_width/public/field_image/web17-collegecampus-socialshare-1200x628.jpg?itok=-MIytjVU",
  "https://media.cntraveler.com/photos/5b6820702211d70d9158aa38/master/w_770,c_limit/Baylor%2520University%2520C1EEEJ.jpg",
  "https://media.cntraveler.com/photos/5b6820759dc0d5057c463bbb/master/w_770,c_limit/Berry%2520College%2520EX22R3.jpg",
  "https://media.cntraveler.com/photos/56952aa3e17ca74e420e04c7/master/w_770,c_limit/BYU-Alamy.jpg",
  "https://media.cntraveler.com/photos/59a45e4f7ea60a0ecb7b52ab/master/w_770,c_limit/Bryn-Mawr-College-GettyImages-459223689.jpg",
  "https://media.cntraveler.com/photos/59a45e78cd44216d03660ff6/master/w_770,c_limit/Colgate-University-FP863N.jpg"
];

const studentPhotos = [
  "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1534434972609-18e38fca76d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523049267777-25e40aca71c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1507207908229-c59ddb730e40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1522010265321-fd346cc64d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

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
      studentPhotos[Math.floor(Math.random() * studentPhotos.length)]
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
    defaultValue: campusPhotos[Math.floor(Math.random() * campusPhotos.length)]
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
