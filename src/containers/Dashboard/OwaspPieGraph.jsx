import { useEffect, useState } from "react";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
  Tooltip
} from "recharts";
const OwaspPieGraph = ({ owasp }) => {
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	const COLORS = [
		"#BCBD22",
		"#17BECF",
		"#AEC7E8",
		"#FFBB78",
		"#98DF8A",
		"#FF9896",
		"#C5B0D5",
		"#C49C94",
		"#C7C7C7",
		"#DBDB8D",
	];

	useEffect(() => {
		Object.entries(owasp).forEach(([key, value]) => {
			data.push({ name: `OWASP-${key}`, value: value });
			setTotal((prev) => prev + value);
		});
	}, [owasp]);

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

export default OwaspPieGraph;
