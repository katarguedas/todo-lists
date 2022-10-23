import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';


//-------------------------------------------

const usePosts = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
            setPosts([]);
        }
    , [])

    // addPost --------------------------
    const addPost = (title, text) => {
        const newPost =
        {
            title: title,
            text: text,
            id: uuidv4()
        }
        setPosts([...posts, newPost]);
    }

    // delete Post --------------------

    const deletePost = (post) => {
        const res = posts.filter(e => (e.id !== post.id))
        setPosts(res)
    }


    return [posts, setPosts, addPost, deletePost];
}

export default usePosts;