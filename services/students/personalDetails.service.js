const db = require("../../helpers/db");
const Student = db.Student;

module.exports = {
    create,
    update,
    getById,
    getData,
    delete: _delete
};

async function create(studentParam) {
    
    const student = new Student(studentParam);
    if (await Student.findOne({ phone: studentParam.phone })) {
        throw "The Phone " + studentParam.phone + " is already taken";
    }
    await student.save();
}

async function update(id, studentParam) {

    const student = await Student.findById(id);
    if (!student) throw "Student not found";

    if (student.phone !== studentParam.phone && (await Student.findOne({ phone: studentParam.phone }))) {
        throw 'The Phone number "' + studentParam.phone + '" is already taken';
    }

    Object.assign(student, studentParam);
  
    await student.save();
}

async function _delete(id) {
    await Student.findByIdAndRemove(id);
}
