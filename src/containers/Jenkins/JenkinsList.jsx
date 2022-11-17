import styled from "styled-components";

const ListWrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: 6.4px;
  padding: 12px 8px;
  display: flex;
`
const Info = styled.div`
  position: relative;
  flex: 1;
`

const CheckBox = styled.input`
  margin: 0;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #000000;
  border-radius: 3px;
  margin-right: 1rem;
  cursor: pointer;
  &:checked{
    background-color: #000000;
    border: 2px solid #000000;
  }
`
const AdditionalInfos = styled.div`
  display: flex;
  color: #555555;
  font-size: 0.8rem;
  gap: 1rem;
  position: absolute;
  right: 1rem;
`
const Desc = styled.div`
  max-width: 60%;
  color: #555555;
  font-size: 0.8rem;
  margin-top: 1rem;
`

const List = ({setChecked, name, jenkins, owner, created, updated}) => {
  return (
    // <div onClick={(prev) => setChecked(prev => !prev)}>hello</div>
    <ListWrapper>
      <CheckBox type="checkbox" onClick={(prev) => setChecked(prev => !prev)} />
      <Info>
        <div style={{display:"flex"}}>
          <div style={{fontWeight: 500}}>{name}</div>
          <AdditionalInfos>
            {jenkins.map((item) => {
              return <div>#{item}</div>
            })}
            <div>Owner: {owner}</div>
            <div>Created: {created}</div>
            <div>Updated: {updated}</div>
          </AdditionalInfos>
        </div>
        <Desc>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ...</Desc>
      </Info>
    </ListWrapper>
  )
}

export default List;