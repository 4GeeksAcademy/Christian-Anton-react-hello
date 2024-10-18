import React from "react";
import NavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor";
const Home = () => {
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div className="container">
				<Jumbotron description={lorem} />
				<div className="container d-flex flex-wrap gap-4 mt-4 mb-5" >
					<Card title="Card 1" description={lorem} text="Find out more!" srcImage='https://picsum.photos/200/300' />
					<Card title="Card 2" description={lorem} text="Find out more!" srcImage='https://images.unsplash.com/photo-1728588267038-9f36d7a74588?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' />
					<Card title="Card 3" description={lorem} text="Find out more!" srcImage='https://images.unsplash.com/photo-1728826843838-308b101f2a8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D' />
					<Card title="Card 4" description={lorem} text="Find out more!" srcImage='https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' />
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

Card.PropTypes = {
	srcImage: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
}

export default Home;
