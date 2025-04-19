interface User {
    username: string;
    password: string;
  }
  
  const users: User[] = [
    { username: "admin", password: "1234" },
    { username: "user", password: "abcd" }
  ];
  
  function login(username: string, password: string): string {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? "Login successful" : "Invalid credentials";
  }
  
  // Example Usage
  console.log(login("admin", "1234")); // Success
  console.log(login("admin", "wrong")); // Fail
  