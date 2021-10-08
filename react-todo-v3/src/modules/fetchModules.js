const fetchLogin = async (userId, password) => {
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

  console.log("response", response);

  if (response?.ok) {
    console.log("response OK");
    const resultUser = response.json();
    return resultUser;
  } else {
    return [];
  }
};

export { fetchLogin };
