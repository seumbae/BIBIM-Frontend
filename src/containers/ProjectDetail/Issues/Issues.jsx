import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LoadingSkeleton } from "../../detail-issue/AllDetailIssue";

import { getSecurityList } from "../../../services/axios";
import Filter from "../../../components/Filter";
import VerticalLine from "../../../components/VerticalLine";
import AllIssueTableList from "../../../components/detail-issue/AllIssueTable";


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

const Issues = () => {
	const params = useParams();
	const [issueData, setIssueData] = useState([]);
	const [loading, setLoading] = useState(true);
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
			setIssueData(JSON.parse(res.data.result));
		}).then(setLoading(false));
	}, []);
	return (
		<IssueRoot>
			<Filter data={data} checked={checked} setChecked={setChecked} />
			<VerticalLine />
			{loading ? (
				<LoadingSkeleton />
			) : (
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
			)}
		</IssueRoot>
	);
};

//14, 3, 6, 110, 220

export default Issues;
