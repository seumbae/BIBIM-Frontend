import styled from "styled-components";

const Background = styled.div`
  // width: 16rem;
  height: 10rem;
  background-color: #EEEEF2;
  padding: 26px 21px;
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 6.4px;
`
const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  padding: 0.6rem 1rem;
  border-radius: 6.4px;
`

/* props 추가예정 */
const ProjectStatistics = () => {
  const title = {first:{name: 'Projects', value: 1}, second:{name: 'Lines', value: 2}, third:{name: 'Vulnerabilities', value: 3}};
  return (
    <Background>
      { Object.values(title).map((item) => {
          return (
            <Statistics>
              <div>{item.name}</div>
              <div>{item.value}</div>
            </Statistics>
      )})}
    </Background>
  )
}

export default ProjectStatistics;
