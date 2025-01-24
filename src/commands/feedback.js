const inquirer = require('inquirer');

async function collectFeedback(todoAction) {
    const { feedback } = await inquirer.prompt([
        {
            type: 'input',
            name: 'feedback',
            message: `Please provide your feedback on the ${todoAction} operation:`
        }
    ]);

    // Logic to save feedback to a file or database
    console.log(`Feedback received: ${feedback}`);
}

module.exports = collectFeedback;