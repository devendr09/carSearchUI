import Axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function AddCar() {

	const [carName, setCarName] = useState("");
	const [mileage, setMileage] = useState("");
	const [location, setLocation] = useState("");
	const [engine, setEngine] = useState("");
	const [transmission, setTransmission] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	function handleClick() {
		console.log("submitting");
		Axios.post(`${process.env.SERVER_LINK}/add`, {
			carName: carName,
			mileage: mileage,
			location: location,
			engine: engine,
			transmission: transmission,
			price: price,
			image: image
		}).then(() => {
			console.log("Successfully Inserted Car!");
		});
		setCarName("");
		setMileage("");
		setLocation("");
		setEngine("");
		setTransmission("");
		setPrice("");
		setImage("");
	}

	function go_home() {
		navigate("/");
	}

	return (
		<>
			<Button variant='primary' onClick={go_home}>
				BACK
			</Button>
			<Form style={{
				marginTop: "10px",
				backgroundColor : "rgb(234, 231, 231)",
				padding : "10px",
				borderRadius : "5px"
			}}>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Car Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Car Name" onChange={e => {
						setCarName(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Mileage</Form.Label>
					<Form.Control type="text" placeholder="Enter Mileage" onChange={e => {
						setMileage(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Location</Form.Label>
					<Form.Control type="text" placeholder="Enter Location" onChange={e => {
						setLocation(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Engine</Form.Label>
					<Form.Control type="text" placeholder="Enter Engine" onChange={e => {
						setEngine(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Transmission</Form.Label>
					<Form.Control type="text" placeholder="Enter Transmission" onChange={e => {
						setTransmission(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Price</Form.Label>
					<Form.Control type="text" placeholder="Enter Price" onChange={e => {
						setPrice(e.target.value)
					}} />
				</Form.Group>
				<Form.Group required className="mb-3" controlId="formBasicEmail">
					<Form.Label>Image Link</Form.Label>
					<Form.Control type="text" placeholder="Enter Image Link" onChange={e => {
						setImage(e.target.value)
					}} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={handleClick}>
					Submit
				</Button>
			</Form>
		</>
	)
}
