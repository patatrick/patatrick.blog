
export default class AuthService
{
	private url: string;
	private retries = 0;
	private status = 0;
	private maxRetries = 0;
	constructor(url:string, maxRetries: number) {
		this.url = url;
		this.maxRetries = maxRetries;
	}
	public fetchWithRetry() : Promise<string>
	{
		return new Promise((resolve, reject)=>
			fetch(this.url)
			.then(response => {
				if (!response.ok) {
					this.status = response.status;
					throw new Error(response.statusText);
				}
				resolve("Ok");
				return response.text();
			})
			.catch(error => {
				setTimeout(() => {				
					this.retries++;
					if (this.retries <= this.maxRetries) {
						console.log(`Error en el intento ${this.retries}. Reintentando...`);
						return this.fetchWithRetry(); // Reintentando
					}
					else {
						reject(`Error: ${this.status}, Message: ${error}`);
						return error;
					}
				}, 1000);
			})
		);
	}
}