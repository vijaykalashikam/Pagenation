import React, { useState } from "react";
import DataTable from "react-data-table-component";

function App() {
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true

    }
  ];

  const data = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "age": 28
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "age": 35
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "age": 42
    },
    {
      "id": 5,
      "name": "Eva Wilson",
      "email": "eva.wilson@example.com",
      "age": 26
    },
    {
      "id": 6,
      "name": "David Lee",
      "email": "david.lee@example.com",
      "age": 37
    },
    {
      "id": 7,
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "age": 31
    },
    {
      "id": 8,
      "name": "James Clark",
      "email": "james.clark@example.com",
      "age": 45
    },
    {
      "id": 9,
      "name": "Olivia White",
      "email": "olivia.white@example.com",
      "age": 29
    },
    {
      "id": 10,
      "name": "William Harris",
      "email": "william.harris@example.com",
      "age": 40
    },
    {
        "id": 11,
        "name": "Sophia Johnson",
        "email": "sophia.johnson@example.com",
        "age": 29
      },
      {
        "id": 12,
        "name": "Liam Brown",
        "email": "liam.brown@example.com",
        "age": 32
      },
      {
        "id": 13,
        "name": "Olivia Davis",
        "email": "olivia.davis@example.com",
        "age": 27
      },
      {
        "id": 14,
        "name": "Noah Taylor",
        "email": "noah.taylor@example.com",
        "age": 31
      },
      {
        "id": 15,
        "name": "Emma Wilson",
        "email": "emma.wilson@example.com",
        "age": 28
      },
      {
        "id": 16,
        "name": "Oliver Martinez",
        "email": "oliver.martinez@example.com",
        "age": 34
      },
      {
        "id": 17,
        "name": "Ava Jackson",
        "email": "ava.jackson@example.com",
        "age": 30
      },
      {
        "id": 18,
        "name": "Isabella Thomas",
        "email": "isabella.thomas@example.com",
        "age": 26
      },
      {
        "id": 19,
        "name": "Mia Clark",
        "email": "mia.clark@example.com",
        "age": 33
      },
      {
        "id": 20,
        "name": "Lucas Garcia",
        "email": "lucas.garcia@example.com",
        "age": 29
      },
      {
        "id": 21,
        "name": "William Lewis",
        "email": "william.lewis@example.com",
        "age": 36
      },
      {
        "id": 22,
        "name": "Sofia Martinez",
        "email": "sofia.martinez@example.com",
        "age": 32
      },
      {
        "id": 23,
        "name": "Benjamin Harris",
        "email": "benjamin.harris@example.com",
        "age": 40
      },
      {
        "id": 24,
        "name": "Amelia Scott",
        "email": "amelia.scott@example.com",
        "age": 28
      },
      {
        "id": 25,
        "name": "Henry Adams",
        "email": "henry.adams@example.com",
        "age": 35
      },
      {
        "id": 26,
        "name": "Mia Green",
        "email": "mia.green@example.com",
        "age": 31
      },
      {
        "id": 27,
        "name": "Ethan Rodriguez",
        "email": "ethan.rodriguez@example.com",
        "age": 33
      },
      {
        "id": 28,
        "name": "Ava Turner",
        "email": "ava.turner@example.com",
        "age": 27
      },
      {
        "id": 29,
        "name": "Liam Collins",
        "email": "liam.collins@example.com",
        "age": 30
      },
      {
        "id": 30,
        "name": "Chloe Hill",
        "email": "chloe.hill@example.com",
        "age": 29
      }
    ];
  const [records, setRecords] = useState(data)

  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <div>
      <div><input type='text-end ' onChange={handleFilter}></input></div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
      />
    </div>
  );
}

export default App;

