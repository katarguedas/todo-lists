import List from "./List"
import InputPost from "./InputPost";
import Post from "../Post";

import { useTodoAppContext } from "../providers/TodoAppContext"
import { StyledH2 } from "../styled/StyledH2"

import styled from "styled-components"

// --------------------------------------------------

const Home = () => {

  const { todos, posts, deletePost } = useTodoAppContext()

  return (
    <div>
      <StyledListGroup>
        {
          todos ?
            todos.map(e => (
              <List
                list={e}
                key={e.id} />
            ))
            : null
        }
      </StyledListGroup>
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
    </div>

  )
}


export default Home;

// styled component --------------

const StyledListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
`


