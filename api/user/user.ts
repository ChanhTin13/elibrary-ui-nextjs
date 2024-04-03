import axiosClient from "../axiosClient";

const url = '/api/UserInformation/';
class UserApi {
	// Lấy tất cả data
	getAll = (params) => axiosClient.get<IApiResultData<IUser[]>>(url, { params });

	// Lấy data mới nhất
	getNew = () => axiosClient.get<IApiResultData<IUser>>(url + '0');

	// Lấy data mới nhất
	getByID = (params) => axiosClient.get<IApiResultData<IUser>>(url + params);

	// Thêm mới data
	add(data: IUser) {
		return axiosClient.post(url, data);
	}
	// Cập nhật data
	update(data: IUser) {
		return axiosClient.put(url, data);
	}
	// Xóa data
	delete(data: IUser) {
		return axiosClient.put(url, data);
	}

	// Đổi mật khẩu
	changePassword(data: any) {
		return axiosClient.put('/api/Account', data);
	}

	// Tạo mới tài khoản
	createAccount(data: any) {
		return axiosClient.post('/api/CreateAccount', data);
	}
}

export const userApi = new UserApi();
