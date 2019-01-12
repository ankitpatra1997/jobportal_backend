const db = require("../../helpers/db");
const Company = db.Company;

module.exports = {
    create,
    update,
    delete: _delete
};

async function create(companyParam) {
    
    const company = new Company(companyParam);
    if (await Company.findOne({ phone: companyParam.phone })) {
        throw "The Phone " + companyParam.phone + " is already taken";
    }
    await company.save();
}

async function update(id, companyParam) {

    const company = await Company.findById(id);
    if (!company) throw "Company not found";

    if (company.phone !== companyParam.phone && (await Company.findOne({ phone: companyParam.phone }))) {
        throw 'The Phone number "' + companyParam.phone + '" is already taken';
    }

    Object.assign(company, companyParam);
  
    await company.save();
}

async function _delete(id) {
    await Company.findByIdAndRemove(id);
}
