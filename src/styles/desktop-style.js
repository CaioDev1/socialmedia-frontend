import styled from 'styled-components'

export default styled.div`

.LeftMenu::-webkit-scrollbar, .TopPostArea::-webkit-scrollbar {
    display: none;
}

.LeftMenu a, .PostArea a, .RightMenu a {
    text-decoration: none;
    color: white;
}

h1, h2, h3, h4, h5 { /* trocar os h's pra class title */
    color: white;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.377);
    font-family: 'Roboto', sans-serif;
}


/* LEFT */
.Left {
    position: fixed;
    height: 100vh;

    padding-right: 0;
    z-index: 1;
}
    /* BRAND */
    .Brand {
        display: flex;
        flex-wrap: wrap;

        text-align: center;
        align-items: center;

        text-decoration: none;
    }
        .Brand * {
            margin: auto;
        }
        .Brand img {
            width: 25%;
            height: 10%;
        }
        .Brand h1 {
            font-size: 3em;
        }

    /* LEFT MENU */
    .LeftMenu {
        border: 3px solid white;
        border-bottom: none;

        border-top-left-radius: 30px;
        border-top-right-radius: 30px;

        height: 100%;
        padding: 0 5% 200px;

        overflow-y: scroll;

        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.356);

        background: linear-gradient(65deg, #ffb385 30%, #fc4774 );

        position: relative;
        top: 100%;                    /* SETADOS DE BASE PRA CRIAR A ANIMAÇÃO DE SLIDE */
    }

        /* NEW POST FORM */
        .NewPostForm {
            margin-bottom: 20px;
        }
            .NewPostForm h1 {
                padding-left: 10px;
                padding-top: 15px;
            }
            .NewPostForm form {
                position: relative; 
                text-align: center;
            }
            .NewPostForm textarea {
                resize: none;
                width: 100%;

                border-radius: 40px;
                outline: 0;
                border: 2px solid #fae7cb;

                padding-left: 5%;
                padding-top: 5%;

                font-size: 1.4rem;
            }
                .NewPostForm textarea::placeholder {
                    color: black;
                    font-size: 1.2rem;
                }

            .NewPostForm button, .NewCommentForm button {
                position: absolute;

                bottom: -10px;
                right: 20px;

                border: none;
                border-radius: 100%;
                background-color: #fae7cb;

                width: 40px;
                height: 40px;

                cursor: pointer;
                outline: none;

                box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.356);
            }

        .LeftMenu hr {
            border: 2px solid #fae7cb;
            border-radius: 10px;
        }

        /* LIST CONFIGS */
        .ListConfigs ul{
            padding: 0;
            margin: 0;

        }
            .ListConfigs li {
                display: flex;
                padding: 5px 0 5px 5%;
                align-items: center;

                border-radius: 100px;

            }
                .ListConfigs li:hover {
                    background-color: rgba(0, 0, 0, 0.041);
                }
                .ListConfigs li h4 {
                    padding-left: 20px;
                }

        /* MY PROFILE */
        .MyProfile {
            display: flex;
            align-items: center;
            
            margin-top: 5%;
            padding-left: 0px;

            border-radius: 100px;
        }
            .MyProfile:hover {
                background-color: rgba(0, 0, 0, 0.041);
            }
            .MyProfile * {
                margin: 0 10px 0 0;
            }
            .MyProfile img {
                box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
            }


    
/* POST AREA */ 
.PostArea {
    margin-left: calc(100% / 3);

    padding-bottom: 50px;
}
    .Header p {
        color: white;
    }
    /* BUTTONS */
    .Nav {
        text-align: center;
    }
        .Nav ul {
            display: flex;
            padding: 10px 0 0;

            justify-content: space-around;
            padding: 0px 100px;
        }
        .Nav li {
            display: flex;

            padding: 15px;
            list-style: none;

            align-items: center;
        }
    
    .PostArea h1 {
        text-align: center;
        padding: 0;
    }

        /* POST */
        .Post {
            border-radius: 30px;
            margin-bottom: 50px;

            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.322);

            background: #fae7cb;

            border: 3px double rgb(240, 183, 183);
        }
            .PostHeader, .PostFooter {
                display: flex;
                align-items: center;
                padding-left: 2%;
            }
                .PostHeader * {
                    margin: 10px 10px 10px 0;
                }
                .PostHeader a {
                    display: flex;
                    flex-wrap: wrap;
                    margin-right: auto;
                }
                .PostHeader p {
                    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.671);
                }
                .PostUserIcon {
                    height: 50px;
                    width: 50px;
                    border-radius: 100%;

                    border: 2px solid white;
                }
                .PostHeader p {
                    opacity: 0.8;
                }
                button.AddFriendPost {
                    margin: 0;
                    background: transparent;
                    border: none;

                    outline: 0;
                }
                .AddFriendPost:hover {
                    color: rgb(255, 134, 134);
                }

            .PostBody, .PostFooter {
                padding: 10px;
            }
            .PostBody {
                border: none;
                border-top: 2px solid white;
                border-bottom: 2px solid white;
            }
            .PostFooter {
                padding: 0;
                justify-content: space-around;
            }
                .PostFooter * {
                    cursor: pointer;
                }
                .PostFooter button {
                    background: transparent;
                    border: none;
                    width: 100%;
                    height: 100%;
                    outline: 0;
                    padding: 10px 10px 0;
                }
                .LikeDiv, .LoveDiv, .CommentDiv {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .LikeDiv span, .LoveDiv span, .CommentDiv span {
                    font-size: 0.7rem;
                    font-weight: bold;
                    margin: 0 auto;
                }
                .LoveDiv {
                    border-left: 2px solid white;
                    border-right: 2px solid white;
                }

                    /* ICONS */
                    .ThumbUpButton:hover {
                        color: #00bdaa;
                    }
                    .FavoriteBorderButton:hover {
                        color: red;
                    }
                    .CommentButton:hover {
                        color: orange;
                    }
    



/* RIGHT*/
.Right {
    position: fixed;
    top: 0;
    right: 0;

    height: 100vh;

    padding-left: 0;
}
    /* RIGHT MENU */
    .RightMenu {
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;

        height: 88vh;
        padding: 5%;

        display: flex;            /* */
        flex-direction: column;  /*PRA FUNCIONAR O SCROLL DA DIV TOP POST AREA */

        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.377);

        background: linear-gradient(65deg, #fae7cb 5%, #ff7272);
        
        border: 3px solid white;
        border-top: none;

        position: relative;
        top: -100%;                    /* SETADOS DE BASE PRA CRIAR A ANIMAÇÃO DE SLIDE */
    }
        .RightMenu h2 {
            border-bottom: 1px solid #fae7cb;
            padding-bottom: 5%;
            margin-bottom: 0;

            text-align: center;
        }

        .TopOnePost {
            text-align: center;

            font-weight: bold;
        }
        .TopOnePost:hover, .TopPosts:hover {
            backdrop-filter: brightness(95%);
            border-radius: 15px;
        }
        .TopOnePost .TopOneNumber {
            float: left;

            font-size: 2rem;
            
            color: white;
        }
        .TopOnePost img {
            position: relative;
            left: -20px;
        }
        /* TOP POST AREA */
        .TopPostArea {
            overflow-y: scroll;
            padding-top: 0;
        }

            .Quotation {
                font-style: italic;
                font-size: 1.5rem;
            }
            .TopPosts, .TopOnePost {
                border-top: 1px solid #fae7cb;
                padding-top: 10px;
            }
                .TopPosts:last-child {
                    border-bottom: 1px solid #fae7cb;
                }
                .TopPosts .PostUserIcon {
                    float: left;
                    margin: 0 10px 0 0;
                    border: 2px solid #fae7cb;
                }
                .TopPosts p {
                    line-height: 1.3;
                }




.Down {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 65px;

    z-index: 2;

    margin-bottom: 5px;
    padding: 0 10px;

}
    /* DOWN MENU*/
    .DownMenu {
        height: 100%;

        padding: 5px 40px;

        box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.295);

        border: 2px solid white;
        border-radius: 100px;

        backdrop-filter: blur(3px);

        background: linear-gradient(to right, #ee097880, #ff6a0083);

        position: relative;
        top: 100%;                    /* SETADOS DE BASE PRA CRIAR A ANIMAÇÃO DE SLIDE */
    }
        /* DOWN MENU COMPONENTS */
        .DownMenuComponents {
            display: flex;
            width: 100%;
            align-items: center;
        }
        
            /* DOWN MENU SEARCH */
            .DownMenuSearch {
                width: 25%;
                display: flex;

                border-radius: 100px;

                padding: 5px;

                border: 2px solid white;
            }
                .DownMenuSearch input {
                    width: 100%;
                    border: none;
                    color: white;

                    outline: 0;

                    background-color: transparent;
                }
                    .DownMenuSearch input::placeholder {
                        color: white;
                        font-weight: bold;
                    }
                .DownMenuSearch span {
                    align-self: center;
                    height: 100%;
                    margin-right: 5px;

                    background-color: transparent;
                }

            /* DOWN MENU FRIENDS */
            .DownMenuFriends {
                display: flex;
                width: 75%;
                padding: 0 20px;

                align-items: center;
                justify-content: space-around;
            }

                /* DOWN MENU FRIEND CHAT */
                .DownMenuFriendChat img {
                    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.37);
                    border: 2px solid white;
                }
                    .DownMenuFriendChat img:hover {
                        filter: brightness(90%);
                    
                        transition: all 0.3s ease;
                    }








/* PROFILE PAGE */

.ProfileContent, .FriendsContent, .MessagesContent, .CommentArea {
    width: 60%;

    margin-left: 40%;

    padding: 3% 5% 80px 0;
}
    .UserProfile {
        display: flex;
        flex-direction: column;

        padding: 30px 25px;

        border-radius: 30px;

        margin: auto 0;

        background: linear-gradient(to right, #d1913c, #ffd194);

        text-align: center;

        height: 100%;

        min-height: 500px;

        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.329);

        border: 2px solid white;
    }
    .ProfileContent img {
        height: 100px;
        width: 100px;

        border-radius: 100%;

        border: 2px solid white;

        margin: 10px auto;
    }
    
    .UserExtraInfo {
        margin-top: 10px;
        height: 100%;
        border: 2px solid white;
        border-radius: 30px;
    }
    .UserExtraInfo table {
        height: 250px;
        width: 100%;
    }
        .UserExtraInfo td {
            padding: 0 10%;
        }
        .TableTitle {
            margin-right: auto;
        }
        .UserExtraInfo h4 {
            margin: 0;
            border: 2px solid white;

            border-radius: 100px;
        }







/* MESSAGES PAGE */
.MessagesContent {
    padding: 5% 5% 5% 0;
}
    .Message {
        padding: 15px 10px;

        display: flex;

        margin-bottom: 30px;

        align-items: center;

        background: linear-gradient(to right, #f2994a, #f2c94c);

        border-radius: 100px;

        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.384);

        border: 1px solid white;
    }
    .Message:hover {
        filter: brightness(90%);
    }
    .Message p {
        margin: 0;
    }
    .Message:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    .Message img {
        height: 70px;
        width: 70px;

        border-radius: 100%;

        border: 2px solid white;

        margin-right: 20px;
    }




.ProfileContent h1, .MessagesContent h1, .FriendsContent h1 {
    text-align: center;
    background-color: rgb(252, 251, 190);
    border-radius: 100px;
    border: 3px solid white;

    margin-bottom: 20px;
}




/* FRIENDS PAGE */

.FriendsContent {
    padding: 5% 5% 5% 0;
}
    .FriendRequestArea {
        display: flex;
        flex-direction: column;

        background-color: purple;

        border-radius: 20px;
        border: 2px solid white;

        padding: 10px;

        margin-bottom: 5%;
    }
        .FriendRequestArea h5 {
            margin: auto;
        }
        .FriendRequestList {
            display: flex;
            flex-wrap: wrap;

            padding: 5px 0;
        }
        .FriendRequest {
            display: flex;

            border-radius: 100px;

            padding: 5px;

            margin-bottom: 5px;

            background-color: pink;

            min-width: 195px;

            align-items: center;

            border: 2px solid white;
        }
            .FriendRequest img {
                margin-right: 5px;
            }

    .Friend li {
        display: flex;

        border-radius: 100px;

        border: 1px solid white;

        margin-bottom: 20px;

        align-items: center;

        padding: 5px 10px;
    }
    .Friend li:hover {
        background-color: wheat;
    }
    .Friend img {
        height: 70px;
        width: 70px;

        border-radius: 100%;
        border: 2px solid white;

        margin-right: 20px;
    }
    .Friend .UserInfo * {
        margin: 0;
    }
    .Friend p {
        color: rgb(252, 249, 245);
    }






/* WELCOME PAGE */
 .WelcomePage {
    display: flex;

    height: 100%;
    min-height: 100vh;
}
    .WelcomeContent {
        display: flex;
        flex-direction: column;

        min-height: 70vh;
        
        width: 60%;
        min-width: 450px;

        margin: auto;

        text-align: center;

        background: linear-gradient(to right, #f2994a, #f2c94c);
        border-radius: 40px;
        border: 2px solid white;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.336);
    }
        .WelcomePage div {
            padding: 15px;
        }
        .WelcomePage .Brand {
            flex-direction: column;
        }
        .WelcomePage .Brand img {
            height: 100px;
            width: 100px;
        }
        .WelcomeText {
            margin: auto;
        }
        .WelcomeButtons {
            display: flex;
            flex-wrap: wrap;

            justify-content: space-around;

            padding: 10px 5%;
        }
        .WelcomeButtons a {
            width: 100%;
        }
        .WelcomeButtons button {
            height: 70px;
            width: 70%;
        }






/* LOGIN-REGISTER PAGE */
.LoginPage {
    display: flex;

    height: 100%;
    min-height: 100vh;
    
    padding: 50px 0;
}
.LoginPage a {
    text-decoration: none;
}
    .LoginMenu {
        display: flex;

        height: 80vh;
        min-height: 450px;
        
        width: 75%;
        min-width: 700px;

        margin: auto;

        background: linear-gradient(to right, #f09819, #edde5d); 

        border-radius: 30px;

        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.445);

        border: 2px double wheat;
    }
        
        .LoginMenu .Brand {
            height: 100%;
            width: 60%;

            float: left;
            
            display: flex;
            flex-direction: column;

            align-items: center;
        }
        .LoginMenu .Brand img {
            width: 300px;
            height: 300px;

            margin-bottom: 0;
        }
        .LoginMenu .Brand h1 {
            
            width: 100%;
            
            font-size: 3rem;
        }
        
        .LoginMenu .LoginRegisterData {
            float: right;

            display: flex;
            flex-direction: column;

            height: 100%;
            width: 40%;

            padding: 5% 5% 0;

            background-color: white;

            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
        }
            .LoginRegisterData h1 {
                text-align: center;

                margin-bottom: 30px;
                
                color: black;

                text-shadow: none;
            }
            .UsernameField, .PasswordField {
                display: flex;

                border: 1px solid black;

                border-radius: 100px;

                padding: 10px;

                margin-bottom: 5%;
            }
                .UsernameField svg, .PasswordField svg {
                    margin-right: 10px;
                }
                .UsernameField input, .PasswordField input {
                    border: none;

                    width: 100%;

                    outline: none;
                }
            .FacebookField {
                margin-top: auto;
            }
            .FaebookField button {
                display: flex;

                padding: 15px;

                align-items: center;
            }
            .FacebookField svg {
                height: 30px;
                width: 30px;
                margin-right: 20px;
            }
            .SwitchPageButton {
                position: relative;
                bottom: 10px;
                margin: 30px auto 0;
            }





/* LOADING PAGE */

.LoadingPage {
    height: 100%;
    min-height: 100vh;
    padding: 5% 0;
}
    .LoadingContent {
        height: 100%;
        min-height: 450px;
        width: 40%;
        min-width: 400px;
        margin: auto;
        text-align: center;

        background: linear-gradient(to right, #f09819, #edde5d);
        border-radius: 50px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.377);
        border: 2px solid white;

        padding: 3% 0;
    }
    .LoadingContent .Brand {
        margin-bottom: 20px;
        flex-direction: column;
    }
    .LoadingContent img {
        height: 150px;
        width: 150px;
    }
    .LoadingContent img:last-child {
        height: 100px;
        width: 100px;
    }
    .LoadingContent h1 {
        margin-bottom: 5%;
    }




/* NOT AUTHORIZED PAGE */

.NotAuthorizedPage {
    display: flex;

    padding: 5%;

    height: 100vh;
}
    .NotAuthorizedContent svg {
        height: 100px;
        width: 100px;
    }
    .NotAuthorizedContent {
        text-align: center;

        margin: auto;
    }
    .NotAuthorizedButtons {
        display: flex;

        justify-content: space-around;

        margin: 20px;
    }





/* AREA DE COMMENTS DOS POSTS */
.CommentContent {
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
    
    padding: 3% 5%;

    border-radius: 30px;

    border: 1px solid white;

    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.603);

}
    .Comments {
        display: flex;
        flex-direction: column;

        margin-bottom: auto;
    }
        .Comment {
            display: flex;
            flex-wrap: wrap;

            background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);

            border: 2px solid white;
            border-radius: 20px;

            padding: 10px;

            margin-bottom: 10px;
        }
        .Comment h6, p {
            margin: 0;
        }
        .Comment:last-child {
            margin-bottom: auto;
        }
            .CommentHeader {
                display: flex;

                align-items: center;

                margin-right: 10%;
            }
                .CommentHeader img {
                    height: 30px;
                    width: 30px;

                    margin-right: 10px;
                }
            .CommentBody {
                display: flex;
                align-items: center;
            }
        .NewCommentForm {
            position: relative;

            margin-top: 5%;
        } 
            .NewCommentForm textarea {
                width: 100%;

                border-radius: 20px;

                outline: none;

                padding: 5px;

                resize: none;

                border: 2px solid bisque;
            }
`