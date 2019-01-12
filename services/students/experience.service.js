const db = require("../../helpers/db");
const Experience = db.StudentExperience;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(studentID, experienceParam) {
    const experience = new Experience(experienceParam);
    experience.studentID = studentID;
    await experience.save();

}

async function update(id, experienceParam) {
    const experience = await Experience.findById(id);
    //validate
    if (!experience) throw "experience not found";
    // copy userParam properties to user
    Object.assign(experience, experienceParam);
  
    await experience.save();
}

async function _delete(id) {
    await Experience.findByIdAndRemove(id);
}
