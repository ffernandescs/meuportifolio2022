import { useEffect, useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'
import '../../css/style.css'

export const ScrolToTOp = () => {
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if(window.scrollY > 300 ) {
            setIsVisable(true)
            
        } else {
            setIsVisable(false)
        }
    }

    const scrolToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className={isVisable ? "btnTopScroll active" : "btnTopScroll"}>
            <buttom type="buttom" onClick={scrolToTop}>
                    <FaChevronCircleUp/>
            </buttom>
         
        </div>
    )
        
}
