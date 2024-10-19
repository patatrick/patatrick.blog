export default class Session
{
	protected set setTokenValue(jwt: string)
	{
		localStorage.setItem("token", jwt);
	}
	protected get getTokenValue()
	{
		return localStorage.getItem("token");
	}
	public cerrarSession()
	{
		localStorage.clear();
		location.reload();
	}
}