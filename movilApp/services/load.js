const API = "http://10.0.2.2:3000/api";

/* get_loads */

export const getLoads = async () => {
    const res = await fetch(API+'/get_loads');
    return await res.json();
}