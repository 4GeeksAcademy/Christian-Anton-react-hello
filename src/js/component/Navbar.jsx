import React from "react";
export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>g
				</button>
				<div className="collapse navbar-collapse d-flex" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{ float: 'right' }}>
						<li className="nav-item">
							<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}