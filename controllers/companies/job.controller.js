const express = require('express');
const router = express.Router();
const jobService = require('../../services/companies/job.service');

// routes
router.post('/company/:cid/job/add', addJob);
router.post('/company/:cid/job/:jid/update', updateJob);
router.delete('/company/:cid/job/:jid', deleteJob);

module.exports = router;

function addJob(req, res, next) {
    jobService.create(req.params.cid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateJob(req, res, next) {
    jobService.update(req.params.jid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteJob(req, res, next) {
    jobService.delete(req.params.jid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}