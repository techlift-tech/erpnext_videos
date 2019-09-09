import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
    .page ("http://localhost:8000/login");

test('Patient in ERPNext', async t => {
	
	await f.login('administrator','admin')

	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	
	await f.click_icon('Patient Appointment')

	await f.goto_desk()

    await f.search ("patient appointment l","Patient Appointment List")
	
	await f.click_element('.remove-filter', '')


	await f.click_list_item('OP-000112')


   	//await f.click_list_item("P19080105")
   
    
	await f.fill_field("Blood Group","B Positive")
	
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	
		
	
});    