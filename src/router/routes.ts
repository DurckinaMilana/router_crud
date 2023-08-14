import NewPost from "../pages/NewPost";
import PostEditPage from "../pages/PostEditPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";


export const routes = [
  { path: '', element: PostsPage },
  { path: 'new', element: NewPost },
  { path: ':postId', element: PostPage },
  { path: 'edit/:postId', element: PostEditPage }
]