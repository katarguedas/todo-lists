import Post from "./Post"
import InputPost from "./InputPost"

import { useTodoAppContext } from "../providers/TodoAppContext"

//------------------------------------------------

const Postlist = () => {

    const { posts, deletePost } = useTodoAppContext()

    return (
        <div>
            <InputPost />
            {
                posts ?
                    posts.map(e => (
                        <Post
                            post={e}
                            key={e.id}
                            deletePost={deletePost} />
                    ))
                    : null
            }

        </div>
    )
}

export default Postlist;


//---------------------------------------------
