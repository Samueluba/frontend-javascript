// Interface declaration
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create table (Vanilla JS)
const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to document
document.body.appendChild(table);

