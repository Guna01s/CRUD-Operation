import { useEffect, useState } from "react";
import EmpCreate from "./EmpCreate";
import { Link, Navigate, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetails = (id) => {
    navigate("/employee/details/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm(`Do you want to Remove ?`)) {
      fetch("  http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfuly");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="head">
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>PHONE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
