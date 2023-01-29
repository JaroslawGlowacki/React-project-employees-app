import { Card, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { EmployeesListProps } from "../../helpers/interfaces";

const EmpoyeesList = () => {
  return (
    <>
      <ListItem>
        <Card>
          <ListItemText>
            id: 1, firstName: "John", lastName: "Doe", dateOfBirth:
            "1980-01-01", position: "Production worker", salary: "2900",
          </ListItemText>
        </Card>
      </ListItem>
    </>
  );
};

export default EmpoyeesList;

//: React.FC<EmployeesListProps> = ({ list })
