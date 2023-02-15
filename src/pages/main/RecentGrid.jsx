import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecentGrid({ headerText: msg, navPath: path, cardBody: CardBody }) {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(path);
	};
	return (
		<div>
			<div className="card">
				<div className="card-header">
					<h3>{msg}</h3>
					<button onClick={onClick} type="button">
						See All <span className="las la-arrow-right" />
					</button>
				</div>
				<div className="card-body">
					<CardBody />
				</div>
			</div>
		</div>
	);
}

RecentGrid.propTypes = {
	headerText: PropTypes.string.isRequired,
	navPath: PropTypes.string.isRequired,
	cardBody: PropTypes.func.isRequired,
};

export default RecentGrid;
