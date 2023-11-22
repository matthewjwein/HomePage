import { addEffect } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import useGame from "./stores/useGame"

export default function Interface() {
    const time = useRef()

    const restart = useGame((state) => state.restart)
    const phase = useGame((state) => state.phase)
    const fastestTime = useGame((state) => state.fastestTime)

    useEffect(() => {
        const unsubscribeEffect = addEffect(() => {
            const state = useGame.getState()

            let elapsedTime = 0;

            if (state.phase === "playing") {
                elapsedTime = Date.now() - state.startTime
            } else if (state.phase === "ended") {
                elapsedTime = state.endTime - state.startTime
            }
            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(2)

            if (time.current) {
                time.current.textContent = elapsedTime
            }
        })
        return () => {
            unsubscribeEffect()
        }
    }, [])

    console.log("fastest time", fastestTime)
    return <div className="interface">
        {/* Time */}
        <div className="time" ref={time}>0.00</div>

        {fastestTime && <div className="fastest-time" color="green">best: {(fastestTime / 1000).toFixed(2)}</div>}

        {/* Instructions */}
        {phase === "ready" && <div className="instructions">
            use the joystick to move the ball
            <br />
            tap the screen elsewhere to jump
            <br />
            get to the end as fast as possible
        </div>}

        {/* Restart */}
        {phase === "ended" && <div onClick={restart} className="restart">Restart</div>}
    </div >
}