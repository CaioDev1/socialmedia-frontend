import React, {useState} from 'react'

import {Zoom} from '@material-ui/core'

import {Home, Search, Email, Group} from '@material-ui/icons'

import jwt from 'jsonwebtoken'

import api from '../../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

function NavBar() {
    const {db_user_id, username} = jwt.decode(localStorage.getItem('local_token'))

    const [friendNumber, setFriendNumber] = useState(0)

    const [messageNumber, setMessageNumber] = useState(0)

    const [isFriendRequestFinished, setIsFriendRequestFinished] = useState(true)
    const [isMessageRequestFinished, setIsMessageRequestFinished] = useState(true)

    if(isFriendRequestFinished) {
        setIsFriendRequestFinished(false)

        api.get(`/notification?db_user_id=${db_user_id}`).then(response => {
            setFriendNumber(response.data) 
            setIsFriendRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    if(isMessageRequestFinished) {
        setIsMessageRequestFinished(false)
        
        api.get(`/messagelist?db_user_id=${db_user_id}&notification=${true}`).then(response => {
            setMessageNumber(response.data)
            setIsMessageRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='DownMenuComponents'>
            <Zoom in={true}>
                <ul>
                    <Link to='/home'>
                        <li>
                            <Home /> 
                        </li>
                    </Link>
                    <Link to='/search'>
                        <li>
                            <Search />
                        </li>
                    </Link>
                    <Link to={`/friends/${username}`}>
                        <li>
                            <Group />
                            <div className='Notification'>{friendNumber}</div>
                        </li>
                    </Link>
                    <Link to={`/messages`}>
                        <li>
                            <Email />
                            <div className='Notification'>{messageNumber}</div>
                        </li>
                    </Link>
                </ul> 
            </Zoom>
        </div>
    )
}

export default NavBar