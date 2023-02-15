import Card from './Card';
import RecentGrid from './RecentGrid';
import { LeftCard, RightCard } from './GridCardBody';

export default function Main() {
	return (
		<>
			{/* TODO change to Grid2 from '@mui/material */}
			<div className="cards">
				<Card
					apiPath="/Admin/Customers"
					text="Customers"
					iconClass="las la-users"
				/>
				<Card
					apiPath="/Admin/Course"
					text="Course"
					iconClass="las la-clipboard-list"
				/>
				<Card
					apiPath="/Admin/Orders"
					text="Orders"
					iconClass="las la-shopping-bag"
				/>
				<Card
					apiPath="/Admin/Income"
					text="Income"
					iconClass="lab la-google-wallet"
				/>
			</div>
			<div className="recent-grid">
				<RecentGrid
					headerText="Recent Course"
					navPath="./course"
					cardBody={LeftCard}
				/>
				<RecentGrid
					headerText="New Customers"
					navPath="./customers"
					cardBody={RightCard}
				/>
			</div>
		</>
	);
}
