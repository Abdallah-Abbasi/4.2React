import {useState} from 'react'
import './Q1Input.css'
function Q1Input() {
    const [value, setValue] = useState(50);
    function handleChange(event){
        setValue(event.target.value)
        }
    return (
    <div className="q1">
        <input type="range" className="q1-input" min="0" max="100" value={value} onChange={handleChange} />
        <p className="q1-output">{`${value}%`}</p>
    </div>
    );
    }
export default Q1Input