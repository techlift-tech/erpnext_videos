import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
    .page ("http://test.techlift.in/login");

test('Patient in ERPNext', async t => {
	
	await f.login('administrator','techlift123')

	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	await f.speak(`

		Close password notification.

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to create a New patient,

		

		To create new Patient, open a new patient.
		`)

	
    await f.search ("new patient", "New Patient")

	await f.speak(`
		.     Enter the full name of patient
			`)

	await f.fill_field("full_name","suraj")
    
    await f.speak(`
		.    select gender
			`)

	await f.fill_field("gender","male")

	await f.speak(`
		.    blood group
			`)

	await f.fill_field("blood_group","b+")

	await f.speak(`
		.     Enter the Date of Birth
			`)

	await f.fill_field("dbo","25/09/1996")
	
	await f.speak(`Now we can save and submit this B O M.`)

	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
			Thanks for watching.
		`)
});