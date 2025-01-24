const collectFeedback = require('./feedback');

async function markComplete() {
    // Existing code to mark todo as complete
    // ...
    await collectFeedback('mark complete');
}

module.exports = markComplete;