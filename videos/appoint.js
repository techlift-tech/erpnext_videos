import { Selector } from 'testcafe';
import f from '../lib';


fixture("Getting Started")
    .page ("http://localhost:8000/login");


test('Getting started with ERPNext', async t => {
	
	await f.login('administrator', 'admin')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	
		
	//await f.click_user_button()

	//await f.hover_element('a', "Set Desktop Icon")

	

	//await f.click_user_button()

	//await f.hover_element('.dropdown-navbar-new-comments')

	

	//await f.click_notification()

	//await f.pause(1)

	//await f.click_notification()

	await f.click_icon('Patient Appointment')

	
	
     await f.click_list_item("PA19080002")
     
     await f.click_section("Dashboard ")

     await f.hover_element("label", "Patient Consultation")
	
	await f.click_primary_button('New Consultation')

    await f.scroll_to_section("Encounter Impression")
	await f.fill_field("complaints", "bruxism")
	await f.scroll_to_section("Medical Coding")
		
	await f.open_row('codification_table', 1)
	await f.fill_field('tooth_region', 'T11')
	await f.fill_field('medical_code', 'ICD-10 Dental Diagnosis Codes T18.0XXA')
	await f.close_row()

	await f.scroll_to_section("Medication")
	await f.open_row('drug_prescription', 1)
	await f.fill_field('drug_code', '8302')
		await f.fill_field('period', '5 Day')
		await f.close_row()

	await f.scroll_to_section("Suggested Tests")
	await f.open_row('lab_test_prescription', 1)
	await f.fill_field('lab_test_code', 'Orthopentogram')
	await f.fill_field('lab_test_comment', 'Hello')
	await f.close_row()
	
		await f.scroll_to_section("Suggested Treatments")
	await f.open_row('suggested_treatmnet', 1)
	await f.fill_field('suggested_treatment', 'night guards')
	await f.fill_field('refferal', 'Dr. Amit Handa')
	await f.fill_field('comments', 'hello')
	
	await f.close_row()


	

	await f.click_primary_button('Save')

	
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.close_modal()
		
	
});
