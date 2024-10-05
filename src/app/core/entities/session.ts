export default class Session
{
	protected tokenValue;
	constructor() {
		this.tokenValue = "";
	}
	public cerrarSession()
	{
		localStorage.clear();
		location.reload();
	}
}