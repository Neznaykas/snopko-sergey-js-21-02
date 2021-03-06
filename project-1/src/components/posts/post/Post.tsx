import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

interface Props {
    darkTheme: boolean;
    UserName: string;
    UserImg: string;
    UserID: string;
    PostDate: string;
    PostImg: string;
    PostText: string;
    PostID: string;
}

const Posts = ({
                       darkTheme,
                       UserName,
                       UserImg,
                       UserID,
                       PostDate,
                       PostImg,
                       PostText,
                       PostID,
                   }: Props): ReactElement => {

    return (
        <div className={`posts__item ${darkTheme ? "posts__item_dark" : ""}`}>
            <div className="posts__item__user">
                <div className="posts__item__user__img_wrapper">
                    <img
                        className="posts__item__user__img"
                        src={UserImg}
                        alt={UserName}
                    />
                </div>
                <div className="posts__item__user__text">
                    <div className="posts__item__user__text__name">
                            <Link className="posts__item__user__text__name__link"
                                to={`/user/${UserID}`}>
                                {UserName}
                            </Link>
                    </div>
                    <div className="posts__item__user__text__date">{PostDate}</div>
                </div>
            </div>
            <div className="posts__item__post" title={PostText}>
                <div
                    className="posts__item__post__img_wrapper"
                    data-post={PostID}>
                    <img
                        className="posts__item__post__img"
                        src={PostImg}
                        alt={PostText}/>
                </div>
                <div className="posts__item__post__text">{PostText}</div>
            </div>
        </div>
    );
};

export default Posts;