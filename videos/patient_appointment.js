import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
    .page ("http://localhost:8000/login");

test('Patient in ERPNext', async t => {
	
	await f.login('administrator','admin')

	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	
	await f.click_icon('Patient Appointment')

	await f.click_primary_button('New')
	
	await f.goto_desk()

    await f.search ("new patient appointment","New Patient Appointment")


   	await f.fill_field("Patient","DIPAL PATEL","dipal p")
  
   	await f.click_element('button', 'Get prescribed procedures')
   	await f.close_modal()
   
   	await f.click_element('button', 'Check availability')
   	await f.fill_field('Heathcare Practitioner','Dr.Nabha')
   
   
    
	await f.fill_field("Blood Group","B Positive")
	
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	
		
	
});    