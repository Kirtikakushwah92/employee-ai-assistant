import { createContext, useContext, useState } from "react";
import employees from "../data/employees";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employeeList, setEmployeeList] = useState(employees);

  // Add employee
  const addEmployee = (employee) => {
    setEmployeeList((previous) => [
      ...previous,
      {
        ...employee,
        id: Date.now(),
      },
    ]);
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployeeList((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        addEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}