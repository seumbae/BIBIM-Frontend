import styled from "styled-components";

const Component = styled.div`
	background-color: ${({ text }) => {
		if (text === "Passed" || text === "A") {
			return "#00AA00";
		}
		if (text === "Failed" || text === "D") {
			return "#FF0000";
		}
		if (text === "B") {
			return "#F5C037";
		}
		if (text === "C") {
			return "#F58737";
		}
	}};
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	// border-radius: 0 6.4px 6.4px 0;
  border-radius: ${({ index }) => {
    if (index === 0) {
      return "6.4px 0 0 6.4px";
    }
    if (index === arrlen - 1) {
      return "0 6.4px 6.4px 0";
    }
    return "0";
  }};
	flex: ${(props) => props.val};
	gap: 0.5rem;
`;

let arrlen = 0;

const Result = ({ item }) => {
  arrlen = Object.keys(item[1]).length;
	return (
		<>
			{
				<>
					{Object.entries(item[1]).map((item, index) => {
            return (
              <Component text={item[0]} val={item[1]} index={index}>
                <div>{item[0]}</div>
                <div>{item[1]}</div>
              </Component>
            );
          })}
				</>
			}
		</>
	);
};

export default Result;