import { useState } from "react"
import Button from "./Button" 
import TextInput from "./TextInput" 

const TextHandler = () => {
	const [joke, setJoke] = useState("")
	const [inputText, setInputText] = useState("")
	const [displayText, setDisplayText] = useState("")

	const fetchJoke = async () => {
		const response = await fetch(
			"https://official-joke-api.appspot.com/jokes/random"
		)
		const data = await response.json()
		const fetchedJoke = `${data.setup} - ${data.punchline}`
		setJoke(fetchedJoke)
		return fetchedJoke
	}

	const handleDisplayText = () => {
		setDisplayText(inputText)
		setInputText("") // Clear the input field after displaying
	}

	return (
		<div style={{ textAlign: "center", margin: "20px" }}>
			<TextInput
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder='Type something...'
				data-testid='text-input'
			/>
			<Button
				onClick={handleDisplayText}
				label='Display Text'
				data-testid='display-text-button'
				style={{ marginRight: "5px" }}
			/>
			<Button
				onClick={() => {}}
				label='Fetch Joke'
				fetchJoke={fetchJoke}
				data-testid='fetch-joke-button'
			/>

			{displayText && (
				<p
					data-testid='display-text'
					style={{ marginTop: "10px" }}
				>
					{displayText}
				</p>
			)}
			{joke && (
				<p
					data-testid='display-joke'
					style={{ marginTop: "10px" }}
				>
					{joke}
				</p>
			)}
		</div>
	)
}

export default TextHandler
