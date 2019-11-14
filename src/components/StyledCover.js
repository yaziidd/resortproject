import styled from 'styled-components';
import defaultBcg from '../images/defaultBcg.jpeg';

const StyledCover = styled.div`
min-height: 60vh;
align-items: center;
justify-content: center;
display: flex;
background: url(${(props)=> (props.img) ? props.img : defaultBcg}) center/cover no-repeat;
`
export default StyledCover;