import axios from "axios"; 
import { API_URL } from "../constants/appInfo";
import { signIn } from "next-auth/react";


function getUrl(config) {
	if (config.baseURL) {
		return config.url.replace(config.baseURL, '').split('?')[0];
	}
	return config.url;
}
const axiosClient=axios.create({
    baseURL: API_URL,
    headers: {
      Accept: "application/json",
    },
  });


axiosClient.interceptors.request.use(async (config:any)=>{
    config.headers={
        'Content-type':'application/json',
        ...config.headers
    }
    config.data
    return config
})

axiosClient.interceptors.response.use( (res) => {
    
		console.log(` %c ${res?.status} - ${getUrl(res?.config)}:`, 'color: #008000; font-weight: bold', res);
    return res
}, error=>{
    if (error.response) {
        checkResponse(error);
        // server trả response về là lỗi code đã handle
        console.log(`%c ${error?.response?.status}  :`, 'color: red; font-weight: bold', error?.response?.data);
        return Promise.reject({
            status: error?.response?.status,
            message: error?.response?.data?.message
        });
    } else if (error.request) {
        // request mãi mãi ko thấy response
        // `error.request` là XMLHttpRequest trong website còn nodejs là http.ClientRequest
        console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', error?.response?.data);
        return Promise.reject(error.request);
    } else {
        // có gì đó sai sai, hình như là hàm request sai
        console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', 'có gì đó sai sai, hình như là setting sai');
        return Promise.reject(error);
    }
}
)


const checkResponse = (error) => {
	switch (error?.response?.status) {
		case 401:
			// showNoti('danger', 'Bạn không có quyền truy cập');
			setTimeout(() => {
				signIn();
			}, 1000);
			break;
		case 403:
			alert('Bạn không có quyền thực hiện');
			break;
		case 400:
			console.log(error?.response?.message);

			break;
		default:
			console.log(`%c ${error?.response?.status}  :`, 'color: red; font-weight: bold', error?.response?.data);
	}
};

export default axiosClient