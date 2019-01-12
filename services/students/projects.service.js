const db = require("../../helpers/db");
const Project = db.StudentProject;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(studentID, projectParam) {
    
    const studentProject = new Project(projectParam);
    studentProject.studentID = studentID;
    
    // save Project
    await studentProject.save();

}

async function update(id, projectParam) {

    const project = await Project.findById(id);
  
    // validate
    if (!project) throw "User not found";
    
    // copy userParam properties to user
    Object.assign(project, projectParam);
  
    await project.save();
}

async function _delete(id) {
    await Project.findByIdAndRemove(id);
}
