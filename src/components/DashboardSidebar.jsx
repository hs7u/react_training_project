/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../util/AuthContext';
import HashCode from '../util/StringHash';

function Sidebar() {
	const { logout } = useContext(AuthContext);
	// TODO fetch from db
	const itemArr = [
		{
			spanClassName: 'las la-igloo',
			spanText: 'Dashboard',
			active: true,
			path: './main',
		},
		{
			spanClassName: 'las la-users',
			spanText: '客戶管理',
			active: false,
			path: './customers',
		},
		{
			spanClassName: 'las la-clipboard-list',
			spanText: '課程管理',
			active: false,
			path: './course',
		},
		{
			spanClassName: 'las la-shopping-bag',
			spanText: '訂單列表',
			active: false,
			path: './order',
		},
		{
			spanClassName: 'las la-receipt',
			spanText: '商品管理',
			active: false,
			path: './product',
		},
		{
			spanClassName: 'las la-user-circle',
			spanText: '回應客戶',
			active: false,
			path: './qa',
		},
		{
			spanClassName: 'las la-sign-out-alt',
			spanText: '登出',
			active: false,
			path: '/',
			callback: logout,
		},
	];
	const [info, setInfo] = useState(itemArr);
	const navigate = useNavigate();
	const tabActive = (index) => {
		const newArr = [...info];
		for (let i = 0; i < newArr.length; i++) {
			newArr[i].active = i === index;
		}
		setInfo(newArr);
		if ( 'callback' in info[index] &&
			typeof info[index].callback === 'function'
		)
			info[index].callback();

		navigate(info[index].path);
	};
	return (
		<div className="sidebar">
			<div className="sidebar-brand">
				<h2>
					<span className="lab la-accusoft" />
					<span>studio4art</span>
				</h2>
			</div>
			<div className="sidebar-menu">
				<ul>
					{info.map((item, index) => {
						const hashKey = HashCode(index + item.spanText);
						return (
							<li key={`${hashKey}li`}>
								<nav
									key={`${hashKey}nav`}
									className={item.active ? 'active' : ''}
									onClick={() => tabActive(index)}
								>
									<span className={item.spanClassName} />
									<span>{item.spanText}</span>
								</nav>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default Sidebar;
