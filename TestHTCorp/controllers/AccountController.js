const Account = require('../models/Account');
const Employee = require('../models/Employee');

async function createAccount(req, res) {
    try {
        const { employeeId, username, loginBy } = req.body;
        const employee = await Employee.findByPk(employeeId);
        await Account.create({ employeeId, username, loginBy });
        if (!employee) {
            return res.status(404).json({ error: 'Không tìm thấy Nhân viên này' });
        }
        res.json({ message: 'Chấm công thành công', employee });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi chấm công' });
    }
}
module.exports = {
    createAccount,
};
