import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'a8ae7833-b405-4fde-938c-dbefd78b3dc6'
    }
})

export const getProfileApi = (userId) => {
    return instanse.get(`/profile/${userId}`).then(resp => {
        return resp.data;
    })
}

export const getProfileStatusApi = (userId) => {
    return instanse.get(`profile/status/${userId}`).then(resp => {
        return resp.data;
    });
}

export const AuthmeApi = () => {
    return instanse.get('/auth/me').then(resp => resp.data);
}

export const setStatusApi = (status) => {
    return instanse.put('/profile/status', {status}).then(resp => resp.data);
}

export const updateProfileInfoApi = (profile) => {
    return instanse.put('/profile', {...profile}).then(resp => resp.data)
}

export const changeAvatarApi = (photo) => {
    const formData = new FormData();
    formData.append('image', photo);

    return instanse.put('/profile/photo', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }).then(resp => resp.data);
}

export const LoginApi = (email, password, rememberMe, captcha) => {
    return instanse.post('/auth/login', {
        email,
        password,
        rememberMe,
        captcha
    }).then(resp => {
        return resp.data;
    })
}

export const getCaptchaApi = () => {
    return instanse.get('/security/get-captcha-url').then(resp => resp.data)
}

export const LogoutApi = () => {
    return instanse.delete('/auth/login').then(resp => resp.data);
}

export const getUsersApi = (count, page) => {
    return instanse.get(`/users?count=${count}&page=${page}`).then(resp => resp.data);
}

export const followUserApi = (userId) => {
    return instanse.post(`/follow/${userId}`).then(resp => resp.data);
}

export const unFollowUserApi = (userId) => {
    return instanse.delete(`/follow/${userId}`).then(resp => resp.data);
}