import React from "react";

class Footer extends React.Component {

	render() {
		return (
			<footer className="footer">
				<div className="footer__copyright">
					Copyright @2018 - {new Date().getFullYear()}
				</div>
				<div className="footer__adress">www.findyourmovies.com</div>
			</footer>
		)
	}


}
export { Footer };
