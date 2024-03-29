import React from 'react'

import PostAddIcon from '@material-ui/icons/PostAdd';

import Zoom from '@material-ui/core/Zoom'

function NewPostFormAddButton({setIsNewPostButtonClicked}) {
    return (
        <Zoom in timeout={1000}>
            <div className='NewPostFormAddButton' onClick={() => {
                setIsNewPostButtonClicked(true)
            }}>
                <PostAddIcon style={{fill: 'white'}} />
            </div>
        </Zoom>
    )
}

export default NewPostFormAddButton