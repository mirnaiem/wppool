import  { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('/indexData.json')
      .then((res) => res.json())
      .then((data) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const formattedData = [];

        
        months.forEach((month) => {
          const formattedItem = {
            month,
            WPPOOL: parseFloat(data.companies[0].monthlyIndex[month].replace('%', '')), 
            Google: parseFloat(data.companies[1].monthlyIndex[month].replace('%', '')), 
            Microsoft: parseFloat(data.companies[2].monthlyIndex[month].replace('%', '')), 
            Twitter: parseFloat(data.companies[3].monthlyIndex[month].replace('%', '')), 
          };

          formattedData.push(formattedItem);
        });

        setChartData(formattedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [opacity, setOpacity] = useState({});

  const handleMouseEnter = (dataKey) => {
    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (dataKey) => {
    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div className="mt-8" style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" dataKey="WPPOOL" strokeOpacity={opacity.WPPOOL} stroke="#fb7957" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Google" strokeOpacity={opacity.Google} stroke="#7c79e6" />
          <Line type="monotone" dataKey="Microsoft" strokeOpacity={opacity.Microsoft} stroke="#7ca63a" />
          <Line type="monotone" dataKey="Twitter" strokeOpacity={opacity.Twitter} stroke="#6f34a1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
