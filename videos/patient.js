import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
	.page ("http://localhost:8000/login");

test('Patient in ERPNext', async (Selector, t) => {
	await f.login('administrator','admin')
	await f.use_voice("Microsoft Zira Desktop")
	await f.toggle_speak(true)
	
	await f.click_icon('Patient')

	await f.click_primary_button('New')
	await f.close_modal()
	await f.goto_desk()

	await f.search ("new patient ","New Patient")
	
	

	await f.fill_field("Full Name","suraj")

	await f.fill_field("Mobile","8550902230")
	
	await f.fill_field("dob","25/09/1996")
	
	await f.fill_field("Gender","Male")
	
	await f.fill_field("Blood Group","B Positive")
	
	
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

});
