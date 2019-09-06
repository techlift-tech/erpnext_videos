import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
	.page ("http://localhost:8000/login");

test('Patient in ERPNext', async (Selector, t) => {
	await f.login('administrator','admin')
	await f.use_voice("Microsoft Zira Desktop")
	await f.toggle_speak(true)
	

    await f.toggle_speak(true)
		/*await f.speak(`
		Hi.
		Welcome to E R P Next tutorial.
		In this video, we will learn how to created new patient	`)
	await f.speak(`click on patient icon shown on screen`)
*/

	await f.click_icon('Patient')

	await f.click_primary_button('New')
await f.pause(1)
	await f.close_modal()
	await f.pause(1)
	await f.goto_desk()

	//await f.speak(`or just search`)

await f.pause(1)
	await f.search ("new patient ","New Patient")
	await f.pause(1)
	//await f.speak(`fill the following fields respectively`)

	await f.fill_field("Full Name","suraj")
await f.pause(1)
	await f.fill_field("Mobile","8550902230")
	await f.pause(1)
	await f.fill_field("dob","25/09/1996")
	await f.pause(1)
	await f.fill_field("Gender","Male")
	await f.pause(1)
	await f.fill_field("Blood Group","B Positive")
	
	//await f.speak(`now click on save buttom and then submit`)
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

/*await f.speak(`
			Hope you found this video tutorial useful.
			Thanks for watching.
		`)
*/
});
