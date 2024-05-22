import { useEffect, useState, useRef } from "react"
import { getFolderList, updateFolderSort } from "@logic/folder"

import Folder from "@component/Sidebar/Folder"

export default function Main(props: { folders: any, pageActive: string, onFolderClick: Function }) {

    const { folders, pageActive, onFolderClick } = props

    const [ folderList, setFolderList ] = useState([])
    const [ folderActive, setFolderActive ] = useState('')

    const dragFolder = useRef(0)
    const draggedOverFolder = useRef(0)

    const handleSort = () => {
        const foldersClone = [...folderList]
        const temp = foldersClone[dragFolder.current]
        foldersClone[dragFolder.current] = foldersClone[draggedOverFolder.current]
        foldersClone[draggedOverFolder.current] = temp
        setFolderList(foldersClone)
        updateFolderSort(foldersClone)
    }

    useEffect(() => { setFolderList(getFolderList()) }, [ folders ])

    return (
        <>
            { folderList.length > 0 && folderList.map((folder: any, index: number) => (
                <Folder

                    key={ folder.fid }
                    index={ index }
                    folder={ folder }
                    pageActive={ pageActive }
                    folderActive={ folderActive }
                    onFolderClick={ () => {
                        onFolderClick(folder.fid)
                        setFolderActive(folder.fid)
                    }}
                    
                    onFolderDragStart={ (index: number) => dragFolder.current = index }
                    onFolderDragEnter={ (index: number) => draggedOverFolder.current = index }
                    onFolderDragEnd={ handleSort }

                />
            ))}
        </>
    )
}