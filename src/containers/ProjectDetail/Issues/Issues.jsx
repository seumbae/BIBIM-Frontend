import { DataArray } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getSecurityList } from "../../../services/axios";
import Filter from "../../../components/Filter";
import VerticalLine from "../../../components/VerticalLine";
import AllIssueTableList from "../../../components/detail-issue/AllIssueTable";
// /getSecurityResult/<id>
//     <개요>
//     id는 bibimResultList에 날아오는 rawResultID 를 입력하면 된다.
//     이 경우, 해당 프로젝트의 모든 이슈를 반환 받는다.
//     method: GET
//     response: json {
//     }

const IssueRoot = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1rem;
	flex: 1;
	margin-right: 9%;
`;
const Lists = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.5rem;
`;
const None = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: #4a4949;
	font-size: 0.8rem;
`;

const Issues = () => {
	const params = useParams();
	const [issueData, setIssueData] = useState([]);

	const [data, setData] = useState({
		Languages: ["Javascript", "Python"],
		Stages: {
			SIS: ["Gitleaks", "GitGuardian"],
			SAST: ["CodeQL", "Semgrep"],
			DAST: ["OWASP ZAP"],
			SCA: ["OWASP DependencyCheck"],
		},
		Tag: ["CWE", "OWASP"],
		"Security Category": {
			CWE: [
				"CWE-787 - Out of bounds write",
				"CWE-79 - Cross-Site Scription (XSS)",
				"CWE-89 - SQL Injection",
				"CWE-20 - Improper Input Validation",
				"CWE-125 - Out of bounds read",
				"CWE-78 - OS Command Injection",
				"CWE-416 - Use After Free",
				"CWE-22 - Path Traversal",
				"CWE-352 - Cross-Site Request Forgery (CSRF)",
			],
		},
	});

	//TODO: Security Category중 CWE 적용해야함
	const [checked, setChecked] = useState({
		Languages: [],
		SIS: [],
		SAST: [],
		DAST: [],
		SCA: [],
		Tag: [],
	});
	useEffect(() => {
		getSecurityList().then((res) => {
      console.log(JSON.parse(res.data.result));
			setIssueData(JSON.parse(res.data.result));
		});
	}, []);
	return (
		<IssueRoot>
			<Filter data={data} checked={checked} setChecked={setChecked} />
			<VerticalLine />
			{issueData.length > 0 ? (
				<Lists>
					{issueData.map((oneProjectItem) => {
						if (oneProjectItem.pipelineName === params.projectTitle) {
							return <AllIssueTableList key={oneProjectItem["_id"]["$oid"]} dataList={oneProjectItem}/>;
						}
            else {
              return null;
            }
					})}
				</Lists>
			) : (
				<None>검사결과가 존재하지 않아 Issue가 존재하지 않습니다.</None>
			)}
		</IssueRoot>
	);
};

//14, 3, 6, 110, 220

export default Issues;
