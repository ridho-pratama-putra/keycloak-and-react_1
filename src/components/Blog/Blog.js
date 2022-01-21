import React from 'react';
import { getBlog } from "../../action/Blog";
import {useDispatch} from "react-redux";

const Blog = () => {
    const dispatch = useDispatch();
    const getBlogFromClick =  async () => {
        const doGetBlog = getBlog();
        dispatch(doGetBlog);
    }
    return (
        <div><button onClick={() => getBlogFromClick()}>CLick</button></div>
    );
};

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
