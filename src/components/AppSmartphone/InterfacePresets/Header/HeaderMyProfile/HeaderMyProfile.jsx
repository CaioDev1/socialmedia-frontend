import React, { useContext } from 'react'

import {AuthContext, SlideLeftMenuContext} from '../../../../Contexts'

function HeaderMyProfile() {
    const {userData} = useContext(AuthContext)
    const {setSlideLeftMenu} = useContext(SlideLeftMenuContext)

    if(!userData) {
        userData.photo = 'https://i.ya-webdesign.com/images/loading-png-gif.gif'
        userData.username = 'Not found'
    }

    return (
        <div className='HeaderMyProfile' onClick={() => {
            setSlideLeftMenu(true)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
            <img src={userData.photo} className='PostUserIcon' alt='img' />
            <div className='HeaderUserInfo'>
                <h5>{userData.username}</h5>
            </div>
        </div>
    )
}

export default HeaderMyProfile