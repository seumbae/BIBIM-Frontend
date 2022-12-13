import styled from "styled-components";
import List from "./List";

const ListsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

const Lists = ({ filter }) => {
	const list = [
		{
			data: '"===" and "!==" should be used instead of "==" and "!="',
			Languages: "Javascript",
			Tag: ["suspicious"],
		},
		{
			data: '"switch" statements should have "default" clauses',
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "A new session should be created during user authentication",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "All code should be reachable",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "Allowing confidential information to be logged is security-sensitive",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "Allowing requests with excessive content length is security-sensitive",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "Assignments should not be made from within sub-expressions",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "Boolean expressions should not be gratuitous",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "Cipher algorithms should be robust",
			Languages: "Javascript",
			Tag: ["CWE"],
		},
		{
			data: "A new session should be created during user authentication",
			Languages: "Javascript",
			Tag: ["CWE", "OWASP"],
		},
		{
			data: "Allowing confidential information to be logged is security-sensitive",
			Languages: "Javascript",
			Tag: ["CWE", "OWASP"],
		},
		{
			data: '"Exception" and "BaseException" should not be raised',
			Languages: "Python",
			Tag: ["CWE"],
		},
		{
			data: "A secure password should be used when connecting to a database",
			Languages: "Python",
			Tag: ["CWE", "OWASP"],
		},
		{
			data: "All code should be reachable",
			Languages: "Python",
			Tag: ["CWE"],
		},
		{
			data: "Allowing both safe and unsafe HTTP methods is security-sensitive",
			Languages: "Python",
			Tag: ["CWE", "OWASP"],
		},
		{
			data: "Cipher algorithms should be robust",
			Languages: "Python",
			Tag: ["CWE", "OWASP"],
		},
	];

	const filtered = list.map((item) => {
		return filter.Languages.includes(item.Languages) ||
			filter.Tag.some((tag) => item.Tag.includes(tag))
			? item
			: null;
	});

	return (
		<ListsWrapper>
			{filter.Languages.length > 0 || filter.Tag.length > 0
				? filtered.map((item, index) => {
						return item ? <List key={index} data={item} /> : null;
				  })
				: list.map((item, index) => {
						return <List key={index} data={item} />;
				  })}
		</ListsWrapper>
	);
};

export default Lists;
