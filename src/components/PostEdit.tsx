import React, { useState } from 'react'
import PostsItem from './PostsItem'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
import { Card } from '../interfaces/Card';

type PostEditProps = {
  post: Card
}

const PostEdit: React.FC<PostEditProps> = ({ post }) => {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState(post.content);

  const keepContent = (): void => {
    if (postContent === post.content) return navigate('../ra_router_crud/posts');

    const url = 'http://localhost:7070/posts?id=' + post.id;
    const option = {
      method: 'POST',
      body: JSON.stringify({
        id: post.id,
        content: postContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(url, option)
      .then(() => navigate('../ra_router_crud/posts'));
  }

  return (
    <PostsItem
      created={post.created}
      close={
        <button
          className='close-button'
          onClick={() => navigate(-1)}
        >
          <AiOutlineClose size={30} />
        </button>
      }
      content={
        <textarea 
          className="post__row post__content" value={postContent}
          onChange={e => setPostContent(e.target.value)}
        >
        </textarea>
      }
      reaction={
        <>
          <button
            onClick={keepContent}
          >
            Сохранить
          </button>
        </>
      }
    />
  )
}

export default PostEdit