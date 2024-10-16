import { test, expect } from "@playwright/experimental-ct-react"
import App from "./App"

test("it renders", async ({ mount }) => {
	const component = await mount(<App />)
	await expect(component.locator("h1")).toContainText("Component Testing Example")
})
