import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
	.page ("http://localhost:8000/login");

test('Patient in ERPNext', async (Selector, t) => {
	await f.login('administrator','admin')
	await f.use_voice("Microsoft Zira Desktop")
	await f.toggle_speak(true)
		await f.speak(`

		Hi.

		Welcome to E R P Next tutorial.

		In this video, we will learn how to created new patient	`)
	await f.speak(`you can click on patient icon shown on screen or search on global search`)

	await f.search ("patient li","Patient List")
	await f.speak(`click on new patient`)
	await f.click_primary_button('New')
	await f.speak(`fill the following fields respectively`)
	await f.fill_field("Full Name","suraj")
	await f.fill_field("Mobile","8550902230")
	await f.fill_field("dob","25/09/1996")
	await f.fill_field("Gender","Male")
	await f.fill_field("Blood Group","B Positive")
	await f.speak(`now click on save buttom and then submit`)
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")
	await f.speak(`
			Hope you found this video tutorial useful.
			Thanks for watching.
		`)
});
