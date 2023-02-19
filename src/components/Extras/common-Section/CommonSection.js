import React from 'react'
import '../../../Style/common-section.css'

const CommonSection = (props) => {
    return (
        <section className='common_section mb-5'>
            <div className='container'>
                <h2 className='text-white'>{props.title}</h2>
            </div>
        </section>
    )
}

export default CommonSection
