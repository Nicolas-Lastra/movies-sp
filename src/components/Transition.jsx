import { cloneElement, createRef, useMemo } from "react"
import { useLocation } from "react-router"
import { SwitchTransition, Transition } from "react-transition-group"
import gsap from 'gsap'

export default function TransitionComponent ({ children }) {
    const location = useLocation()

    const nodeRef = useMemo(
        () => createRef(),
        [location.pathname]
    )

    return (
        <SwitchTransition mode="out-in">
            <Transition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={{
                    enter: 500,
                    exit: 400
                }}

                onEnter={() => {
                    gsap.set(nodeRef.current, {
                            autoAlpha: 0,
                            scale: 0.8,
                            xPercent: -100
                        }
                    )

                    gsap
                        .timeline()
                        .to(nodeRef.current, {
                                autoAlpha: 1,
                                xPercent: 0,
                                duration: 0.25
                            }
                        )
                        .to(nodeRef.current, {
                                scale: 1,
                                duration: 0.25
                            }
                        )
                    }
                }

                onExit={() => {
                    gsap.timeline()
                        .to(nodeRef.current, {
                            scale: 0.8,
                            duration: 0.2
                        })
                        .to(nodeRef.current, {
                            xPercent: 100,
                            autoAlpha: 0,
                            duration: 0.2
                        }
                    )
                }
            }
            >
                {cloneElement(children, { ref: nodeRef })}
            </Transition>
        </SwitchTransition>
    )
}