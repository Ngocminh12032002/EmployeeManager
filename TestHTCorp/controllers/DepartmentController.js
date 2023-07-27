const Employee = require("../models/Employee");

async function getEmployeeByDepartment(req, res) {
    const departmentId = req.params.departmentId;
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    console.log(page + " " + perPage);
    try {
        const employee = await Employee.findAndCountAll({
            where: { departmentId },
            attributes: ['id', 'name', 'phoneNumber', 'role'],
            limit: perPage,
            offset: (page - 1) * perPage,
        })
        res.json({
            currentPage: page,
            totalPage: Math.ceil(employee.count / perPage),
            totalItem: employee.count,
            employee: employee.rows,
        });
    } catch (error) {
        console.error('Lỗi khi lấy danh sách nhân sự:', error);
        res.status(500).json({ error: 'Lỗi khi lấy danh sách nhân sự' });
    }
}

module.exports = {
    getEmployeeByDepartment,
}