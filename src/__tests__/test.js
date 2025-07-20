import {healthColor} from '../check.js'


test('healthColor', ()=>{
    const units = [
        {name: 'Маг', health: 90, status: 'healthy'},
        {name: 'Воин', health: 5, status: 'critical'},
        {name: 'Паладин', health: 35, status: 'wounded'},
        {name: 'Прист', health: 100, status: 'healthy'},
        {name: 'Хантер', health: 45, status: 'wounded'},
        {name: 'ДК', health: 10, status:'critical'},
    ]
    units.forEach(unit => {
        expect(healthColor(unit)).toBe(unit.status);
    });
    
})