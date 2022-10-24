import Post from "./Post"
import InputPost from "./InputPost"
import { StyledH2 } from "../styled/StyledH2"

import { useTodoAppContext } from "../providers/TodoAppContext"
//------------------------------------------------

const Postlist = () => {

    const { posts, deletePost } = useTodoAppContext()

    return (
        <div>
            <StyledH2>Pinnwand</StyledH2>
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