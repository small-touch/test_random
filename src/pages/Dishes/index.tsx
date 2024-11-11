import { useState, useEffect, useRef } from 'react';
import { Button, Input, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from './index.less';

interface DishType {
    name: string;
    id: number;
}

// axios.defaults.baseURL = 'http://192.168.32.66:3000';
axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.baseURL = 'http://47.108.233.244:80/';
const Dishes = () => {
    const timer = useRef(null);
    const [result, setResult] = useState('点击按钮开始选择');
    const [data, setData] = useState<DishType[]>([]);
    const [inputVal, setInputVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentColor, setCurrentColor] = useState('#000');

    // 请求菜谱数据
    const getDishes = async () => {
        const res = await axios.get('/api/dishes/getAllDishes');
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
            const res = await axios.post('/api/dishes/deleteDish', { name: item?.name });
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
        if (!inputVal) {
            setLoading(false);
            return message.error('请输入菜品名称');
        };
        try {
            const res = await axios.post('/api/dishes/addDishes', { name: inputVal });
            if (res.data?.code === 200) {
                setLoading(false);
                message.success('添加成功');
                setInputVal('');
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

    function generateRandomColor() {
        var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return randomColor;
    }

    useEffect(() => {
        timer.current = setInterval(() => {
            setCurrentColor(generateRandomColor());
        }, 300);
        return () => {
            timer.current = null;
        }
    }, []);

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
            <p className={styles.tip} style={{ color: currentColor }}>人是铁，饭是钢，一顿不吃饿的慌！</p>
        </div>
    );
};

export default Dishes;
