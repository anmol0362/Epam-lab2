// Define the Student interface
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
  }
  
  // Sample array to store student records
  let students: Student[] = [];
  
  // CREATE a new student
  function createStudent(student: Student): void {
    students.push(student);
    console.log(`Student ${student.name} added successfully.`);
  }
  
  // READ all students
  function readStudents(): void {
    console.log("Student List:");
    students.forEach((student) => {
      console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    });
  }
  
  // UPDATE a student's info by ID
  function updateStudent(id: number, updatedData: Partial<Student>): void {
    const index = students.findIndex((s) => s.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updatedData };
      console.log(`Student with ID ${id} updated.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // DELETE a student by ID
  function deleteStudent(id: number): void {
    const index = students.findIndex((s) => s.id === id);
    if (index !== -1) {
      const deleted = students.splice(index, 1);
      console.log(`Student ${deleted[0].name} removed.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // Example Usage
  createStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
  createStudent({ id: 2, name: "Bob", age: 22, course: "Physics" });
  
  readStudents();
  
  updateStudent(2, { course: "Computer Science", age: 23 });
  
  deleteStudent(1);
  
  readStudents();
  