import { useState } from "react"

export default function Main(props: { onTabClick: Function }) {

    const { onTabClick } = props

    const [ active, setActive ] = useState('general')

    const onClickHandler = (page: string) => {
        setActive(page)
        onTabClick(page)
    }

    return (
        <div className="settings-sidebar">
            <button
                className={ `btn ${ active === 'general' ? 'active' : '' }` }
                onClick={ () => onClickHandler('general') }
            >
                General
            </button>
            <button
                className={ `btn ${ active === 'export-import' ? 'active' : '' }` }
                onClick={ () => onClickHandler('export-import') }
            >
                Export / Import
            </button>
            <button
                className={ `btn ${ active === 'danger-zone' ? 'active' : '' } danger` }
                onClick={ () => onClickHandler('danger-zone') }
            >
                Danger Zone
            </button>
        </div>
    )
}