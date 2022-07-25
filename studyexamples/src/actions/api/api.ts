class Api {
    url = 'http://localhost:3001';

    performRequest<T>(url: string, method: string = "GET", body: object = {}) {
        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(response => response.json())
            .catch(error => console.log(error));
    }

    getMe() {
        return this.performRequest(`${this.url}/me`);
    }
}

export default Api;