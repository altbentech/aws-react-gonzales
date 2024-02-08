// JSON.tsx
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const JSONTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    Axios.get(apiUrl).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">JSON Data</h1>
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Link to="/home">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
    </Container>
  );
};

export default JSONTable;
