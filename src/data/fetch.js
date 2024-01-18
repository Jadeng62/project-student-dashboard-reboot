const URL = import.meta.env.VITE_BASE_API_URL;

// Get All Students
export function getAllStudents() {
  return fetch(`${URL}`).then((response) => {
    console.log(response); // Log the response
    return response.json();
  });
}
