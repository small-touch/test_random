import React, { useState, useRef } from 'react';
import { EyeOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './index.less';

const FileUpload = (props: any) => {
    const { multiple = 3 } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState('');
    const [imgs, setImgs] = useState<string[]>([]);
    const [visible, setVisible] = useState(false);

    // 读取文件
    const readFilePreview = (file: any) => {
        const fileReader = new FileReader();
        fileReader.onload = (e: any) => {
            setImgs((pre) => [...pre, e.target.result]);
        }
        fileReader.readAsDataURL(file);
    };

    // input上传事件监听
    const onChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file.size > 1 * 1024 * 1024) {
            console.log('上传文件的大小不能超过1MB');
            return;
        }
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            console.log('上传文件类型必须为png、jpg、jpeg其中一种格式');
            return;
        }
        // 读取文件
        readFilePreview(file);
        console.log(e.target.files[0]);
    };

    // 触发上传
    const handleClick = () => {
        inputRef.current?.click();
    };

    // 删除图片
    const handleDelete = (val: string, idx: number) => {
        setData('');
        setImgs((pre) => {
            return pre.filter((item, index) => !(item === val && index === idx));
        });
    };

    // 预览图片
    const handlePreview = (val: string) => {
        setData(val);
        setVisible(true);
    };

    // 关闭预览
    const handleClose = () => {
        setData('');
        setVisible(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.img_box}>
                {/* <div className={styles.upload_box}> */}
                {imgs?.map((item: string, index: number) => {
                    return (
                        <div className={styles.preImg_box} key={index}>
                            <img className={styles.preImg} src={item} alt="" />
                            <div className={styles.mask}>
                                <span className={styles.pre} onClick={() => handlePreview(item)}>
                                    <EyeOutlined />
                                </span>
                                <span className={styles.delete} onClick={() => handleDelete(item, index)}>
                                    <DeleteOutlined />
                                </span>
                            </div>
                        </div>
                    )
                })}
                {/* {data ? (
                        <div className={styles.preImg_box}>
                            <img className={styles.preImg} src={data} alt="" />
                            <div className={styles.mask}>
                                <span className={styles.pre} onClick={handlePreview}>
                                    <EyeOutlined />
                                </span>
                                <span className={styles.delete} onClick={handleDelete}>
                                    <DeleteOutlined />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.center_text} onClick={handleClick}>
                            <div>+</div>
                            <div>点击上传</div>
                            <input ref={inputRef} onChange={onChange} type="file" className={styles.input_upload} />
                        </div>
                    )} */}
            </div>
            {imgs?.length < multiple && (
                <div className={styles.upload_box}>
                    <div className={styles.center_text} onClick={handleClick}>
                        <div>+</div>
                        <div>点击上传</div>
                        <input ref={inputRef} onChange={onChange} type="file" className={styles.input_upload} />
                    </div>
                </div>
            )}
            {/* </div> */}

            {/* 预览组件 */}
            {visible && (
                <div className={styles.pre_bigImg_box}>
                    <div className={styles.close} onClick={handleClose}>
                        <CloseOutlined />
                    </div>
                    <img src={data} alt="" />
                </div>
            )}
        </div>
    );
};

export default FileUpload;