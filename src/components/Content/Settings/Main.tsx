import { useState } from "react"

import Sidebar from "@component/Content/Settings/Sidebar"
import Settings from "@component/Content/Settings/Page"

export default function Main(props: { masterPassword: string, onImportData: Function, onResetData: Function }) {

    const { masterPassword, onImportData, onResetData } = props

    const [ settingsPage, setSettingsPage ] = useState('general')

    return (
        <>

           <div className="head">

                <h2 className="title">
                    <i className={`align-middle mt-[-3px] mr-2 inline-block icon ti ti-settings`}></i> Settings
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