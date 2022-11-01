import Post from "./Post"
import InputPost from "./InputPost"

import { useTodoAppContext } from "../providers/TodoAppContext"

//------------------------------------------------

const Postlist = () => {

    const { posts, deletePost } = useTodoAppContext()

    if (posts !== undefined) {
        return (
            <div>
                <InputPost />
                <Post post={posts[0]} key={posts[0].id} deletePost={deletePost} />
                <Post post={posts[1]} key={posts[1].id} deletePost={deletePost} />

            </div>
        )
    }
}

export default Postlist;


//---------------------------------------------
