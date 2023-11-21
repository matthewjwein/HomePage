import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        /**
         * OPTIONS
         */
        blocksCount: 5,
        blocksSeed: 0,

        /**
         * TIME
         */
        startTime: 0,
        endTime: 0,

        /**
         * STATES
         */
        phase: 'ready',

        /**
         * CONTROLS
         */
        direction: "NONE",
        jumpFlag: false,

        setJumpFlag: (jumpFlag) => {
            set((state) => {
                console.log("setting jump flag", jumpFlag)
                // Ignore update if player is already jumping
                if (state.jumpFlag === true && jumpFlag === true) {
                    return {}
                }
                return { jumpFlag }
            })
        },

        setJoystickDirection: (direction) => {
            set((state) => {
                if (state.direction !== direction) {
                    if (state.phase === 'ready') {
                        return { direction, phase: 'playing', startTime: Date.now() }
                    }
                    return { direction }
                }
                return {}
            })
        },
        start: () => {
            set((state) => {
                if (state.phase === 'ready') {
                    return { phase: 'playing', startTime: Date.now() }
                }
                return {}
            })
        },
        restart: () => {
            set((state) => {
                if (state.phase === 'playing' || state.phase === "ended") {
                    return { phase: 'ready', blocksSeed: Math.random() }
                }
                return {}
            })
        },
        end: () => {
            set((state) => {
                if (state.phase === 'playing') {
                    return { phase: 'ended', endTime: Date.now() }
                }
                return {}
            })
        },
    }
}))