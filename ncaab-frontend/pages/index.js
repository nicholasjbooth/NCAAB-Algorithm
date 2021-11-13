import React, { Component } from 'react'
import { Row, Col, Form, Navbar, Nav } from 'react-bootstrap'
import teams from "./api/teams"
import API_ENDPOINT from "./api/endpoint"

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teams,
			homeTeam: teams[Math.floor(Math.random() * teams.length)],
			awayTeam: teams[Math.floor(Math.random() * teams.length)],
			away_predicted_score: 0,
			home_predicted_score: 0,
			away_win_percentage_game: 0,
			home_win_percentage_game: 0,
			total_score: 0,
			home_spread: 0
		};

		this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	onChange(e) {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value }, this.fetchData)
	}

	onClick(e) {
		e.preventDefault();
		this.fetchData();
	}

	fetchData() {
		var { homeTeam, awayTeam } = this.state;

		const params = new URLSearchParams();
		params.append("homeTeam", homeTeam);
		params.append("awayTeam", awayTeam);

		fetch(`${API_ENDPOINT}/calculate?${params.toString()}`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					away_predicted_score: data.away_predicted_score, 
					home_predicted_score: data.home_predicted_score,
					away_win_percentage_game: data.away_win_percentage_game,
					home_win_percentage_game: data.home_win_percentage_game,
					total_score: data.total_score,
					home_spread: data.home_spread
				});
			}).catch((err) => alert("Unhandled error occurred. Reload page."));

	}

	render() {
		return (
				<div className="index-parent">
					<Row>
						<Col>
							<h1>Away Team</h1>
						</Col>

						<Col></Col>
						<Col>
							<h1>Home Team</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select" onChange={this.onChange} name="awayTeam" value={this.state.awayTeam}>
									{this.state.teams.map((name, i) => (
										<option key={i}>{name}</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>

						</Col>
						<Col>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select" onChange={this.onChange} name="homeTeam" value={this.state.homeTeam}>
									{this.state.teams.map((name, i) => (
										<option key={i + 500}>{name}</option>
									))}
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<h1>{this.state.away_predicted_score}</h1>
						</Col>

						<Col>
							<h2>Points</h2>
						</Col>
						<Col>
							<h1>{this.state.home_predicted_score}</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<h1>{this.state.away_win_percentage_game}%</h1>
						</Col>

						<Col>
							<h2>Win Probability</h2>
						</Col>
						<Col>
							<h1>{this.state.home_win_percentage_game}%</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>Total: {this.state.total_score}</h2>
						</Col>

						<Col>
							<h2>
								{this.state.homeTeam} {this.state.home_spread > 0 ? "+" + this.state.home_spread : this.state.home_spread}
							</h2>
						</Col>
					</Row>
				
				
			<style global jsx>{`
			.index-parent {
				margin: 5rem auto;
				width: 50%;
				display: grid;
				border:5px solid #00adb5;
				border-radius: 2rem;
				padding: 2% 5%;
				background-color: #393e46;
			}
			
			.row {
				margin-top: 2%;
  				margin-bottom: 2%;
  				background-color: #393e46;
			}
			
			.row > div {
				text-align: center;
				background-color: #393e46;
			}

			`}</style>
			</div>
		);
	}
}

export default Index;
