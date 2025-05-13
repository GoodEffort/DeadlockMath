const trophy = {
    cost: 3200,
    soulsPerMin: 20,
    maxStacks: 14,
}

const findReturnTime = (stacksPerMin) => {
    let investment = trophy.cost;
    let time = 0;
    let stacks = 0;

    while (investment > 0) {
        investment -= Math.min(stacks) * trophy.soulsPerMin;
        time += 1;
        stacks += stacksPerMin;
        if (stacks > trophy.maxStacks) {
            stacks = trophy.maxStacks;
        }
    }

    return time; // return time in minutes
}

const data = [];

for (let i = 10; i > 0; i-= .25) {
    const stacksPerMin = 1/i;
    const returnTime = findReturnTime(stacksPerMin);
    data.push({
        stacksPerMin: stacksPerMin,
        timeToPayoff: returnTime,
    });
}

const minutesToString = (minutes) => {
    const mins = Math.floor(minutes % 60);
    const seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    return `${mins}m ${seconds}s`;
}

for (const { stacksPerMin, timeToPayoff } of data) {
    console.log(`Minutes per kill: ${minutesToString(1/stacksPerMin)}, Time to Payoff: ${timeToPayoff}`);
}