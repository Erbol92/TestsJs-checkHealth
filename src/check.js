export function healthColor(unit) {
    let result;
    switch (true) {
    case (unit.health > 50):
        result = 'healthy';
        break;
    case (unit.health > 15):
        result = 'wounded'; 
        break;
    case (unit.health <= 15):
        result = 'critical';
        break;
    }
    return result
}
