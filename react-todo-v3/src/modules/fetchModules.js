const fetchLogin = (userId, password) => {
  const response = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userId,
      password,
    }),
  });

  if (response?.ok) {
    const resultUser = response.json();
    setUser(resultUser);
  } else {
    return [];
  }
};
