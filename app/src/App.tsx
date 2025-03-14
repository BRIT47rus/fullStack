import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage/ViewIdeaPage'
import { getAllIdeasRoute, getViewIdeaRoute } from './lib/routes'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage/>}/>
          <Route path={getViewIdeaRoute({ideaNIck:':ideaNick'})} element={<ViewIdeaPage/>}/>
       
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
