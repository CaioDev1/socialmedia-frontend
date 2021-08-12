import React from 'react'

import api from '../../../../../../services/API_CONFIG'

function Buttons() {
    function handleLogOut() {
        api.get('/logoff').then(() => {
            window.location = '/'
        })
    }

    return (
        <nav className='Nav'>
            <p>Made with ❤ by CaioDev1</p>
            <ul>
                <li>
                    <a href='https://github.com/CaioDev1' target='_blank'>GitHub</a>
                </li>
                <li>
                    <a href='https://www.instagram.com/itsme_caio' target='_blank'>Creator</a>
                </li>
                <li>
                    <button className='btn btn-large btn-outline-light' onClick={handleLogOut}>
                        Logoff
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Buttons