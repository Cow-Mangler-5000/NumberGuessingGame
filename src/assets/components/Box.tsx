import './Box.css'
import Game from './Game'

export default function Box() {
    return (
        <div className='Container'>
            <div className='Box'>
                <div className='Game'>
                    <Game/>    
                </div>
            </div>
        </div>
    )
}