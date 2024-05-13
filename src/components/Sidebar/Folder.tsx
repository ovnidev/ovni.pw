import { useEffect, useState } from "react"
import { getFolderList } from "@logic/folder"

export default function Main(props: { folders: any, pageActive: string, onFolderClick: Function }) {

    const { folders, pageActive, onFolderClick } = props

    const [ folderActive, setFolderActive ] = useState('')
    const [ folderList, setFolderList ] = useState([])

    useEffect(() => { setFolderList(getFolderList()) }, [ folders ])

    return (
        <>
            { folderList.length > 0 && folderList.map((folder: any) => (
                <li key={ folder.fid }>
                    <button
                        aria-label={ folder.name }
                        className={ `${ folderActive === folder.fid && pageActive === 'folder' ? 'active ' : '' }button` }
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