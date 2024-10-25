import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.less';


let demo = ["麻辣烫", "内江鲜烧牛肉", "火锅", "内江牛肉面", "兔子面", "奶茶", "鲜锅兔", "资中鲶鱼", "毛血旺", "串串", "无骨鸡爪", "大千千烧鱼", "宫保鸡丁", "麻婆豆腐", "鱼香肉丝", "糖醋里脊", "红烧肉",
    "水煮鱼", "辣子鸡", "回锅肉", "东坡肉", "酸菜鱼", "土豆肉丝", "酸辣土豆丝", "梅菜扣肉", "土豆炖牛腩", "袁记云饺", "曹氏",
    "葱爆羊肉", "蒜蓉虾", "青椒肉丝", "西红柿炒蛋", "红烧排骨", "烧烤", "肯德基", "塔斯汀汉堡", "柴火鸡"]
const Dishes = () => {
    const [result, setResult] = useState('点击按钮开始选择');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, [result]);

    const selectRandomDish = () => {
        setFadeIn(false);
        const randomDish = demo[Math.floor(Math.random() * demo.length)];
        setTimeout(() => {
            setResult(`今天吃：${randomDish}`);
        }, 200);
    };

    const deleteDish = (item: string) => {
        console.log(item);
        demo = demo?.filter((dish) => dish !== item);
    };
    return (
        <div className={styles.container}>
            <h1>随机点菜工具</h1>
            <div className={styles.result} style={{ opacity: fadeIn ? '1' : '0' }}>{result}</div>
            <Button className={styles.selectButton} type="primary" onClick={selectRandomDish}>随机选择</Button>
            <div className={styles.menu}>
                {demo?.map((item, index) => {
                    return <div className={styles.menuItem} key={index}>{item} <CloseOutlined onClick={() => deleteDish(item)} className={styles.close} /></div>
                })}
            </div>
        </div>
    );
};

export default Dishes;
