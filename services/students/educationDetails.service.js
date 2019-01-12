const db = require("../../helpers/db");
const StudentEducation = db.StudentEducation;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(studentID, educationParam) {
    
    const education = new StudentEducation(educationParam);
    education.studentID = studentID;

    await education.save();
}

async function update(id, educationParam) {

    const education = await StudentEducation.findById(id);
    if (!education) throw "Student not found";

    Object.assign(education, educationParam);
  
    await education.save();
}

async function _delete(id) {
    await StudentEducation.findByIdAndRemove(id);
}
