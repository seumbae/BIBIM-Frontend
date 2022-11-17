import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';

const SkeletonArea = styled.div`
  background-color: #FFFFFF;
  border-radius: 6.4px;
  padding: 12px 8px;
`
const Skeletons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 2rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ListSkeleton = () => {
  return (
    <SkeletonArea>
      <Skeletons>
        <Wrapper>
          <Skeleton variant="text" width={120} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={360} sx={{ fontSize: '1rem' }} />
        </Wrapper>
        <Wrapper>
          <Skeleton variant="text" width={360} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={360} sx={{ fontSize: '1rem' }} />
        </Wrapper>
        <Skeleton width={720} variant="rounded" /> 
      </Skeletons>
    </SkeletonArea>
  );
}

export default ListSkeleton;
