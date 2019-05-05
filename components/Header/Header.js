import React from 'react';
import './Header.scss';
import Logo from '../../assets/icons/cabify.svg?react';

const Header = () => {
	
	return (
		<div className="header">
			<Logo className="header__logo" alt="" />
		</div>
	);
}

export default Header;