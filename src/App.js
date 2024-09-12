
import { useState } from 'react';
import './App.css';

function App() {
   let [blog, setBlog]=useState(['명품 가방 추천', '맛집탐방', '가죽공예']);
   let [input, setInput]=useState('');
   let [modal, setModal]=useState(false);
   let [title, setTitle]=useState('');
   let [likes, setLikes]=useState(Array(blog.length).fill(0));

   const setBlogLikes=(index, newLikes)=>{
      setLikes(prevLikes => {
         const newLikesArray=[...prevLikes];
         newLikesArray[index]=newLikes;
         return newLikesArray;
      })
   }
   
  return (
    <div className="App">
      <div className="black-nav">
         <h4>blog</h4>
      </div>
      
      {
         blog.map(function(a, index){
            return (
               <div className='list' key={index}>
                  <h4 onClick={()=>{setModal(!modal); setTitle(index)}}>{a} <span onClick={(e)=>{e.stopPropagation(); setBlogLikes(index, likes[index]+1)}}>❤</span>{likes[index]}</h4>
                  <p>9월 12일 발행</p>
                  <button
                     onClick={()=>{
                        let copy=[...blog];
                        copy.splice(index,1);
                        setBlog(copy)
                     }}
                  >삭제</button>
               </div>
            )
         })
      }
      <p className='input'><input type="text" onChange={(e)=>{setInput(e.target.value); console.log(input)}} /> <button onClick={()=>{
         let copy=[...blog];
         copy.unshift(input);
         setBlog(copy)
      }}
      >글쓰기</button></p>

      {
         modal === true ? <Modal blog={blog} title={title} setBloge={setBlog}/>: null
      }
    </div>
  );
}

function Modal(props){
   return(
      <div className='modal'>
         <h2>{props.blog[props.title]}</h2>
         <p>날짜</p>
         <p>상세내용</p>
      </div>
   )
}
export default App;
