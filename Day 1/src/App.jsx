import React, { useState } from 'react'

function App() {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<center>
			<div>
				<h1>Solution By ajha19</h1>
				<p id="my-paragraph" hidden={isHidden}>
					This is the paragraph you can toggle.
				</p>

				<button
					id="toggle-btn"
					onClick={() => setIsHidden((prevState) => !prevState)}
				>
					Toggle Paragraph
				</button>
			</div>
		</center>
	)
}

export default App
