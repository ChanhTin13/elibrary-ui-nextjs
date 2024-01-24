import React  from 'react'; 
import { faAslInterpreting, faHSquare, faHouse, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
export const AdminParentMenu = [
	{
		TabName: 'tab-home',
		Icon: <FontAwesomeIcon icon={faHouse} />,
	},
	{
		TabName: 'tab-course',
		Icon: <FontAwesomeIcon icon={faHSquare} />,
	},
	{
		TabName: 'tab-customer',
		Icon: <FontAwesomeIcon icon={faPerson} />,
	},
	{
		TabName: 'tab-staff',
		Icon:<FontAwesomeIcon icon={faAslInterpreting} />,
	},
	{
		TabName: 'tab-package',
		Icon: <FontAwesomeIcon icon={faAslInterpreting} />,
	} 
];

export const AdminChildMenu = [
	{
		MenuName: 'tab-home',
		MenuTitle: 'Trang chủ',
		MenuKey: '/dashboard',
		MenuItem: [
			{
				TypeItem: 'single',
				Key: '/dashboard',
				Route: '/dashboard',
				Icon: '',
				Text: 'Thống kê'
			},
			{
				TypeItem: 'single',
				Key: '/newsfeed',
				Route: '/newsfeed',
				Icon: '',
				Text: 'Tin tức'
			}
		]
	},
	{
		MenuName: 'tab-course',
		MenuTitle: 'Khóa học',
		MenuKey: '/course',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'sub-course',
				Icon: '<span class="anticon"><img src="/images/icons/study-course.svg" ></span>',
				TitleSub: 'Quản lí khóa học',
				SubMenuList: [ 
					{
						ItemType: 'single',
						Key: '/course/course-list',
						Route: '/course/course-list',
						Text: 'Danh sách khóa học',
						Icon: ''
					} 
				]
			},
			{
				TypeItem: 'single',
				Key: '/course/schedule-study',
				Icon: '<span class="anticon"><img src="/images/icons/calendar.svg"></span>',
				Route: '/course/schedule-study',
				Text: 'Kiểm tra lịch'
			}, 
			{
				TypeItem: 'single',
				Key: '/course/register-course',
				Icon: '<span class="anticon"><img src="/images/icons/shopping-bag.svg"></span>',
				Route: '/course/register-course',
				Text: 'Đăng ký khóa học'
			},

			{
				ItemType: 'sub-menu',
				Key: 'sub-course-zoom',
				Icon: '<span class="anticon"><img src="/images/icons/zoom-video.svg" ></span>',
				TitleSub: 'Quản lý Zoom',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/course/manage-zoom/config-zoom',
						Route: '/course/manage-zoom/config-zoom',
						Text: 'Cấu hình',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/course/manage-zoom/meeting-zoom',
						Route: '/course/manage-zoom/meeting-zoom',
						Text: 'Danh sách phòng học',
						Icon: ''
					} 
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'video-course',
				Icon: '<span class="anticon"><img src="/images/icons/zoom-video.svg" ></span>',
				TitleSub: 'Khóa học video',
				SubMenuList: [
					{
						TypeItem: 'single',
						Key: '/video-course',
						Route: '/video-course',
						Icon: '',
						Text: 'Danh sách khóa học'
					},
					{
						TypeItem: 'single',
						Key: '/video-course-order',
						Icon: '',
						Route: '/video-course-order',
						Text: 'Danh sách đơn hàng'
					},
					{
						TypeItem: 'single',
						Key: '/video-course-list',
						Icon: '',
						Route: '/video-course-list',
						Text: 'Khóa học đã Active'
					}
				]
			}
		]
	},

	{
		MenuName: 'tab-customer',
		MenuTitle: 'Khách hàng',
		MenuKey: '/customer',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child',
				Icon: '<span class="anticon"><img src="/images/icons/users.svg"></span>',
				TitleSub: 'Học viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/student/student-advisory',
						Route: '/customer/student/student-advisory',
						Text: 'Khách hàng',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/service/service-info-student',
						Route: '/customer/service/service-info-student',
						Text: 'Thêm lịch hẹn test',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/service/service-appointment-test',
						Route: '/customer/service/service-appointment-test',
						Text: 'Khách hẹn test',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-list',
						Route: '/customer/student/student-list',
						Text: 'Dữ liệu học viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-appointment',
						Route: '/customer/student/student-appointment',
						Text: 'HV chờ xếp lớp',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-course',
						Route: '/customer/student/student-course',
						Text: 'HV trong khóa',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-change-course',
						Route: '/customer/student/student-change-course',
						Text: 'HV chuyển khóa',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/student-reserve',
						Route: '/customer/student/student-reserve',
						Text: 'HV bảo lưu',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/student/exchange-student',
						Route: '/customer/student/exchange-student',
						Text: 'HV chuyển giao',
						Icon: ''
					},

					{
						ItemType: 'single',
						Key: '/package/package-payment',
						Route: '/package/package-payment',
						Text: 'HV mua bộ đề',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/service/service-customer-exam',
						Route: '/customer/service/service-customer-exam',
						Text: 'HV đăng kí thi',
						Icon: ''
					}
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-parants',
				Icon: '<span class="anticon"><img src="/images/icons/users.svg"></span>',
				TitleSub: 'Phụ Huynh',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/parents',
						Route: '/customer/parents',
						Text: 'Danh sách phụ huynh',
						Icon: ''
					}
				]
			}, 
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child-3',
				Icon: '<span class="anticon"><img src="/images/icons/user.svg"></span>',
				TitleSub: 'Báo cáo học viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/report/report-customer-warning',
						Route: '/customer/report/report-customer-warning',
						Text: 'Cảnh báo học viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/report/report-customer-test',
						Route: '/customer/report/report-customer-test',
						Text: 'Học viên sắp thi',
						Icon: ''
					} 
				]
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-course-child-4',
				Icon: '<span class="anticon"><img src="/images/icons/dollar-sign.svg"></span>',
				TitleSub: 'Tài chính',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-customer-debts',
						Route: '/customer/finance/finance-customer-debts',
						Text: 'Thông tin thanh toán',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-refund',
						Route: '/customer/finance/finance-cashier-refund',
						Text: 'Yêu cầu hoàn tiền',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-payment',
						Route: '/customer/finance/finance-cashier-payment',
						Text: 'Phiếu chi',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/customer/finance/finance-cashier-invoice',
						Route: '/customer/finance/finance-cashier-invoice',
						Text: 'Phiếu thu',
						Icon: ''
					} 
				]
			},
			{
				ItemType: 'single',
				Key: '/customer/contract/contract-customer-list',
				Route: '/customer/contract/contract-customer-list',
				Text: 'Học viên có hợp đồng',
				Icon: '<span class="anticon"><img src="/images/icons/clipboard.svg"></span>'
			} 
		]
	},

	{
		MenuName: 'tab-document',
		MenuTitle: 'Document List',
		MenuKey: '/document-list',
		MenuItem: [
			{
				ItemType: 'single',
				Key: '/document-list',
				Route: '/document-list',
				Text: 'Danh sách tài liệu',
				Icon: ''
			}
		]
	},
	{
		MenuName: 'tab-staff',
		MenuTitle: 'Quản lí nhân viên',
		MenuKey: '/staff',
		MenuItem: [
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-staff-child-1',
				Icon: '',
				TitleSub: 'Nhân viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/staff/staff-list',
						Route: '/staff/staff-list',
						Text: 'Danh sách nhân viên',
						Icon: ''
					} 
				]
			}, 

			{
				ItemType: 'sub-menu',
				Key: 'sub-list-staff-child-2',
				Icon: '',
				TitleSub: 'Giáo viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/staff/teacher-list',
						Route: '/staff/teacher-list',
						Text: 'Giáo viên',
						Icon: ''
					} 
				]
			},
			{
				ItemType: 'single',
				Key: '/staff/teacher-salary',
				Route: '/staff/teacher-salary',
				Text: 'Bảng lương giáo viên',
				Icon: ''
			},
			{
				ItemType: 'single',
				Key: '/staff/admin-salary-staff',
				Route: '/staff/admin-salary-staff',
				Text: 'Bảng lương nhân viên',
				Icon: ''
			},
			{
				ItemType: 'single',
				Key: '/feedback',
				Route: '/feedback',
				Text: 'Danh sách phản hồi',
				Icon: ''
			},
			{
				ItemType: 'sub-menu',
				Key: 'sub-list-staff-child-3',
				Icon: '',
				TitleSub: 'Tư vấn viên',
				SubMenuList: [
					{
						ItemType: 'single',
						Key: '/staff/sales-campaign',
						Route: '/staff/sales-campaign',
						Text: 'Chiến dịch kinh doanh',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/sales-salary',
						Route: '/staff/sales-salary',
						Text: 'Duyệt lương',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/sales-salary-history',
						Route: '/staff/sales-salary-history',
						Text: 'Lịch sử duyệt',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/saler-list',
						Route: '/staff/saler-list',
						Text: 'Danh sách tư vấn viên',
						Icon: ''
					},
					{
						ItemType: 'single',
						Key: '/staff/saler-revenue',
						Route: '/staff/saler-revenue',
						Text: 'Doanh thu tư vấn viên',
						Icon: ''
					}
					// {
					// 	ItemType: 'single',
					// 	Key: '/staff/config-bounus',
					// 	Route: '/staff/config-bounus',
					// 	Text: 'Cấu hình thưởng',
					// 	Icon: ''
					// }
				]
			},
			{
				ItemType: 'single',
				Key: '/staff/manage-task',
				Route: '/staff/manage-task',
				Text: 'Quản lí công việc',
				Icon: ''
			}
		]
	},
	 
];
