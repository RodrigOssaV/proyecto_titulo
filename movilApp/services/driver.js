const API = "http://10.0.2.2:3000/api";

/* get_drivers */
export const getDrivers = async () => {
    const res = await fetch(API+'/get_movil');
    return await res.json();
};

/* get_driver */
export const getDriver = async (rut) => {
    const res = await fetch(API+`/get_driver/${run}`);
    return await res.json();
}

/* add_driver */
export const addDriver = async (newDriver) => {
    await fetch(API+'/add_driver', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDriver)
    })
    .then(res => res.json());
}

/* update_driver */
export const updateDriver = async (rut, modifyDriver) => {
    await fetch(API+`/update_driver/${run}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' },
        body: JSON.stringify(modifyDriver)
    })
    .then(res => res.json());
}
