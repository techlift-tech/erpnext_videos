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


   	await f.fill_field("Patient","Ram Kumpavat","Ram K")
  
   	await f.click_element('button', 'Get prescribed procedures')
   	await f.close_modal()
  

   	await f.click_element('button', 'Check availability')
    
    await f.fill_field("practitioner","Dr.Pooja","Dr.Pooja")

   	await f.fill_field("Date",'09/09/2019')

  	await f.click_element('button', 'Today')


  	await f.click_element('datepicker--button', '')


   	await f.fill_field('Date','frappe.datetime.nowdate()')
   
   	await f.fill_field('Heathcare Practitioner','Dr.Amit Handa')
   
   
    
	await f.fill_field("Blood Group","B Positive")
	
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")

	
		
	
});    