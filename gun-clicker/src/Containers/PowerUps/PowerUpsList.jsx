import React, { useState } from 'react';


const PowerUpsList = () => {
    const [powerUps, setPowerUps] = useState([
        { name: 'Пули в струны', reduceBulletCost: 0, reducePointCost: -0.03, drops: 20, cost: 10, durationTime:'none',durationClicks:50, multiplier:1.5 },
        { name: 'Богатый парень', reduceBulletCost: 0, reducePointCost: -0.2, drops: 70, cost: 5, durationTime:'none',durationClicks:'none', multiplier:1},
        { name: 'Ковбой', reduceBulletCost: 0.2, reducePointCost: 0, drops: 0, cost: 50, durationTime: 10,durationClicks:'none', multiplier: 2 }
    ])
    return (
        <div>

        </div>
    );
};



export default PowerUpsList;