const collectFeedback = require('./feedback');

async function deleteTodo() {
    // Existing code to delete todo
    // ...
    await collectFeedback('delete');
}

module.exports = deleteTodo;