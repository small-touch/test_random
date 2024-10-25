import React, { useState, useEffect } from 'react';
import { Upload, Image } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [preViewImg, setPreViewImg] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const UPLOAD_API_URL = 'http://localhost:3000/api/upload';
  useEffect(() => {
    // axios.get('https://mock.mengxuegu.com/mock/671afb2b2b6b6a3e4ae6e8d9/dishes/dishes').then((res) => {
    // axios.post('https://mock.mengxuegu.com/mock/671afb2b2b6b6a3e4ae6e8d9/dishes/addDishes', { name: '123' }).then((res) => {
    //   console.log('==================', res)
    // })
  }, [])

  const uploadFiles = (files: UploadFile[]) => {
    files.forEach(file => {
      if (file.status === 'uploading') {
        const formData = new FormData();
        formData.append('file', file.originFileObj as Blob);
        axios.post(UPLOAD_API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent: any) => {
            // 更新进度条
            file.percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setFileList([...fileList]);
          }
        })
          .then(res => {
            console.log('上传成功:', res.data);
            // 假设后端返回一个文件URL
            file.status = 'done';
            file.response = res.data;
            file.url = res.data.url;
            setFileList([...fileList]);
          })
          .catch(err => {
            console.error('上传失败:', err);
            file.status = 'error';
            setFileList([...fileList]);
          });
      }
    });
  };

  useEffect(() => {
    if (fileList.length > 0) {
      uploadFiles(fileList);
    }
  }, [fileList]);
  const handleFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    // 去重文件列表
    const uniqueFileList = newFileList.filter((file, index, self) =>
      index === self.findIndex(f => f.uid === file.uid)
    );

    // 辅助函数用于比较两个文件列表是否相等
    const isEqual = (list1: UploadFile[], list2: UploadFile[]): boolean => {
      if (list1.length !== list2.length) return false;
      for (let i = 0; i < list1.length; i++) {
        if (list1[i].uid !== list2[i].uid) return false;
      }
      return true;
    };
    
    // 只在文件列表发生变化时更新状态
    if (!isEqual(fileList, uniqueFileList)) {
      setFileList(uniqueFileList);
    }
  };

  const onPreview = async (file: UploadFile) => {
    setVisible(true);
    const imgs: string[] = fileList?.map((item) => item?.url || item?.thumbUrl || '')
    setPreViewImg(imgs || [])
    imgs.forEach((item, index) => {
      if (item === file.thumbUrl) {
        setCurrent(index)
      }
    })
  };

  return (
    <>
      <ImgCrop rotationSlider>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleFileChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </ImgCrop>
      <Image.PreviewGroup
        preview={{
          visible,
          onVisibleChange: (val) => {
            setVisible(val);
          },
          onChange: (current: number) => {
            setCurrent(current)
          },
          current
        }}
        items={preViewImg}
      />
    </>
  );
};

export default App;