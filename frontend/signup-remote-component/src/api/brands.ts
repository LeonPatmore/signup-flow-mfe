import axios from "axios";

const host = import.meta.env.VITE_BRAND_API_HOST
const port = import.meta.env.VITE_BRAND_API_PORT

async function getBrands() : Promise<Array<String>> {
    const res = await axios.get(`http://${host}:${port}/brands`)
    return res.data
}

async function createBrand(name: String, displayName: String) {
    console.log(`Creating brand with name ${name}`)
    await axios.post(`http://${host}:${port}/brands`, { name, displayName });
}

export {
    getBrands,
    createBrand
}
