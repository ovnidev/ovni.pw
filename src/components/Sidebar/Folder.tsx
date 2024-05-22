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

    return (
        <li
            key={ folder.fid }
            draggable={ true }
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