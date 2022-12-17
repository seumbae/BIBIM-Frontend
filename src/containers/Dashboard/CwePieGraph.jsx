import { useEffect, useState } from "react";
import {
	Cell,
	Label,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
  Tooltip
} from "recharts";
const CwePieGraph = ({ cwe }) => {
	// const data = [];
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	const COLORS = [
		"#1F77B4",
		"#FF7F0E",
		"#2CA02C",
		"#D62728",
		"#9467BD",
		"#8C564B",
		"#E377C2",
		"#7F7F7F",
		"#BCBD22",
		"#17BECF",
		"#AEC7E8",
		"#FFBB78",
		"#98DF8A",
		"#FF9896",
		"#C5B0D5",
		"#C49C94",
		"#F7B6D2",
		"#C7C7C7",
		"#DBDB8D",
		"#9EDAE5",
		"#8C9440",
		"#BD9E39",
		"#E7BA52",
		"#AD494A",
		"#843C39",
	];

	useEffect(() => {
		Object.entries(cwe).forEach(([key, value]) => {
			data.push({ name: `CWE-${key}`, value: value });
			setTotal((prev) => prev + value);
		});
	}, [cwe]);

	return (
    <>
		<ResponsiveContainer>
			<PieChart>
				<Legend
					layout="vertical"
					verticalAlign="bottom"
					align="right"
          payload={data.filter(entry => entry.value > 0).map(entry => ({
            id: entry.name,
            value: entry.name,
            type: 'square',
            color: COLORS[data.indexOf(entry) % COLORS.length],
          }))}
          iconSize={10}
          wrapperStyle={{fontSize: "12px"}}
				/>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={120}
					fill="#8884d8"
				>
					{data.length > 0
						? data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
						  ))
						: null}
				</Pie>
				<Tooltip followCursor={false}/>
			</PieChart>
		</ResponsiveContainer>
    </>
	);
};

export default CwePieGraph;
