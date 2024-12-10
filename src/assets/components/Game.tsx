import './Game.css';
import Victory from '../audios/victory.wav'
import Button from '../audios/button.wav'
import Bass from '../audios/bass.wav'
import { useState } from 'react';

let RNG: number = Math.floor(Math.random() * 100) + 1;

export default function Game() {
    const [inputVal, setInputVal] = useState('');
    const [numTarget, setNumTarget] = useState(RNG);
    const [userGuess, setUserGuess] = useState(0); // Set initial guess to 0 (number)
    const [message, setMessage] = useState('');

    const [vSound] = useState(new Audio(Victory))
    const [bass] = useState(new Audio(Bass))
    const [btnSound] = useState(new Audio(Button))

    const playV = () => {
        vSound.play()
    }

    const playBass = () => {
        bass.play();
    }

    const playBtn = () => {
        btnSound.play();
    }

    const HandleClick = (inputVal: any) => {
        playBtn();
        setUserGuess(parseInt(inputVal)); // Parse input if necessary (optional)

        if (userGuess === numTarget) {
            setMessage("You're correct!");
            playV()
            setNumTarget(Math.floor(Math.random() * 100) + 1); // Generate new target on correct guess
        } else if (userGuess < numTarget) {
            setMessage("Too Low!");
            playBass()
        } else if (userGuess > numTarget) {
            setMessage("Too High!");
            playBass()
        } else {
            setMessage("Please enter a number");
            playBass()
        }
    };

    return (
        <>
            <div id="label"><label>Number Guessing Game</label></div>
            <div>
                <input
                    id="Input"
                    placeholder="Enter a number between 1-100"
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
            </div>
            <div id="submitBoxButton">
                <button onClick={() => HandleClick(inputVal)}>Submit</button>
            </div>
            <div id="message">
                <p>{message}</p>
            </div>
        </>
    );
}