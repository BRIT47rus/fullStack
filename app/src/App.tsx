import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage/ViewIdeaPage'
import * as routes from './lib/routes'
import { Layout } from './components/Layout/Layout';
import './stylles/global.scss';
import { NewPage } from './pages/NewPage/NewPage'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
           <Route path={routes.addNewIdeaRoute()} element={<NewPage/>}/>
            <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
