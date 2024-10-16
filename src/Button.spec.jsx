import { test, expect } from "@playwright/experimental-ct-react"
import Button from "./Button"

test("it renders", async ({ mount }) => {
	// Mount the 'Button' component with props
	const component = await mount(
		<Button
			onClick={() => {}}
			label='test component'
			fetchJoke={() => {}}
		/>
	)

	// Assert that the Button contains the label "test component"
	await expect(component).toContainText("test component")
})
