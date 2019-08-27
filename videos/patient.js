import { Selector } from 'testcafe';
import f from '../lib';


fixture("Patient")
    .page ("http://localhost:8000/login");

test('Patient in ERPNext', async t => {
	
	await f.login('administrator','admin')

	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	
	
    await f.search ("patient li","Patient List")

    await f.click_primary_button('New')

    await f.fill_field("Full Name","suraj")
  
    await f.fill_field("Mobile","8550902230")
    await f.fill_field("dob","25/09/1996")
    
	await f.fill_field("Gender","Male")

	await f.fill_field("Blood Group","b+")

	
	
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	
		
	
});