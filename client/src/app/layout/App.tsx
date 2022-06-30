import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'

function App() {
    const [darkMode, setDarkMode] = useState(false)
    const palleteType = darkMode ? "dark" : "light"
    
    const theme = createTheme({
        palette: {
            mode: palleteType,
            background: {
                default: palleteType === "light" ? "#eaeaea" : "#121212",
            }
        }
    })

    const handleThemeChange = () => {
        setDarkMode(prevState => !prevState)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Container>
                <Catalog />
            </Container>
        </ThemeProvider>
    )
}

export default App
