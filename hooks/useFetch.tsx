import { DBSERVER } from "../constants";

const useFetch = () => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  //rejestracja uzytkownika
  const registerUser = async (userName: string, userPassword: string) => {
    await fetch(`${DBSERVER}users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ name: userName, password: userPassword }),
    })
      .then((res) => console.log("response", res))
      .catch((err) => console.log("error", err));
  };

  //get all users
  const getAllUsers = async (myState: (arg0: any) => any) => {
    const response = await fetch(`${DBSERVER}users`)
      .then((res) => res.json())
      .then((data) => myState(data));
    return response;
  };

  return { registerUser, getAllUsers };
};

export default useFetch;
