import React from 'react'

import slideAnimation from '../../../../../functions/slideAnimation/slideAnimation'

import RightMenuContent from './RightMenuContent/RightMenuContent'

import {Slide} from '@material-ui/core'

function RightMenu() {
    return (
        <Slide direction='down' in={true} timeout={1000}>
            <div className='RightMenu'>
                <h2>Most <span style={{color: 'red'}}>❤</span> posts</h2>
                <RightMenuContent />
            </div>
        </Slide>
    )
}

export default RightMenu