import { useEffect, useState } from "react"

export default function Main(props: { sid: string, options: any, selected: string, onSelect: Function }) {

    const { sid, options, selected, onSelect } = props

    const [ optionList, setOptionList ] = useState(options)

    const getOptions = () => {
        setOptionList(options)
    }

    useEffect(() => {
        getOptions()
    }, [])

    return (
        <div className="setting">
            <select
                name="alphabet"
                onChange={ (event) => {
                    onSelect(sid, event.target.value);
                }}
                defaultValue={ selected }
            >
                { optionList && optionList.map((opt: any) => (
                    <option
                        key={ opt.aid }
                        value={ opt.identifier }
                    >
                        { opt.name }
                    </option>
                ))}
            </select>
        </div>
    )
}