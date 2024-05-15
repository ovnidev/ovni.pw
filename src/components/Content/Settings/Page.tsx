import { useState } from "react"

import General from "@component/Content/Settings/Pages/General"
import Export from "@component/Content/Settings/Pages/Export"
import Danger from "@component/Content/Settings/Pages/Danger"

export default function Main(props: { page: string, masterPassword: string, onImportData: Function, onResetData: Function }) {

    const { page, masterPassword, onImportData, onResetData } = props

    return (
        <>

           { page === 'general' && (<General />)}

           { page === 'export-import' && (<Export masterPassword={ masterPassword } onImportData={ onImportData } />)}

           { page === 'danger-zone' && (<Danger  onResetData={ onResetData }/>)}

        </>
    )
}