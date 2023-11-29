const PC = { name: 'Маг', health: 90 };

const healthColor = (PC) => {
    let healthMarker = 0;

    if (PC.health > 50) {
        healthMarker = 'healthy';
    } else if (PC.health < 15) {
        healthMarker = 'critical';
    } else {
        healthMarker = 'wounded';
    }
    return `${PC.name} ${healthMarker}`;
}

healthColor(PC);


const healthPC = healthColor(PC);

console.log(healthPC);

export { PC, healthColor, healthPC };