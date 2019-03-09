const db = require("../../helpers/db");
var async = require('async');
const Job = db.Job;

const {
    promisify
} = require('util');
const Application = promisify(db.Application);

module.exports = {
    create,
    update,
    delete: _delete,
    getJobs: getJobs
};

async function create(companyID, jobParam) {

    const job = new Job(jobParam);
    job.companyID = companyID;

    // save Company
    await job.save();

}

async function getApplicants(cid) {
    try {
        await Application.find({
            "companyID": cid
        }, function (err, res) {
            if (err) {
                console.log(err);
                return [];
            } else {
                return res;
            }
        });
    } catch (err) {
        console.log(err);
    }
}
async function getJobs() {
    return await Job.aggregate([{
            "$addFields": {
                "jobId": {
                    "$toString": "$_id"
                }
            }
        },
        {
            $lookup: {
                from: "applications",
                localField: "jobId",
                foreignField: "jobID",
                as: "applicants"
            }
        }
    ])
}

async function update(id, jobParam) {

    const job = await Job.findById(id);

    // validate
    if (!job) throw "Job not found";

    // copy jobParam properties to user
    Object.assign(job, jobParam);

    await job.save();
}

async function _delete(id) {
    await Job.findByIdAndRemove(id);
}