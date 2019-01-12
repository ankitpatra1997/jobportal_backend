const express = require('express');
const router = express.Router();
const educationService = require('../../services/students/educationDetails.service');

// routes
router.post('/student/:sid/education/add', addEducation);
router.post('/student/:sid/education/:eid/update', updateEducation);
router.delete('/student/:sid/education/:eid', deleteEducation);

module.exports = router;

function addEducation(req, res, next) {
    educationService.create(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateEducation(req, res, next) {
    educationService.update(req.params.eid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteEducation(req, res, next) {
    educationService.delete(req.params.eid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}