import { useEffect, useState } from "react"

export default function Main() {

    const [ theme, setTheme ] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        modifyTheme()
    }

    const getTheme = () => {

        const localTheme = localStorage.getItem('theme')

        if(!localTheme) {
            localStorage.setItem('theme', theme)
        } else {
            setTheme(localTheme)
            document.documentElement.setAttribute('class', localTheme)
        }

    }

    const modifyTheme = () => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('class', theme)
    }

    useEffect(() => { getTheme() }, [])

    useEffect(() => { modifyTheme() }, [ theme ])

    return (
        <button
            onClick={ toggleTheme }
            className="toggle"
            aria-label="Toggle Theme"
        >
            { theme === 'light' ? <i className="icon ti ti-sun"></i> : <i className="icon ti ti-moon"></i> }
        </button>
    )

}