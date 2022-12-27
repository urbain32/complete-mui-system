const KEYS = {
  employees: "employees",
  employeesId: "employeesId",
};

export const getDepartementCollection = () => [
  { id: 1, title: "Development" },
  { id: 2, title: "Marketing" },
  { id: 3, title: "Accounting" },
  { id: 4, title: "HR" },
];

export function insertEmployees(data) {
  localStorage.setItem(KEYS.employees, JSON.stringify(data));
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}

export function generateEmployeesId() {
  if (localStorage.getItem(KEYS.employeesId) === null)
    localStorage.setItem(KEYS.employeesId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeesId));
  localStorage.setItem(KEYS.employeesId, (++id).toString());
  return id;
}
