import { useTodoAppContext } from "../providers/TodoAppContext";
import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";

//--------------------------------------------

const Post = ({post}) => {

  const { deletePost } = useTodoAppContext()

  let number = Math.floor(Math.random()*6)
  const rest = number % 2
  number = rest > 0 ? number : number * -1 ;

  const onDeletePostClick = (post) => {
    deletePost(post)
  }

    return (
        <StyledPostGroup>
        <StyledPostIt number={number+"deg"}>
        <StyledH3>{post.title}</StyledH3>
        <StyledPost>{post.text}</StyledPost>
        <StyledTrash onClick={() => onDeletePostClick(post)} />
        </StyledPostIt>
        </StyledPostGroup>

    )
}

export default Post;


//----------------------------------------------

const StyledPostGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  font-family: 'Montserrat', 'Helvetica Neue',
  sans-serif;
  top: 10px;
  padding: 5px;
  margin: 20px;
`

const StyledPostIt = styled.div`
  margin:30px;
  width:170px;
  height:150px;
  padding:20px 10px;
  // background: #fefabc linear-gradient(150deg, #efec88 0%, #fefabc 100%);
  background: #eed5f3 linear-gradient(150deg, #d298e9 0%, #e7d1eb 100%);
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
  transform: rotate(${props => props.number});
`
const StyledH3 = styled.h3`
  font-size: 1.25rem;
`
  const StyledPost = styled.p`
    color: blue;
  `
const StyledTrash = styled(GoTrashcan)`
position: absolute;
right: 10px;
bottom: 12px;
`
