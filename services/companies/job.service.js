const db = require("../../helpers/db");
const Job = db.Job;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(companyID, jobParam) {
    
    const job = new Job(jobParam);
    job.companyID = companyID;
    
    // save Company
    await job.save();

}

async function update(id, jobParam) {

    const job = await job.findById(id);
  
    // validate
    if (!job) throw "Job not found";
    
    // copy jobParam properties to user
    Object.assign(job, jobParam);
  
    await job.save();
}

async function _delete(id) {
    await Job.findByIdAndRemove(id);
}
