import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
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
    <div>
      {empdata && (
        <div>
          <h1>
            The Employee name is : {empdata.name}({empdata.id})
          </h1>
          <h3>Contact Details</h3>
          <h4>Email is : {empdata.email}</h4>
          <h4>Phone Number is : {empdata.phone}</h4>
          <Link to="/" className="btn btn-danger">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmpDetails;
