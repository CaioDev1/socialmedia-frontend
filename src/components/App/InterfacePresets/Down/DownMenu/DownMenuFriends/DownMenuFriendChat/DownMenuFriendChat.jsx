import React from 'react'

import {Zoom} from '@material-ui/core'

import {Link} from 'react-router-dom'

function DownMenuFriendChat(props) {
    return (
        <Zoom in timeout={1000}>
            <div className='DownMenuFriendChat'>
                <Link to={`/chat/${props.data.chatId}`}>
                    <img src={props.data.user.photo} className='PostUserIcon'/>
                </Link>
            </div>
        </Zoom>
    )
}

export default DownMenuFriendChat