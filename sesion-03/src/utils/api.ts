import { API_CONFIG, type Plate } from "../types";

export const fetchPlates = async (): Promise<Plate[]> => {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATES}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch plates');
        }
         
        return await response.json();
    } catch (error) {
        console.log("Error fetchPlatos", error)
    }
    throw new Error('Error desconocido al cargar los platos');

}   