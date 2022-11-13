import styled from "styled-components";

const Branch = styled.div`
  background-color: #D9D9D9;
  padding: 4px 12px;
  font-size: 0.8rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
`

const BranchComponent = ({ name }) => {
  return <Branch>{name}</Branch>;
}

export default BranchComponent;