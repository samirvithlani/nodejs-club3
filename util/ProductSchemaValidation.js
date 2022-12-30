const zod = require('zod');

const productSchema = zod.object({
    body:zod.object({
        name:zod.string().min(3).max(7),
        price:zod.number(),
        description:zod.string().min(3).max(100),
        qty:zod.number()
    }).strict()
})
module.exports = productSchema;