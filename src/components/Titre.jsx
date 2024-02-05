import React from 'react'
import { styles } from '../style'
const Titre = (props) => {
    return (
        <div className={`${props.className}`}> 
            <h1 className={`${styles.sectionHeadText} mb-5 w-500px`}>{props.titre}</h1>
            <div className='w-[50%] h-[10px] bg-[#38B6FF] mb-5'></div>

        </div>
    )
}

export default Titre
