import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/navbar"
import CountryList from "./components/country-list"
import { store } from './features/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <CountryList />
      </ThemeProvider>
    </Provider>
  )
}

export default App

