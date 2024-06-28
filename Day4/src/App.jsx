import React, { useState } from 'react'

function App() {
	// States for each input and calculated values
	const [principal, setPrincipal] = useState(1000)
	const [rate, setRate] = useState(7)
	const [time, setTime] = useState(5)
	const [simpleInterest, setSimpleInterest] = useState(0)
	const [totalAmount, setTotalAmount] = useState(0)

	// Effect to calculate interest whenever principal, rate, or time changes
	React.useEffect(() => {
		const calculatedInterest = (principal * rate * time) / 100
		setSimpleInterest(calculatedInterest.toFixed(2))
		setTotalAmount((principal + calculatedInterest).toFixed(2))
	}, [principal, rate, time])

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="p-6 bg-white rounded shadow-lg">
				<h2 className="text-2xl mb-4">Simple Interest Calculator</h2>

				<div className="mb-3">
					<label
						htmlFor="principal"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						Principal Amount ($):
					</label>
					<input
						type="number"
						id="principal"
						value={principal}
						onChange={(e) =>
							setPrincipal(parseFloat(e.target.value))
						}
						className="border border-gray-300 p-2 rounded w-full"
						min="0"
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="rate"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						Annual Interest Rate (%):
					</label>
					<input
						type="number"
						id="rate"
						value={rate}
						onChange={(e) => setRate(parseFloat(e.target.value))}
						className="border border-gray-300 p-2 rounded w-full"
						step="0.01"
						min="0"
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="time"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						Time (Years):
					</label>
					<input
						type="number"
						id="time"
						value={time}
						onChange={(e) => setTime(parseFloat(e.target.value))}
						className="border border-gray-300 p-2 rounded w-full"
						min="0"
					/>
				</div>

				<div className="mb-3">
					<span>Simple Interest</span>
					<div
						id="simpleInterest"
						className="p-2 bg-gray-200 rounded"
					>
						{simpleInterest}
					</div>
				</div>

				<div className="mb-3">
					<span>Total Amount</span>
					<div id="totalAmount" className="p-2 bg-gray-200 rounded">
						{totalAmount}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
