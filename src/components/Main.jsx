import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "./main.css";

const Main = () => {
  const [value, setValue] = useState('');
  const [markArr, setMarkArr] = useState([]);
  const [showEditList, setShowEditList] = useState(false);
  const [showPreviewList, setShowPreviewList] = useState(false);

  const handleMarkValue = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' ) {
      e.preventDefault();
      setMarkArr([...markArr, value]);
      setValue('');
      setShowEditList(true);
      setShowPreviewList(false);
    }
  };

  function handleShow(e){
    e.preventDefault();
      setMarkArr([...markArr, value]);
      setValue('');
      setShowEditList(true);
      setShowPreviewList(false);
  }
  const handleEditButtonClick = () => {
    setShowEditList(true);
    setShowPreviewList(false);
  };

  const handlePreviewButtonClick = () => {
    setShowEditList(false);
    setShowPreviewList(true);
  };

  return (
    <>
      <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <textarea
          onChange={handleMarkValue}
          onKeyDown={handleKeyDown}
          value={value}
          type="text"
          style={{ width: "300px", height: "300px", resize: 'none'  ,marginLeft:"100px"}}
        />
        <button className='addBtn' onClick={handleShow}>Click</button>
      </div>
      <div className="btns">
        <button className='editBtn' onClick={handleEditButtonClick}>Edit</button>
        <button className='previewBtn' onClick={handlePreviewButtonClick}>Preview</button>
      </div>
      {showPreviewList && (
        <div className="preview">
          <ul className='previewList'>
            {markArr.map((e) => (
              <li style={{ listStyle: "none" }} key={crypto.randomUUID}>
                <ReactMarkdown className='span' plugins={[remarkGfm]}>{e}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showEditList && (
        <div className="edit">
          <ul className='editList'>
            {markArr.map((e) => (
              <li style={{ listStyle: "none" }} key={crypto.randomUUID()}>
                <p>{e}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Main;