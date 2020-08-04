import React, {useState} from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

import api from '../../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

import {Link} from 'react-router-dom'

function PostFooter(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    // FUNÇÃO E HOOK PRA TROCA DE ÍCONES E CORES DOS BOTÕES DO POST FOOTER
    const [reactions, setReactions] = useState({
        like: 0,
        love: 0,
        comment: 0,
        isLikeClicked: false,
        isLoveClicked: false,
        isCommentClicked: false
    })

    const [isDisabled, setIsDisabled] = useState(false)

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    // VALORES INICIAIS DOS BOTÕES PASSSADOS PELO SERVER
    if(isRequestFinished) {
        setIsRequestFinished(false)
        api.post('/post-buttons', {postid: props.postid, db_user_id: db_user_id})
            .then(response => {
                setReactions({
                    like: response.data.like,
                    love: response.data.love,
                    comment: response.data.comment,
                    isLikeClicked: response.data.isLikeClicked,
                    isLoveClicked: response.data.isLoveClicked
                })
                setIsRequestFinished(true)
            })
            .catch(err => {console.log(err)})
    }

    // ATUALIZA OS ICONES QUANDO CLICA
    function handleIconClick(isIconClicked, iconName) {
        const lastValue = reactions[isIconClicked]
        setReactions(preValue => {
            return {
                ...preValue, [isIconClicked]: !lastValue
            }
        })

        handlePostValues(isIconClicked, iconName)
    }

    // INPUT PRO SERVER PARA INCREMENTAR OS VALORES NO BANCO DE DADOS QUANDO CLICA
    function handlePostValues(isIconClicked, iconName) {
        setIsDisabled(true)
            const isButtonClicked = !reactions[isIconClicked]

        api.patch('/post-buttons', {iconName, postid: props.postid, isButtonClicked, db_user_id})
            .then(response => {
                console.log(response.data)
                setIsDisabled(false)
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div className='PostFooter'>
            <div className='LikeDiv'>
                <button onClick={() => {
                    handleIconClick('isLikeClicked', 'like')
                }} className='ThumbUpButton' name='postfooterbutton' disabled={isDisabled}>
                    <ThumbUp style={{fill: reactions.isLikeClicked ? 'cyan' : null}} />
                </button>
                <span className='LikeValue'>{reactions.like}</span>
            </div>

            <div className='LoveDiv'>
                <button onClick={() => {
                    handleIconClick('isLoveClicked', 'love')
                }} className='FavoriteBorderButton' name='postfooterbutton'>
                    {reactions.isLoveClicked ? <Favorite color='secondary' /> : <FavoriteBorder />}
                </button>
                <span className='LoveValue'>{reactions.love}</span>
            </div>

            <div className='CommentDiv'>
                <Link to={`/comments/${props.postid}`} >
                    <button className='CommentButton' name='postfooterbutton'>
                        <Comment style={{fill: reactions.isCommentClicked && 'orange'}} />
                    </button>
                </Link>
                <span className='CommentValue'>{reactions.comment}</span>
            </div>
        </div>
    )
}

export default PostFooter