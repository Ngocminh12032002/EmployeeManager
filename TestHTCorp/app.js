const express = require('express')
const sequilize = require('./connection')
const employeeRouter = require('./route/EmployeeRoute')
const accountRouter = require('./route/AccountRoute')
const departmentRouter = require('./route/DepartmentRoute')

const app = express();
const PORT = 3000;

sequilize
    .authenticate()
    .then(() => {
        console.log('Connect Database complete');
    })
    .catch((err) => {
        console.log('Connect Database fail');
    })

app.use(express.json());
app.use(employeeRouter);
app.use(accountRouter);
app.use(departmentRouter);

app.listen(PORT, () => {
    console.log('Server run at http://localhost:3000/')
})