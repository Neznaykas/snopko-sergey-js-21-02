import React, {ReactElement, useContext, useEffect} from "react";

import "./Posts.scss";
import Post from "./post/Post";
import {Theme} from "../theme/Theme";
import {PostPreview, PostsState} from "../../types/dumMyApiResponses";
import {Pagination} from "antd";

interface Props {
    posts: PostsState;
    getPosts: (page: number, limit: number) => void;
}

const Posts = ({ posts, getPosts }: Props): ReactElement => {
    const setNewPage = (newp: number): void => {
        getPosts(newp, posts.limit);
    };

    const setNewLimit = (newl: number): void => {
        getPosts(0, newl);
    };

    useEffect(() => {
        getPosts(1, 6);
    }, []);

    const themeContext = useContext(Theme);

    return (
        <div className="posts_wrapper">
            <div className="posts">
                {posts.posts.map((e: PostPreview) => (
                    <Post
                        key={e.id}
                        darkTheme={themeContext.darkTheme ? themeContext.darkTheme : false}
                        UserName={`${e.owner.title} ${e.owner.lastName} ${e.owner.firstName}`}
                        UserID={e.owner.id}
                        UserImg={e.owner.picture}
                        PostDate={e.publishDate}
                        PostImg={e.image}
                        PostText={e.text}
                        PostID={e.id}
                    />
                ))}
                <Pagination defaultCurrent={1} current={posts.page} onChange={setNewPage}  total={posts.total} />
            </div>
        </div>
    );
};

export default Posts;