import { Routes, Route } from 'react-router-dom'
import { routes } from './routes';
import PostsPage from '../pages/PostsPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/ra_router_crud/posts">
        {
          routes.map((route) => 
            <Route
              key={route.path}
              path={route.path}
              element={<route.element/>}
            />
          )
        }
      </Route>
      <Route  path='/*' element={<PostsPage />} />
    </Routes>
  )
}