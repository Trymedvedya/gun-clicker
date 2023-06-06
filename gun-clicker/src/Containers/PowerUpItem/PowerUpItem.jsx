import React from 'react';
import cls from './PowerUpItem.module.css'

const PowerUpItem = (props) => {
    return (
        <div className={cls.power_up_item}>
            <div className={cls.info}>
                <span>{props.name}</span>
                <span>Стоимость: {props.cost}$</span>
                <span>Стоимость пули: {props.reduceBulletCost}$</span>
                <span>Поступления с клика: {props.reducePointCost}$</span>
                <span>Разово: {props.drops}$</span>
                <span>Стоимость: {props.cost}</span>
                <span>Стоимость: {props.cost}</span>
                <span>Стоимость: {props.cost}</span>
                <span>Стоимость: {props.cost}</span>
                <span>Стоимость: {props.cost}</span>
            </div>
        </div>
    );
};



export default PowerUpItem;