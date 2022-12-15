import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LazyLog, ScrollFollow, LineContent, LinePart } from "react-lazylog";

import Header from "../common/Header";
import CloseIcon from "@mui/icons-material/Close";

const IconWrapper = styled.div`
	display: flex;
	height: 3rem;
	align-items: center;
	margin-left: 2.5rem;
`;
const Close = styled(CloseIcon)`
	cursor: pointer;
	padding-left: 1rem;
`;

const Build = () => {
	const navigation = useNavigate();
	const onHandleClick = () => {
		navigation(-1);
	};
	const url = "http://222.234.124.57:52500/api/v1/pipeline/getStream";
  const body = { pipeline_name: "test2", branch: "master" };
	// useEffect(()=> {
	//   getStream({pipeline_name:"test2", branch:"master"}).then((res) => {
	//     console.log(res);
	//     console.log(res.data);
	//   })
	// },[]);

  //TODO: 빌드 로그에서 Started by user unknown or anonymous 라는 문구를 찾아서 123123123으로 바꾸는 작업을 해야함
	return (
		<>
			<Header userName={"admin"} />
			<IconWrapper>
				<Close onClick={onHandleClick} fontSize="large" />
			</IconWrapper>
			<div style={{height: 600, width: '100%'}}>
				<ScrollFollow
					startFollowing
					render={({ follow }) => (
						<LazyLog
							url={url}
							stream
							follow={follow}
							fetchOptions={{
								method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
							}}
						>
              <LinePart format={text => text.replace('Started by user unknown or anonymous','123123123')} />
            </LazyLog>
					)}
				/>
			</div>
		</>
	);
};

export default Build;
