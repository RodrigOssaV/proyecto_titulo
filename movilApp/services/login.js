const API = "http://10.0.2.2:3000/api"

/* login user */
export const loginService = async (user) => {
    await fetch(API+'/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}