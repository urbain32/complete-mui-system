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
  let employees = getAllEmployees();
  data["id"] = generateEmployeesId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));

  // map departemntId to departement title
  let departements = getDepartementCollection();
  return employees.map((x) => ({
    ...x,
    departement: departements[x.departementId - 1].title,
  }));
}

export function generateEmployeesId() {
  if (localStorage.getItem(KEYS.employeesId) === null)
    localStorage.setItem(KEYS.employeesId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeesId));
  localStorage.setItem(KEYS.employeesId, (++id).toString());
  return id;
}
