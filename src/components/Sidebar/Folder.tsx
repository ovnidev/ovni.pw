import { useState, useEffect } from "react"
import { getSetting } from "@logic/settings"

export default function Main(props:
    {

        index: number,
        folder: any,
        folderActive: string,
        pageActive: string,
        onFolderClick: Function

        onFolderDragStart: Function
        onFolderDragEnter: Function
        onFolderDragEnd: Function

    }) {

    const { index, folder, folderActive, pageActive, onFolderClick, onFolderDragStart, onFolderDragEnter, onFolderDragEnd } = props

    const [ dragActive, setDragActive ] = useState(false)

    const getSettingData = () => {
        const setting = getSetting('enable-folder-sorting')
        setDragActive(setting.value)
    }

    useEffect(() => { getSettingData() })

    return (
        <li
            key={ folder.fid }
            draggable={ dragActive }
            onDragStart={ () => onFolderDragStart(index) }
            onDragEnter={ () => onFolderDragEnter(index) }
            onDragEnd={ () => onFolderDragEnd() }
            onDragOver={ (e) => e.preventDefault() }
        >
            <button
                aria-label={ folder.name }
                className={ `${ folderActive === folder.fid && pageActive === 'folder' ? 'active ' : '' }button` }
                onClick={ () => {
                        onFolderClick(folder.fid);
                    }
                }
            >
                <i className={`icon ti ti-${ folder.icon ? folder.icon : 'folder-filled' }`}></i>
            </button>
        </li>
    )
}