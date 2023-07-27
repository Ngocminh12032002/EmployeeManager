const { where } = require('sequelize');
const Employee = require('../models/Employee');

async function createEmployee(req, res) {
    try {
        const { name, departmentId, age, phoneNumber, accountId, role } = req.body;
        console.log(req.body)
        const employee = await Employee.create({ name, departmentId, age, phoneNumber, accountId, role });
        res.json({ message: 'Thêm nhân sự thành công', employee });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi thêm nhân sự' });
    }
}


async function editEmployee(req, res) {
    try {
        const { id } = req.params;
        const { name, departmentId, age, phoneNumber, accountId, role } = req.body;
        await Employee.update({ name, departmentId, age, phoneNumber, accountId, role }, { where: { id } });
        res.json({ message: 'Sửa nhân sự thành công' })
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi sửa nhân sự" })
    }
}

async function deleteEmployee(req, res) {
    try {
        const { id } = req.params;
        await Employee.destroy({ where: { id } })
        res.json({ message: 'Xóa nhân sự thành công' })
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi xóa nhân sự" })
    }
}

module.exports = {
    createEmployee,
    editEmployee,
    deleteEmployee
}