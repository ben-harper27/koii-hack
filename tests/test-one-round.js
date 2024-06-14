require('dotenv').config();
const { coreLogic } = require('../coreLogic');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeTasks() {
    for (let i = 1; i < 10; i++) {
        let delay = 1200000;
        let round = i;
        const r = await coreLogic.task(round);
        console.log('task result', r);
        const auditResult = await coreLogic.auditTask(round);
        console.log('audit result', auditResult);
        await sleep(delay);

        console.log('stopping searcher at round', round);
    }
}

executeTasks();
