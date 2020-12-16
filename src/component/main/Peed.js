import React,{useState} from 'react'
import { PageHeader,Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import './Peed.css';

const Peed = ({history}) => {
    const [fileList, setFileList] = useState([]);

    let [docForm, setDocForm] = useState({
        textValue : ''
    })
    let {textValue} = docForm

    const [tags, setTags] = React.useState([])

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const handleChange = (e) => {
        const {value,name} = e.target
        
        setDocForm ({
            ...docForm, 
            [name]:value
        })
    }
    
    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + textValue);
        event.preventDefault();
    }

    return (
        <div style={{width:'1000px',margin:'auto'}}>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="글쓰기"
                subTitle="오늘의 일기"
            />
             <form onSubmit={handleSubmit}>
                <ImgCrop rotate>
                    <Upload
                        action=""
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                        {fileList.length < 3 && '+ Upload'} 
                        {/* 3장까지 업로드 가능 */}
                    </Upload>
                </ImgCrop>
                    <textarea value={textValue} name="textValue" onChange={handleChange} className="textArea" placeholder="내용을 입력하세요."/>
                <ReactTagInput 
                    tags={tags} 
                    maxTags={5}
                    onChange={(newTags) => setTags(newTags)}
                />
                <input type="submit" value="Submit" className="writeBtn" />
            </form>
        </div>
    )
}

export default Peed
