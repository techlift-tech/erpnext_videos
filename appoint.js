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

	//await f.hover_element('a', "Accounts", 0.25)

	

	//await f.hover_element('a', "Maintenance", 0.25)

	//await f.hover_element('a', "Selling", 0.25)

	
	//await f.click_module("Accounts")

	

	//await f.click_link("#List/Patient Appointment")
    
     await f.click_list_item("P19080105")

     await f.click_section("Patient Consultation ")
	
	await f.click_primary_button('Make New Consultation')


	await f.fill_field("customer", "InMobi Solutions", "inmobi")

	
		
	await f.open_row('items', 1)
	await f.fill_field('item_code', 'One Plus 3')
	await f.fill_field('qty', '2')

	await f.close_row()

	await f.speak(`
		Apply taxes.
		`)

	await f.fill_field("taxes_and_charges", "In State")

	

	await f.click_primary_button('Save')

	await f.speak(`
		Let’s check the print preview of this Invoice.
		`)

	await f.click_print_icon()
		
	await f.scroll(100)
	
	await f.speak (`
		Looks great! Lets submit this invoice.
		`)

	await f.click_primary_button('Edit')
	await f.click_primary_button('Save')
	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')
		
	await f.close_modal()
		
	await f.goto_desk()
		
	await f.hover_element("#navbar-search")
		
	await f.speak
		  (`
		  You can use search-bar to quickly open new document. You just need to type new, and then document name. Let's open new Quotation form for an example.'
			  `)
		
	await f.search('new quot', 'New Quotation')
		
	await f.hover_element("#navbar-search")

	await f.speak(`
		From the search bar, you can also access list of records, tree masters, reports et cetera.
		`)
		
	await f.click_help_button()
		
	await f.speak(`
		For any assistance, search E R P Next manual and help videos from here.
				`)
		
	await f.click_help_button()
		
	await f.speak(`
			Hope you found this video tutorial useful. For more details and trial account, check e r p next dot com. 
			Thanks for watching.
			`)
});
