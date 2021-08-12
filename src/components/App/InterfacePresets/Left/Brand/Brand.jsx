import React from 'react'

import {Link} from 'react-router-dom'

function Brand({isHomePage}) {
    return isHomePage ? 
        <Link to='/home' style={{textDecoration: 'none'}}>
            <div className='Brand'>
                <img src={process.env.PUBLIC_URL + '/mindzone-logo.png'} alt='img' />
                <h1>Mindzone</h1>
            </div>
        </Link>
     :
    <div className='Brand'>
        <img src={process.env.PUBLIC_URL + '/mindzone-logo.png'} alt='img' />
    </div>
}

export default Brand