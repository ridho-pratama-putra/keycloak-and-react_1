import React from 'react';
import { getBlog } from "../../action/Blog";
import {useDispatch} from "react-redux";
import Progress from "../Progress";
import Notification from "../Notification";

const Blog = () => {
    const dispatch = useDispatch();
    const getBlogFromClick =  async () => {
        const doGetBlog = getBlog();
        dispatch(doGetBlog);
    }
    return (
        <div>
            <Progress/>
            <Notification/>
            <button onClick={() => getBlogFromClick()}>CLick</button>
        </div>
    );
};

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
