import { useNavigate, useParams } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiOutlineComment, AiOutlineLike } from '../components/Icons';
import useFetching from "../hooks/useFetching";
import Loader from '../components/Loader/Loader';
import PostsItem from '../components/PostsItem';
import CloseButton from '../components/CloseButton';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const url = 'http://localhost:7070/posts/' + postId;
  const option = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const {data, error, loading} = useFetching( url, option );
  const post = data && !Array.isArray(data) && data.post;

  const deletePost = () => {
    fetch( url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => navigate(-1))
  }
  
  return (
    <div>
      {post && 
       <PostsItem
          created={post.created}
          close={<CloseButton />}
          content={
            <div className="post__row post__content">
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
              <button
                className='post__edit'
                onClick={() => navigate('/ra_router_crud/posts/edit/' + postId)}
              >
               <AiFillEdit size={30} />
              </button>
              <button 
                className='post__delete'
                onClick={deletePost}
              >
               <AiFillDelete size={30} />
              </button>
            </>
          }
        />
      }
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default PostPage