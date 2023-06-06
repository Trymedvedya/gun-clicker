import React, { useEffect, useState } from 'react';
import Gun from '../../Assets/gun.svg'
import Gun2 from '../../Assets/gun2.svg' 
import cls from './GunContainer.module.css'
import bullet from '../../Assets/bullet.svg'
const GunContainer = () => {
    const [points, setPoints] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [bullets, setBullets]=useState(6);
    const [pointsAdd, setPoinsAdd]=useState(1);
    const [bulletCost, setBulletCost]=useState(0.83);
    const addPoints = () =>{
        setClicks(clicks+1)
        setPoints(points+pointsAdd)
        setBullets(bullets-1)
        if(bullets<=0){
            setBullets(points*bulletCost>6?6:Math.round(points*bulletCost));
            setPoints(points-bulletCost*(points*bulletCost>6?6:Math.round(points*bulletCost)))
        }
    }
    const mainLogic = () =>{
        if(clicks>499 ){
            setBulletCost(0.93)
        }else{
            setBulletCost(0.83)
        }
    }
    // https://www.svgrepo.com/svg/193146/revolver-pistol
    useEffect(()=>mainLogic,[points,bulletCost])
    return (
        <div className={cls.gun_container}>
            <div className={cls.info}>
                <span className={cls.bullet_cost} >Поступления с клика:{pointsAdd} $</span>
            <span className={cls.bullet_cost} >Стоимость пули: {bulletCost} $</span>
            <span className={cls.reload_cost} > Можно купить: {Math.round(points*bulletCost)}<img className={cls.info_bullet} src={bullet} alt="" /></span>
            </div>
            <div className={cls.active_gun}>
            <span className={cls.points_count} >{points.toFixed(2)} $</span>
            <img onClick={addPoints} className={cls.gun} src={clicks>499 ? Gun2:Gun} alt="" />
            <ul>
                <li><img className={bullets<6?cls.first_inactive:cls.first} src={bullet} alt="" /></li>
                <li><img className={bullets<5?cls.second_inactive:cls.second} src={bullet} alt="" /></li>
                <li><img className={bullets<4?cls.third_inactive:cls.third} src={bullet} alt="" /></li>
                <li><img className={bullets<3?cls.fourth_inactive:cls.fourth} src={bullet} alt="" /></li>
                <li><img className={bullets<2?cls.fifth_inactive:cls.fifth} src={bullet} alt="" /></li>
                <li><img className={bullets<1?cls.sixth_inactive:cls.sixth} src={bullet} alt="" /></li>
            </ul>
            </div>
        </div>

    );
};



export default GunContainer;