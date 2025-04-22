import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Header from '../Layout/Header'

const Loader = () => {
  const loaderRef = useRef()
  const countRef = useRef()
  const progressRef = useRef(0)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
         gsap.from("#loader", {
            opacity:0
         })
      }
    })

    // Animate the count from 0 to 100
    tl.to(progressRef, {
      current: 100,
      duration: 3, // 3 seconds total
      ease: "power1.out",
      onUpdate: () => {
        countRef.current.textContent = `${Math.round(progressRef.current)}%`
      }
    })

    // Fade out loader when complete
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    })

    return () => tl.kill() // Clean up animation
  }, [])

  return (
    <div id='#loader' className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div ref={loaderRef} className="text-white text-4xl font-bold">
        <span ref={countRef}>0%</span>
      </div>
    </div>
  )
}

const LoaderWrapper = () => {
  const [loading, setLoading] = React.useState(true)

  const handleLoaderComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <Header />
      )}
    </>
  )
}

export default LoaderWrapper