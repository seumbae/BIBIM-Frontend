import { useState } from "react";
import styled from "styled-components";
import Filter from "../../../components/Filter";
import VerticalLine from "../../../components/VerticalLine";
import Lists from "../../Profile/Lists";

const ProfileRoot = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1rem;
  flex: 1;
  margin-right: 9%;
`;

const Profile = () => {
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
        'CWE-125 - Out of bounds read',
        'CWE-78 - OS Command Injection',
        'CWE-416 - Use After Free',
        'CWE-22 - Path Traversal',
        'CWE-352 - Cross-Site Request Forgery (CSRF)',
			],
		},
	});

	//TODO: Security Category중 CWE 적용해야함
	const [checked, setChecked] = useState({Languages: [], SIS:[], SAST:[], DAST:[], SCA:[], Tag:[]});

	return (
		<ProfileRoot>
			<Filter data={data} checked={checked} setChecked={setChecked} />
			<VerticalLine />
			<Lists filter={checked} />
		</ProfileRoot>
	);
};

export default Profile;
