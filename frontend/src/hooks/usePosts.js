import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

//-------------------------------------------

const usePosts = () => {

    const [posts, setPosts] = useState();


    const loadPostsFromBackend = async () => {
        var config = {
            method: 'get',
            url: '/posts',
            headers: {}
        };

        const response = await axios(config);

        return (response.data);
    }

    useEffect(() => {
        loadPostsFromBackend().then(res => {
            setPosts(res)
        })
    }, [])

    // addPost --------------------------

    const addPostToBackend = async post => {

        var config = {
            method: 'post',
            url: '/newpost',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(post)
        };

        const response = await axios(config);

        // console.log(JSON.stringify(response.data));
        return (response.data);
    };

    const addPost = (title, text) => {
        const newPost =
        {
            title: title,
            text: text,
            id: uuidv4()
        }
        setPosts([...posts, newPost]);
        addPostToBackend(newPost);
    }


    // delete Post --------------------

    const deletePostFromBackend = async id => {
        var config = {
            method: 'delete',
            url: '/deletepost?id='+id,
            headers: {}
        };

        const response = await axios(config);

        return (response.data);
    }

    const deletePost = (post) => {
        const res = posts.filter(e => (e.id !== post.id))
        setPosts(res)
        deletePostFromBackend(post.id)
    }

    return [posts, setPosts, addPost, deletePost];
}

export default usePosts;