import { Menu, User } from "../interfaces/api.interface";

export default class Session
{
	static set setTokenValue(jwt: string)
	{
		localStorage.setItem("token", jwt);
	}
	static get getTokenValue()
	{
		return localStorage.getItem("token");
	}
	static set setUserSession(user: User)
	{
		localStorage.setItem("user", JSON.stringify(user));
	}
	static get getUserSession() : User
	{
		return JSON.parse(localStorage.getItem("user")??"{}");
	}
    static set setMenu(menu: Menu[])
	{
		localStorage.setItem("menu", JSON.stringify(menu));
	}
    static get getMenu() : Menu[]
	{
		return JSON.parse(localStorage.getItem("menu")??"[]") as Menu[];
	}
	static cerrarSession() : void
	{
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	}
}