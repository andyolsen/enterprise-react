export default class RestClient {

    static baseUrl = "http://localhost:8080"

    static async getDestinations() : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations`
        const response = await fetch(url)
        return response.json()
    }

    static async getDestination(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations/${id}`
        const response = await fetch(url)
        return response.json()
    }

    static async addReview(id: number, review: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/destinations/addReviewForDestination/${id}`
        const response = await fetch(url, { 
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        return response
    }
}