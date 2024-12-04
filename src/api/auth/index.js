import Cookies from "js-cookie";

export const login = async (username, password) => {
  const loginRequest = {
    username,
    password,
  };

  try {
    const response = await fetch(`http://localhost:8081/login/v1/auth`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest), // JSON.stringify kullanılıyor
    });

    if(!response.ok) {
      return "ERROR";
    }
    const data = await response.json();
    Cookies.set("token", data.data.token);
    console.log(data.resultMessage.messageType); // Gelen cevabı kontrol edebilmek için ekledim
    return data.resultMessage.messageType;
  } catch (error) {
    console.error(error);
  }
};
