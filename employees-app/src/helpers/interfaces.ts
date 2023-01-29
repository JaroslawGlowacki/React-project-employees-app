// export interface EmployeesListObj {
//   id: number;
//   firstName: string;
//   lastName: string;
//   dateOfBirth: number;
//   position: string;
//   salary: number;
// }
export interface EmployeesListProps {
  list: string;
  key: string;
  id: number;
}

export interface RegisterFormData {
  email: string;
  password: string;
  password2: string;
}
