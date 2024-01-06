const zod = require("zod");
const createTodo = zod.object({
  name: zod.string().min(3),
  description: zod.string(),
  isCompleat: zod.boolean().default(false),
});

const updateTodo = zod.object({
  name: zod.string(),
  description: zod.string(),
  isCompleat: zod.boolean(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
