import { useState } from "react"
import { useTranslation } from "react-i18next"

import Sidebar from "@component/Pages/Settings/Sidebar"
import Settings from "@component/Pages/Settings/Page"

import "@style/settings.css"

export default function Main(props: { masterPassword: string, onImportData: () => void, onResetData: () => void }) {

    const { t } = useTranslation("settings")

    const { masterPassword, onImportData, onResetData } = props

    const [ settingsPage, setSettingsPage ] = useState('general')

    return (
        <>

           <div className="head">

                <h2 className="title">
                    <i className={`align-middle mt-[-3px] mr-2 inline-block icon ti ti-settings`}></i> {t("title")}
                </h2>

            </div>

            <div className="settings no-scrollbar">

                <div className="">
                    <Sidebar onTabClick={ setSettingsPage } />
                </div>

                <div className="w-full">
                    <Settings page={ settingsPage } masterPassword={ masterPassword } onImportData={ onImportData } onResetData={ onResetData } />
                </div>

            </div>

        </>
    )
}
