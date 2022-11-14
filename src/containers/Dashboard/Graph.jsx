import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Graph = ({Data}) => {
  const data = [
    {
      "name": "0",
      "A": 49,
      "B": 38,
      "C": 29,
      "D": 22,
    },
    {
      "name": "1",
      "A": 55,
      "B": 31,
      "C": 22,
      "D": 29,
    },
    {
      "name": "2",
      "A": 78,
      "B": 45,
      "C": 34,
      "D": 23,
    },
    {
      "name": "3",
      "A": 129,
      "B": 86,
      "C": 45,
      "D": 34,
    },
    {
      "name": "4",
      "A": 133,
      "B": 89,
      "C": 65,
      "D": 28,
    },
    {
      "name": "5",
      "A": 153,
      "B": 109,
      "C": 50,
      "D": 38,
    },
    {
      "name": "6",
      "A": 121,
      "B": 132,
      "C": 56,
      "D": 21,
    },
    {
      "name": "7",
      "A": 232,
      "B": 76,
      "C": 22,
      "D": 17,
    }, 
    {
      "name": "8",
      "A": 289,
      "B": 53,
      "C": 32,
      "D": 12,
    },
    {
      "name": "9",
      "A": 289,
      "B": 76,
      "C": 18,
      "D": 8,
    },
  ];
    // const [data, setData] = useState(Data);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // setData(Data);
      setLoading(false);
    }, [Data]);
  
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
            <LineChart width={680} height={250} data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="A" stroke="#00AA00" />
              <Line type="monotone" dataKey="B" stroke="#F5C037" />
              <Line type="monotone" dataKey="C" stroke="#F58737" />
              <Line type="monotone" dataKey="D" stroke="#DD4433" />
            </LineChart>
        )}
      </div>
    );
}

export default Graph;