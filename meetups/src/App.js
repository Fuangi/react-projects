import { Route, Routes } from 'react-router-dom'
// to difenin different paths that the route will lead to
 import AllMeetupsPage from './pages/AllMeetups';
 import NewMeetupsPage from './pages/NewMeetups';
 import FavoritesPage from './pages/Favorites';
 import Layout from './components/layout/Layout';
function App(){
  // in the route element, the path can be anything. / is used fro blank
  return (
  <Layout>
    <Routes>
      <Route path='/' element={<AllMeetupsPage />}>
      </Route>
      <Route path='/new-meetup' element={ <NewMeetupsPage />}>
      </Route>
      <Route path='/favorites' element={<FavoritesPage />}>
      </Route>
      </Routes>
  </Layout>

  )
}

export default App;

// routing changes so it watches for url changes and choose the componenet to be loaded