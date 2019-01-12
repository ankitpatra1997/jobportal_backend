const express = require('express');
const router = express.Router();
const profileService = require('../../services/companies/profile.service');

// routes
router.post('/company/add', addCompany);
router.post('/company/:cid/update', updateCompany);
router.delete('/company/:cid', deleteCompany);

module.exports = router;

function addCompany(req, res, next) {
    studentService.create(req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function updateCompany(req, res, next) {
    studentService.update(req.params.cid, req.body)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}

function deleteCompany(req, res, next) {
    studentService.delete(req.params.cid)
        .then(() => res.status(200).json({
            status: success
        }))
        .catch(err => next(err));
}