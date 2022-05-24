import axios from 'axios'
import { Address } from '../types'
import {BASE_URL} from '../Data/BASE_URL'


export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/${zipcode}/json/`)
        const address: Address = {
            state: response.data.uf,
            city: response.data.localidade,
            district: response.data.bairro,
            street: response.data.logradouro
        }

        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}