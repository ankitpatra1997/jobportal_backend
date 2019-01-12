const db = require("../../helpers/db");
const Application = db.Application;

module.exports = {
    create,
    update,
    getByApplicantId,
    delete: _delete
};

async function create(studentID, appParam) {
    
    const app = new Application(appParam);
    app.applicantID = studentID;
    app.status = 'Applied'
    
    // save Application
    await app.save();

}

async function getByApplicantId(studentID) {
    return await Application.find({
        applicantID: studentID
    });
}

async function update(id, appParam) {

    const app = await Application.findById(id);
  
    // validate
    if (!app) throw "Application not found";
    
    // copy appParam properties to user
    Object.assign(app, appParam);
  
    await app.save();
}

async function _delete(id) {
    await Application.findByIdAndRemove(id);
}
