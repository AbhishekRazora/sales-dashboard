import { useState, useEffect } from 'react';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

function Dashboard1() {
  const [productSalesData, setProductSalesData] = useState([]);
  const [categorySalesData, setCategorySalesData] = useState([]);
  const [salesTableData, setSalesTableData] = useState([]);

  useEffect(() => {
    fetch('/todaySales.json')
      .then(response => response.json())
      .then(data => {
        setSalesTableData(data.products);

        const productNames = data.products.map(product => product.name);
        const productSales = data.products.map(product => product.salesAmount);
        setProductSalesData({ labels: productNames, values: productSales });

        const categories = [...new Set(data.products.map(product => product.category))];
        const categorySales = categories.map(category =>
          data.products
            .filter(product => product.category === category)
            .reduce((sum, product) => sum + product.salesAmount, 0)
        );
        setCategorySalesData({ labels: categories, values: categorySales });
      })
      .catch(error => console.error('Error fetching today\'s sales data:', error));
  }, []);

  return (
    <div className="p-4  ">
      <h1 className="text-2xl font-bold mb-4">Today's Sales</h1>
      <div className="mb-12 w-[70%] ml-20 ">
        <SalesChart data={productSalesData} title="Product Sales" />
        <SalesChart data={categorySalesData} title="Category Sales" />
      </div>
      <div className='w-[50%] ml-20'>

      <SalesTable data={salesTableData} columns={['Product Name', 'Category', 'Quantity Sold', 'Sales Amount']} />
      </div>
    </div>
  );
}

export default Dashboard1;
