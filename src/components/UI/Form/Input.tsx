import { useEffect, useState } from "react"

export default function Main(props: { sid: string, type: string, defaultValue: any, onChange: Function }) {

    const { sid, type, defaultValue, onChange } = props

    const [ value, setValue ] = useState(defaultValue)

    useEffect(() => {
        setValue(defaultValue)
    }, [])

    return (
        <div className="setting">
            <input
                className="max-w-[100px]"
                min="1"
                max="80"
                value={ value }
                type={ type }
                onChange={ (event) => {
                    onChange(sid, event.target.value);
                    setValue(event.target.value)
                }}
            />
        </div>
    )
}