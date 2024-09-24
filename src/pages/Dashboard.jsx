import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function DashBoard() {
  // Implement after back-end
  
  // const [finData, setFinData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getFinData();
  //       setFinData(data);
  //     } catch (error) {
  //       setError('Failed to fetch data');
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, []); // Empty dependency array means this runs once after the component mounts

  // if (loading) {
  //   return <div><Navbar current={"Dashboard"}/></div>;
  // }

  // if (error) {
  //     return (
  //       <>
  //       <ProtectedRoute>
  //           <div>Error: {error}</div>
  //       </ProtectedRoute>
  //       </>
  //     );
  // }

  // const { currBal, totInc, totExp } = finData;
  // const data = [currBal, totInc, totExp];
  return (
    <>
      <div className="container">
        <Navbar current={"Dashboard"} />

        {/* <!-- Main Content --> */}
        <div class="main-content">
          <div class="balance-section">
            <div class="balance-card">
              <p>Current Balance</p>
              <h2> </h2>
            </div>
            <div class="balance-card">
              <p>Total Income</p>
              <h2></h2>
            </div>
            <div class="balance-card">
              <p>Total Expense</p>
              <h2></h2>
            </div>
          </div>

          {/* <!-- Transaction Chart and Pie Chart --> */}
          <div class="charts-section">
            <div class="chart">
              <h3>Latest Transactions</h3>
              <img src="chart-placeholder.png" alt="Transaction Chart" />
            </div>
            <div class="chart">
              <h3>Expense Breakdown</h3>
              <img src="pie-chart-placeholder.png" alt="Pie Chart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
