const collectFeedback = require('./feedback');

async function addTodo() {
    // Existing code to add todo
    // ...
    await collectFeedback('add');
}

module.exports = addTodo;