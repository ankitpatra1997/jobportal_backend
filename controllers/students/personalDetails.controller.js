const express = require('express');
const router = express.Router();
const studentService = require('../../services/students/personalDetails.service');

// routes
router.post('/student/add', addStudent);
router.post('/student/:sid/update', updateStudent);
router.delete('/student/:sid', deleteStudent);

module.exports = router;

function addStudent(req, res, next) {
    studentService.create(req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateStudent(req, res, next) {
    studentService.update(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteStudent(req, res, next) {
    studentService.delete(req.params.sid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}