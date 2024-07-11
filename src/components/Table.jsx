/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

const Table = ({search}) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/companies.json')
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const filteredCompanies = companies.filter((company) =>
   company.Company.toLowerCase().includes(search.toLowerCase())
 );
  return (
    <div className="overflow-x-auto mt-4">
      <div className="overflow-y-auto h-[200px]">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-start">Company</th>
              <th className="py-2 px-4 border-b">Ticker</th>
              <th className="py-2 px-4 border-b">Vertical</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Market Cap ($B)</th>
              <th className="py-2 px-4 border-b">Revenue Growth</th>
              <th className="py-2 px-4 border-b">Gross Margin</th>
              <th className="py-2 px-4 border-b">EV/Revenue</th>
              <th className="py-2 px-4 border-b">YTD Performance</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b text-start">{company.Company}</td>
                <td className="py-2 px-4 border-b">{company.Ticker}</td>
                <td className="py-2 px-4 border-b">{company.Vertical}</td>
                <td className="py-2 px-4 border-b">{company.Price}</td>
                <td className="py-2 px-4 border-b">{company["Market Cap ($B)"]}</td>
                <td className="py-2 px-4 border-b">{company["Revenue Growth"]}</td>
                <td className="py-2 px-4 border-b">{company["Gross Margin"]}</td>
                <td className="py-2 px-4 border-b">{company["EV/Revenue"]}</td>
                <td className="py-2 px-4 border-b">{company["YTD Performance"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
