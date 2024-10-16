import { test, expect } from "@playwright/experimental-ct-react"
import TextHandler from "./TextHandler"

test.describe("Onclick button", () => {
	test("displays text", async ({ mount }) => {
		// Mount the 'TextHandler' component
		const component = await mount(<TextHandler />)

		// Fill the input with "hello world"
		await component.getByTestId("text-input").fill("hello world")

		// Simulate clicking the button
		await component.getByTestId("display-text-button").click()

		// Assert that the displayed text is "hello world"
		await expect(component.getByTestId("display-text")).toHaveText(
			"hello world"
		)
	})

	test("fetched joke", async ({ mount, router }) => {
		// Mocking the API response
		await router.route(
			"https://official-joke-api.appspot.com/jokes/random",
			(route) => {
				route.fulfill({
					status: 200,
					contentType: "application/json",
					body: JSON.stringify({
						type: "programming",
						setup: "Why did the programmer bring a broom to work?",
						punchline: "To clean up all the bugs.",
						id: 446,
					}),
				})
			}
		)

		// Mount the component and perform interactions
		const component = await mount(<TextHandler />)

		// Simulate a button click to fetch a joke
		await component.getByTestId("fetch-joke-button").click()

		// Verify that the joke is displayed correctly
		await expect(component.getByTestId("display-joke")).toHaveText(
			"Why did the programmer bring a broom to work? - To clean up all the bugs."
		)
	})
})
