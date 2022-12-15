import {
	Cell,
	Label,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

const SecurityGradePieGraph = ({item}) => {
	const data = [
		{
			name: "A",
			value: item.A,
		},
		{
			name: "B",
			value: item.B,
		},
		{
			name: "C",
			value: item.C,
		},
		{
			name: "D",
			value: item.D,
		},
		{
			name: "E",
			value: item.E,
		},
	];

	let totalValue = 0;
	data.forEach((item) => {
		totalValue += item.value;
	});

	const COLORS = ["#00AA00", "#F5C037", "#F58737", "#FF0000", "#4a4a4a"];
	return (
		<ResponsiveContainer >
			<PieChart>
				<Legend layout="vertical" verticalAlign="bottom" align="right" />
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={120}
					innerRadius={80}
					fill="#8884d8"
				>
					<Label
						value={totalValue}
						position="centerBottom"
						fontSize="2rem"
						style={{ fontSize: "3rem", fontWeight: "600", color: "#263690" }}
					/>
					<Label
						value="Total Seucurity Score"
						position="centerTop"
						style={{
							fontSize: "0.9rem",
							fontWeight: "600",
							transform: `translateY(3%)`,
						}}
					/>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default SecurityGradePieGraph;
