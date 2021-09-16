const API = "http://10.0.2.2:3000/api"

/* get all suppliers to database */
export const getSuppliers = async () => {
    const res = await fetch(API+'/get_suppliers');
    return await res.json();
}