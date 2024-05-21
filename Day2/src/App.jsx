import { useState } from 'react'

export default function Counter() {
	const [number, setNumber] = useState(0)

	return (
		<>
			<h1>Added Reset Button for Ease of UI</h1>
			{/* //<div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
			<div className="card">
				<h2 data-testid="counter">{number}</h2>
				<button
					data-testid="incrementButton"
					onClick={() => {
						// setNumber(number * 1)
						// setNumber(number * 1)
						// setNumber(number * 1)
						setNumber((prevNumber) => prevNumber + 3)
					}}
				>
					Increment 3 times
				</button>
				&nbsp;{/* Add some space between the buttons */}
			</div>
			<div>
				<center>
					<button
						data-testid="ResetButton"
						onClick={() => {
							setNumber(0)
						}}
					>
						Click to Reset
					</button>
				</center>
			</div>
		</>
	)
}
