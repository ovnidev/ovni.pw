import { useEffect, useState } from "react"
import { getFolderList } from "@logic/folder"

import Folder from "@component/Sidebar/Folder"

export default function Main(props: { folders: any, pageActive: string, onFolderClick: Function }) {

    const { folders, pageActive, onFolderClick } = props

    const [ folderList, setFolderList ] = useState([])
    const [ folderActive, setFolderActive ] = useState('')

    useEffect(() => { setFolderList(getFolderList()) }, [ folders ])

    return (
        <>
            { folderList.length > 0 && folderList.map((folder: any) => (
                <Folder
                    key={ folder.fid }
                    folder={ folder }
                    pageActive={ pageActive }
                    folderActive={ folderActive }
                    onFolderClick={ () => {
                        onFolderClick(folder.fid)
                        setFolderActive(folder.fid)
                    }}
                />
            ))}
        </>
    )
}