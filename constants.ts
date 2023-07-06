export const DBSERVER = "http://192.168.33.2:5000/";
export const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
export const emptyPassword = "Password can't be empty";
export const emptyName = "Name can't be empty ";
export const wrongPassword =
  "Password should contain min 5 characters, small and big letters and numbers ";

export enum Routes {
  loginPage = "login",
  FillYourProfile = "Fill Your Profile",
  MainMenu = "Main Menu",
  CalorieCalculator = "Calorie Calculator",
  CalorieTable = "Calorie Table",
  DailyKcalMenu = "Daily Kcal Menu",
}

export enum Gender {
  male = "male",
  female = "female",
}

export enum WeightTarget {
  Gain = "gain your weight",
  Lose = "lose your weight",
  Keep = "keep your weight",
}

export const materialPurpleColor = "rgb(98, 0, 238)";
