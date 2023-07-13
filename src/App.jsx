import { HomeScreen } from './pages/homeScreen/HomeScreen';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <HomeScreen/> }>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}