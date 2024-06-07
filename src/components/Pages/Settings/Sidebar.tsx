import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Main(props: { onTabClick: Function }) {

    const { onTabClick } = props

    const { t } = useTranslation("settings")

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
                {t("sidebar.general")}
            </button>
            <button
                className={ `btn ${ active === 'export-import' ? 'active' : '' }` }
                onClick={ () => onClickHandler('export-import') }
            >
                {t("sidebar.export")}
            </button>
            <button
                className={ `btn ${ active === 'danger-zone' ? 'active' : '' } danger` }
                onClick={ () => onClickHandler('danger-zone') }
            >
                {t("sidebar.danger")}
            </button>
        </div>
    )
}