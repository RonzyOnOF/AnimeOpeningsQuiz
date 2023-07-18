import { HomeScreen } from './pages/homeScreen/HomeScreen';
import { QuestionScreen } from './pages/questionScreen/QuestionScreen';
import { RootLayout } from './layout/RootLayout';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout/> }>
      <Route index element={ <HomeScreen /> } />
      <Route path='play' element={ <QuestionScreen /> } />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}