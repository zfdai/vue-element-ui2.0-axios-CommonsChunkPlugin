let axiosConfig = {
    init() { 
        // Vue.prototype.axios = axios;
        // axios.defaults.baseURL = config.apiConfig.originUrl;
        axios.interceptors.request.use(function (config) {
            // config.headers.common['Authorization'] = 'bearer '+_parse_storage.access_token;
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
        // Add a response interceptor
        axios.interceptors.response.use( (response) => {
            // Do something with response data
            return response.data;
        },  (error) => {
            return Promise.reject(error);
        });
    }
}
export default axiosConfig
