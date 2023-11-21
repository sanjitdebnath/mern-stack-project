import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/fetch_user');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        let obj = result.data;

        let res = [];
        obj.forEach(element => {
          res.push(element)
        });
        console.log(res)
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const updateData = async () => {
      try {
        const response = await fetch('http://localhost:3000/update_user');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        let obj = result.data;

        let res = [];
        obj.forEach(element => {
          res.push(element)
        });
        console.log(res)
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  function editData(_id)
  {
    console.log(_id);
  }

  

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Data from API</h1>
      {data ? (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td><button type="button" onClick={() => editData(item._id)} className="btn btn-success" data-eid={item._id}>Edit</button></td>
                  <td><button type="button" id="delete" className="btn btn-danger" data-del_id={item._id}>Delete</button></td>
                </tr>
             ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
