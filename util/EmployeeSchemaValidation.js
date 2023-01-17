const zod = require('zod');
const employeeValidationSchema = zod.object({
    body: zod.object({
        name: zod.string().min(3).max(20),
        email: zod.string().email().regex(/@gmail.com$/),
        department: zod.string(),
        password: zod.string().min(4).max(100)
    }).strict()
})
module.exports = employeeValidationSchema;
