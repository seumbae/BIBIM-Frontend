import DetailIssueComponent from "./DetailIssue";

const AllIssueTableList = ({ dataList }) => {
	const { data } = dataList;
	return (
		<>
			{data.length > 0
				? data.map((item) => (
						<DetailIssueComponent
							key={dataList._id.$oid}
							data={item}
							pipelineName={dataList.pipelineName}
						/>
				  ))
				: null}
		</>
	);
};

export default AllIssueTableList;
