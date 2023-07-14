import { HomeScreen } from './pages/homeScreen/HomeScreen';
import { QuestionScreen } from './pages/questionScreen/QuestionScreen';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <HomeScreen/> }>
      <Route path='play' element={ <QuestionScreen /> } />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}