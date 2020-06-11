import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopPost() {
    return (
        <Zoom in={true} timeout={1500}>
            <div className='TopPosts'>
                <div className='TopPostHeader'>
                    <img src={window.location.origin + '/fds/EXq0a0EXQAAUmjt.jpg'} className='PostUserIcon' alt='img' />
                    <h6>Caio Felipe</h6>
                    <p>@CaioReidaFarofa</p>
                </div>
                <p><span className='Quotation'>"</span> Some quick example text to build on the card title and make up the bulk of the card's content. <span className='Quotation'>"</span> </p>
            </div>
        </Zoom>
    )
}

export default TopPost