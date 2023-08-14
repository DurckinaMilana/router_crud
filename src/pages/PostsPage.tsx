import PostsList from "../components/PostsList";
import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="posts__add">
        <button
          onClick={() => navigate('../ra_router_crud/posts/new')}
        >Создать пост</button>
      </div>
      <PostsList />
    </>
  )
}

export default PostsPage