import { useState, useEffect } from 'react';
import DateSelector from '../components/DateSelector';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

function Dashboard2() {
  const [productComparisonData, setProductComparisonData] = useState([]);
  const [categoryComparisonData, setCategoryComparisonData] = useState([]);
  const [comparisonTableData, setComparisonTableData] = useState([]);
  const [selectedDates, setSelectedDates] = useState({ date1: '', date2: '' });

  useEffect(() => {
    fetch('/historicalSales.json')
      .then(response => response.json())
      .then(data => {
        setSelectedDates({ date1: data.date1, date2: data.date2 });
        setComparisonTableData(data.sales);

        const productNames = data.sales.map(sale => sale.name);
        const productSalesDate1 = data.sales.map(sale => sale.date1Sales);
        const productSalesDate2 = data.sales.map(sale => sale.date2Sales);
        setProductComparisonData({
          labels: productNames,
          values: [productSalesDate1, productSalesDate2],
        });

        const categories = [...new Set(data.sales.map(sale => sale.category))];
        const categorySalesDate1 = categories.map(category =>
          data.sales
            .filter(sale => sale.category === category)
            .reduce((sum, sale) => sum + sale.date1Sales, 0)
        );
        const categorySalesDate2 = categories.map(category =>
          data.sales
            .filter(sale => sale.category === category)
            .reduce((sum, sale) => sum + sale.date2Sales, 0)
        );
        setCategoryComparisonData({
          labels: categories,
          values: [categorySalesDate1, categorySalesDate2],
        });
      })
      .catch(error => console.error('Error fetching historical sales data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Comparison</h1>
      <DateSelector onChange={() => {}} selectedDates={selectedDates} />
      <div className="mb-8 w-[70%] ml-20">
        <SalesChart data={productComparisonData} title="Product Sales Comparison" />
        <SalesChart data={categoryComparisonData} title="Category Sales Comparison" />
      </div>
      <div className='w-[70%] ml-20'>

      <SalesTable data={comparisonTableData} columns={['Product Name', 'Category', 'Date 1 Sales', 'Date 2 Sales', 'Difference']} />
      </div>
    </div>
  );
}

export default Dashboard2;
