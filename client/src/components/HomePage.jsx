import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Car from "./Car"
import './card.css'
import './utility.css'
import Utility from './Utility'

export default function HomePage() {
	const [carList, setCarList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		Axios.get(`${process.env.SERVER_LINK}/getCar`).then((response) => {
			console.log(response.data);
			setCarList([...response.data]);
		})
	}, []);

	function handleClick() {
		navigate("/add");
	}

	return (
		<div style={{
			display: "grid",
			gridTemplateColumns: "1fr 3fr",
			columnGap: "10px"
		}}>
			<Utility />
			<div style={{
				display: "grid",
				rowGap: "10px"
			}}>
				<div style={{
					display: 'grid',
					gridTemplateColumns: "2fr 1fr",
					columnGap: "10px"
				}}>
					<div className='util_box'>Renault Talisman Intense 2018</div>
					<button onClick={handleClick} className="util_btn2">Sell Car</button>
				</div>

				<div className='cardCollection'>
					{
						carList.map((curr_car, id) => <Car
							key={id}
							carName={curr_car.carName}
							mileage={curr_car.mileage}
							location={curr_car.location}
							engine={curr_car.engine}
							transmission={curr_car.transmission}
							price={curr_car.price}
							image={curr_car.image}
						/>)
					}
				</div>
			</div>
		</div>

	)
}
