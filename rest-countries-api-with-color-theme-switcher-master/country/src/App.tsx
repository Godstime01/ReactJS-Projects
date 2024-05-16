import { ThemeProvider } from "@/components/shadcn/ui/theme-provider"

import CountryListPage from "./components/countryListPage"
import CountrySingle from "./components/countrySIngle"
import RootLayout from "./components/rootLayout"
import { store } from './store/store'
import { Provider } from 'react-redux'

import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from "react-router-dom"



function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<CountryListPage />}></Route>
      <Route index path="/:code" element={<CountrySingle />}></Route>

    </Route>
  ))

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  )
}

export default App

