import { useEffect, useState } from "react"

export default function Main(props: { folder: any, folderActive: string, pageActive: string, onFolderClick: Function }) {

    const { folder, folderActive, pageActive, onFolderClick } = props

    return (
        <li
            key={ folder.fid }
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