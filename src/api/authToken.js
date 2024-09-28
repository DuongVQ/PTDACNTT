export const getToken = () => {
    let token = '';
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
        token = JSON.parse(userInfo).data.token.accessToken;
        return token;
    }
    return '';
}