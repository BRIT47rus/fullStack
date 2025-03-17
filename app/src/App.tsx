import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage/ViewIdeaPage'
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import { Layout } from './components/Layout/Layout';
import './stylles/global.scss';

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
