import React from 'react'

function Buttons() {

    function handleLogOut() {
        localStorage.removeItem('local_token')
        window.location = '/'
    }

    return (
        <nav className='Nav'>
            <p>Made with ❤ by CuscuzComCharque Productions</p>
            <ul>
                <li>
                    <a href=''>About</a>
                </li>
                <li>
                    <a href=''>Support</a>
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