const KEYS = {
  employees: "employees",
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
