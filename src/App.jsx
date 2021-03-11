import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { ButtonDiscover } from './components/ButtonDiscover/ButtonDiscover';
import { PastLive } from './components/PastLive/PastLive';
import { getRandomAdjective, getRandomAnimal } from './utils/fetchingApis';
import './styles.css';

export default function App() {
	const [animal, setAnimal] = useState('');
	const [adjective, setAdjective] = useState('');
	const [discovered, setDiscovered] = useState(false);
	const [loading, setLoading] = useState(false);

	const toggleDiscovered = () => {
		setDiscovered(!discovered);
	};

	useEffect(() => {
		console.log('Is discovered');
		setLoading(true);
		getRandomAnimal().then((animal) => {
			setAnimal(animal);
			getRandomAdjective(animal).then((adjective) => {
				setAdjective(adjective);
			});
		});

		setLoading(false);
	}, [discovered]);

	return (
		<div className="main">
			{discovered ? (
				<>
					<Header title="Remember" homeAction={toggleDiscovered} discovered={discovered} />
					<PastLive animal={animal} adjective={adjective} loading={loading} />
				</>
			) : (
				<>
					<Header title="Past Lives" />
					<div className="discover-button-container">
						<ButtonDiscover onClick={toggleDiscovered} />
					</div>
				</>
			)}
		</div>
	);
}
