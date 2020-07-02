import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopPost(props) {
    const text = props.postdata.bodytext
    
    return (
        <Zoom in={true} timeout={1500}>
            <a href={`/comments/${props.postdata.postid}`}>
                <div className='TopPosts'>
                    <div className='TopPostHeader'>
                        <img src={props.postdata.headerphoto} className='PostUserIcon' alt='img' />
                        <h6>{props.postdata.headerusername}</h6>
                    </div>
                    <p><span className='Quotation'>"</span> {text.substring(0, 100)} {text.length > 100 && '...'} <span className='Quotation'>"</span> </p>
                </div>
            </a>
        </Zoom>
    )
}

export default TopPost