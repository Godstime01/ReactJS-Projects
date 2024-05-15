import { ThemeProvider } from "@/components/shadcn/ui/theme-provider"
import Navbar from "./components/navbar"
import CountryListPage from "./components/country-list-page"
import { store } from './features/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <CountryListPage />
      </ThemeProvider>
    </Provider>
  )
}

export default App

