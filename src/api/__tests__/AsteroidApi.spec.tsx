import { getAsteroidInfo } from "../AsteroidApi"
import asteroidMockResponse from "./__mocks__/asteroidResponse.json"
import fetchMock from 'fetch-mock'


describe("Asteroid API", () => {
    beforeEach(() => {
        fetchMock.restore();
    }) 
    it("should fetch asteroid details by id", async () => {
        // Given
        const asteroidId  = "2000433";
        fetchMock.get("https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=LZWsMQAghkuhShU1baz4dLMDRvyE8UOVqtgloCOD", asteroidMockResponse)

        // When
        const asteroidDetails = await getAsteroidInfo(asteroidId);

        // Then
        expect(asteroidDetails).not.toBeNull();
        expect(asteroidDetails?.name).toBe("433 Eros (A898 PA)");
        expect(asteroidDetails?.nasa_jpl_url).toBe("http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433");
        expect(asteroidDetails?.is_potentially_hazardous_asteroid).toBe(false);
    })

    it("should return null for asteroid details in case of error (not 2xx)", async () => {
        // Given
        const asteroidId  = "2000433";
        fetchMock.get("https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=LZWsMQAghkuhShU1baz4dLMDRvyE8UOVqtgloCOD", {status:404})

        // When
        const asteroidDetails = await getAsteroidInfo(asteroidId);

        // Then
        expect(asteroidDetails).toBeNull();
    })

})