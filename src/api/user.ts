//https://jsonplaceholder.typicode.com/users

export async function getUsersApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
  