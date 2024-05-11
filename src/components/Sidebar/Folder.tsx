import { useEffect, useState } from "react"
import { getFolderList } from "@logic/folder"

export default function Main(props: { folders: any, homeActive: boolean, onFolderClick: Function }) {

    const { folders, homeActive, onFolderClick } = props

    const [ folderActive, setFolderActive ] = useState('')
    const [ folderList, setFolderList ] = useState([])

    useEffect(() => { setFolderList(getFolderList()) }, [ folders ])

    return (
        <>
            { folderList.map((folder: any) => (
                <li key={ folder.fid }>
                    <button
                        name={ folder.name }
                        className={ `${ folderActive === folder.fid && !homeActive ? 'active ' : '' }button` }
                        onClick={ () => {
                                onFolderClick(folder.fid);
                                setFolderActive(folder.fid);
                            }
                        }
                    >
                        <i className={`icon ti ti-${ folder.icon ? folder.icon : 'folder-filled' }`}></i>
                    </button>
                </li>
            ))}
        </>
    )
}