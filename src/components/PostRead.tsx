import React from 'react'
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai'
import PostsItem from './PostsItem';
import { Card } from '../interfaces/Card';
import { useNavigate } from 'react-router-dom';

type PostReadProps = {
  post: Card
}

const PostRead: React.FC<PostReadProps> = ({ post }) => {  
  const navigate = useNavigate();

  return (
    <PostsItem
      created={post.created}
      content={
        <div
          className="post__row post__content"
          onClick={() => navigate(`../ra_router_crud/posts/${post.id}`)}
        >
          {post.content}
        </div>
      }
      reaction={
        <>
          <button>
            <AiOutlineLike size={30} />
          </button>
          <button>
            <AiOutlineComment size={30} />
          </button>
        </>
      }
    />
  )
}

export default PostRead