import Header from '../../components/Header/Header';
import './Layout.scss';

const Layout = ({children}) => {
	return (
		<div className="layout">
			<div className="layout__navigation">
				<Header />
			</div>
			<div className="layout__content">
				{children}
			</div>
		</div>
	);
}

export default Layout;