import axios from "axios";

const BASE_URL = "https://beauty-production-b5d3.up.railway.app";
const SERVER_URL = "https://beauty-production-b5d3.up.railway.app/api/";
const API_TOKEN = `b6326b2746d144dbdeef95daf166790bebd14eec0e20bfc0fbfa38ff731040e9fe8d584ab17dd2caeeefc28ae97d72d77c13dbacca48a301c05dd51c144c76ec5d284dcb2b54b461114dc0e7a88ff5ad940cc0096ffc1b6cf53a984d1d34e0fd98dad37fcfbdc947ee9b76e6b2fe4f2011f740fa939183320adeed45629f437a`;
const api = axios.create({
    baseURL: SERVER_URL,
    transitional: {
        silentJSONParsing: false
    },
    responseType: "json",
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});
export default api;

export const saveAppointment = async (data) => {
    const res = await api.post(`/appointments`, {
        data
    });
    return res.data;
}
export const getAppointments = async () => {
    const res = await api.get(`/appointments`, );
    return res.data;
}

export const signUp = async (data) => {
    const res = await api.post(`/users`, {
        ...data,
        role: 1,
        confirmed: true
    });
    return res.data;
}


export const signIn = async ({ username, password }) => {
    return axios
        .post('https://beauty-production-b5d3.up.railway.app/api/auth/local', {
            identifier: username,
            password: password,
        })
}