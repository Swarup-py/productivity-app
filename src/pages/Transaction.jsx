import Navbar from "../components/Navbar";
import { useState } from "react";

function Transaction() {
  const [formData, setFormData] = useState({
    source: '',
    type: 'type of transactions',
    amount: '',
    category: 'Category',
    description: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form after submission if needed
  };

  return (
    <>
      <div className="container">
        <Navbar current={"Transaction"}/>
        <div className="main">
          <div className="topbox">
            <div className="box">
              <p className="header">Add Transactions</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="name or source"
                  className="name"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                />
                <br />
                <select
                  className="sel"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="type of transactions" disabled>Type of Transactions</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                <br />
                <input
                  type="number"
                  className="amt"
                  placeholder="Enter amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
                <br />
                <select
                  className="sel"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Category" disabled>Category</option>
                  <option value="salary">Salary</option>
                  <option value="pocket-money">Pocket Money</option>
                </select>
                <br />
                <input
                  type="text"
                  placeholder="description"
                  className="des"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <br />
                <button type="submit" className="Add-Transaction">
                  Add Transaction
                </button>
              </form>
            </div>
          </div>
          <div className="bottombox">
            <div className="box2">
              <table>
                <caption className="caption">Transaction History</caption>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Source</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over transactions here to display */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
