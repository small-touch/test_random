import { useState, useEffect } from 'react';
import { Button, Input, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from './index.less';

interface DishType {
    name: string;
    id: number;
}
const Dishes = () => {
    const [result, setResult] = useState('点击按钮开始选择');
    const [data, setData] = useState<DishType[]>([]);
    const [inputVal, setInputVal] = useState('');
    const [loading, setLoading] = useState(false);

    // 请求菜谱数据
    const getDishes = async () => {
        const res = await axios.get('http://192.168.58.215:3000/api/dishes/getAllDishes');
        setData(res?.data?.data);
    };

    useEffect(() => {
        getDishes();
    }, []);

    const selectRandomDish = () => {
        const randomDish = data[Math.floor(Math.random() * data.length)];
        if (!randomDish) return;
        setTimeout(() => {
            setResult(`今天吃：${randomDish?.name}`);
        }, 200);
    };

    // 删除菜谱数据
    const deleteDish = async (item: DishType) => {
        try {
            const res = await axios.post('http://192.168.58.215:3000/api/dishes/deleteDish', { name: item?.name });
            if (res.data?.code === 200) {
                message.success('删除成功');
                getDishes();
            }
        } catch (error) {
            message.error('删除失败');
        }
    };

    // 新增菜谱数据
    const addDish = async () => {
        setLoading(true);
        if (!inputVal) return;
        try {
            const res = await axios.post('http://192.168.58.215:3000/api/dishes/addDishes', { name: inputVal });
            if (res.data?.code === 200) {
                setLoading(false);
                message.success('添加成功');
                getDishes();
            }
        } catch (error: any) {
            setLoading(false);
            message.error(error.response.data?.message);
        }
    };

    const changeInput = (e: any) => {
        setInputVal(e.target.value);
    };

    return (
        <div className={styles.container}>
            <h1>随机点菜工具</h1>
            <div className={styles.result}>{result}</div>
            <Button className={styles.selectButton} type="primary" onClick={selectRandomDish}>随机选择</Button>
            <div className={styles.inputContainer}>
                <Input value={inputVal} placeholder='请输入' onChange={changeInput} />
                <Button loading={loading} className={styles.selectButton1} type="primary" onClick={addDish}>新增菜品</Button>
            </div>
            <div className={styles.menu}>
                {data?.map((item, index) => {
                    return <div className={styles.menuItem} key={index}>{item?.name} <CloseOutlined onClick={() => deleteDish(item)} className={styles.close} /></div>
                })}
            </div>
        </div>
    );
};

export default Dishes;
