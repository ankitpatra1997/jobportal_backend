const express = require('express');
const router = express.Router();
const appService = require('../../services/applications/application.service');

// routes
router.post('/:sid/application/add', applyJob);
router.post('/:sid/application/:aid/update', updateStatus);
router.delete('/:sid/application/:aid', deleteApp);
router.get('/:sid/application', getApplications);

module.exports = router;

function applyJob(req, res, next) {
    console.log("--");
    appService.create(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}

function getApplications(req, res, next) {
    appService.getByApplicantId(req.params.sid)
        .then(apps => res.json(apps))
        .catch(err => next(err));
}

function updateStatus(req, res, next) {
    studentService.update(req.params.aid, req.body)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}

function deleteApp(req, res, next) {
    studentService.delete(req.params.aid)
        .then(() => res.status(200).json({
            status: "success"
        }))
        .catch(err => next(err));
}