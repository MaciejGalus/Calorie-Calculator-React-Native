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

  const updateUser = async (
    id: number,
    {
      name,
      age,
      gender,
      height,
      weight,
    }: {
      name?: string;
      age?: number;
      gender?: string;
      height?: number;
      weight?: number;
    }
  ) => {
    await fetch(`${DBSERVER}users/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        name,
        age,
        gender,
        height,
        weight,
      }),
    });
  };

  return { registerUser, getAllUsers, updateUser };
};

export default useFetch;
