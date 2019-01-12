const express = require('express');
const router = express.Router();
const projectService = require('../../services/students/projects.service');

// routes
router.post('/student/:sid/projects/add', addProject);
router.post('/student/:sid/projects/:pid/update', updateProject);
router.delete('/student/:sid/projects/:pid', deleteProject);

module.exports = router;

function addProject(req, res, next) {
    projectService.create(req.params.sid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateProject(req, res, next) {
    projectService.update(req.params.pid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteProject(req, res, next) {
    projectService.delete(req.params.pid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}