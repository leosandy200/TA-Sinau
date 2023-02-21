import axios from "axios";

export function userHeader(token) {
    return {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${tokenUser}`,
    }
}

export function clearToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
}

// export async function reqWithToken(requestBody, additionalHeaders) {
//     axios.create()

//     var object = {
//         sigit:"agus",
//         dani:"doni"
//     }

//     var {sigit, dani} = object
// }