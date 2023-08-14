import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineSend } from '../components/Icons';

const NewPost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handlerSabmit = () => {
    if (!content.trim()) return navigate('../ra_router_crud/posts');

    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        content: content.trim()
      })
    });

    navigate('../ra_router_crud/posts');
  };

  return (
    <div className="new-post">
      <div className="new-post__options">
        <span>Новое сообщение</span>
        <button
          onClick={() => navigate('../ra_router_crud/posts')}
        >
          <AiOutlineClose size={30} />
        </button>
      </div>
      <div className="new-post__content">
        <textarea
          onChange={e => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <div className="new-post__submit">
        <button
          onClick={handlerSabmit}
        >
          <AiOutlineSend size={30} />
        </button>
      </div>
    </div>
  )
}

export default NewPost