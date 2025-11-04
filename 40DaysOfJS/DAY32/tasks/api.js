async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    return response.json()
}

async function createUser(name, email) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
}

export { fetchUsers, createUser }