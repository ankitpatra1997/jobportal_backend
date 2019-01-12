const config = require('config.json');
const mongoose = require('mongoose');

mongoose.connect(config.connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/users/user.model'),
    Application: require('../models/applications/applications.model'),
    Company: require('../models/companies/profile.model'),
    Job: require('../models/companies/job.model'),
    Student: require('../models/students/personalDetails.model'),
    StudentEducation: require('../models/students/educationalDetails.model'),
    StudentExperience: require('../models/students/experience.model'),
    StudentProject: require('../models/students/projects.model')
};
