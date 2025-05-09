

const neutralCreep = {
    initial: 172,
    increase: 1.86, // per minute
}

const cultist = {
    cost: 3200,
    bonus: 1.5,
    cooldown: 260, // seconds
}

const cultistReturn = t => cultist.bonus * (neutralCreep.initial + neutralCreep.increase * t);

const findReturnTime = (t) => {
    let investment = cultist.cost;
    let time = t * 60; // convert minutes to seconds

    while (investment > 0) {
        investment -= cultistReturn(time/60);
        time += cultist.cooldown;
    }
    return time/60; // convert seconds back to minutes
}

const data = [];

for (let i = 0; i < 60; i++) {
    const t = i;
    const returnTime = findReturnTime(t);
    data.push({
        minute: t,
        timeToPayoff: returnTime - t,
    });
}

for (const { minute, timeToPayoff } of data) {
    console.log(`Minute: ${minute}, Time to Payoff: ${timeToPayoff}`);
}