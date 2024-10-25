import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from './index.less';

interface DishType {
    name: string;
    id: number;
}
const Dishes = () => {
    const [result, setResult] = useState('点击按钮开始选择');
    const [fadeIn, setFadeIn] = useState(false);
    const [data, setData] = useState<DishType[]>([]);

    useEffect(() => {
        setFadeIn(true);
    }, [result]);

    const getDishes = async () => {
        const res = await axios.get('http://localhost:3000/api/dishes');
        setData(res?.data?.data);
    }

    useEffect(() => {
        getDishes();
    }, []);

    const selectRandomDish = () => {
        setFadeIn(false);
        const randomDish = data[Math.floor(Math.random() * data.length)];
        setTimeout(() => {
            setResult(`今天吃：${randomDish?.name}`);
        }, 200);
    };

    const deleteDish = (item: DishType) => {
        console.log(item);
    };
    return (
        <div className={styles.container}>
            <h1>随机点菜工具</h1>
            <div className={styles.result} style={{ opacity: fadeIn ? '1' : '0' }}>{result}</div>
            <Button className={styles.selectButton} type="primary" onClick={selectRandomDish}>随机选择</Button>
            <div className={styles.menu}>
                {data?.map((item, index) => {
                    return <div className={styles.menuItem} key={index}>{item?.name} <CloseOutlined onClick={() => deleteDish(item)} className={styles.close} /></div>
                })}
            </div>
        </div>
    );
};

export default Dishes;
