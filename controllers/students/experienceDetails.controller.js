const express = require('express');
const router = express.Router();
const experienceService = require('../../services/students/experience.service');

// routes
router.post('/student/:sid/experience/add', addExperience);
router.post('/student/:sid/experience/:eid/update', updateExperience);
router.delete('/student/:sid/experience/:eid', deleteExperience);

module.exports = router;

function addExperience(req, res, next) {
    experienceService.create(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateExperience(req, res, next) {
    experienceService.update(req.params.eid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteExperience(req, res, next) {
    experienceService.delete(req.params.eid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}