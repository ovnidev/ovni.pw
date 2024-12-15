import { useEffect, useState } from "react"

export default function Main(props: { sid: string, isChecked: boolean, onToggle: Function }) {

    const { sid, isChecked, onToggle } = props

    const [ checked, setChecked ] = useState(isChecked)

    useEffect(() => {
        setChecked(isChecked)
    }, [ onToggle ])

    return (
        <div className="setting !top-[30px]">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={ checked }
                    onChange={ (event) => {
                        onToggle(sid, event.target.checked);
                        setChecked(event.target.checked);
                    }}
                    className=""
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}