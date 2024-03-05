import axios from "axios";

const host = import.meta.env.VITE_BRAND_API_HOST
const port = import.meta.env.VITE_BRAND_API_PORT

async function getBrands() : Promise<Array<String>> {
    const res = await axios.get(`http://${host}:${port}/brands`)
    return res.data
}

export {
    getBrands
}
