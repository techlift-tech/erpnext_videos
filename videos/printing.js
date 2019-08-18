import { Selector } from 'testcafe';
import f from '../lib';


fixture("Printing and Branding")
    .page ("http://localhost:8000/login");


test('Getting started with ERPNext', async t => {
	
	await f.login('administrator', 'admin')

	await f.use_voice("samantha")

    await f.toggle_speak(true)
	
	
		
	await f.search('quota', 'Quotation List')
		
	
		
	await f.click_list_item("SAL-QTN-2019-00001")
		
 	var link = await f.select_element('a', 'QTN-00018')
		
	
		
	await f.click_print_icon()
		
	await f.scroll(120)
		
	
		
	await f.hover_element("btn-print-print")
		
	
	await f.hover_element("btn-download-pdf")
		
	
		
	await f.goto_desk()

		
	await f.search('lette','Letter Head List')
		
	await f.hover_element("a",".list-item",1)
		
	
		
	await f.click_primary_button('New')
		
	
	await f.fill_field("Letter Head Name","Gadget Solutions")
		
	await f.click_primary_button("Save")
		
	
		
	// We need to insert image in the letter head field here await f.set_sidebar_image('./images/Hermione Granger.png')
		
	
	await f.fill_field("Footer","This is a computer generated quotation and does not requires any signature.")
		
	await f.speak(`
			Lets save this Letter head.
			`)
		
	await f.click_primary_button("Save")
		
	// await f.fill_field("default", "1")
		
	await f.speak(`
		Check Is default to have this letter head selected automatically in the transactions.
		`)
	
	// await f.hover_element("Disabled")
		
	await f.speak(`
			Click this field to disable this letter head. 
			`)
		
	await f.goto_desk()
		
	await f.speak(`
			E R P Next has default print format available for each transaction. You can also create custom print formats as per your
			requirement using Print Format Builder. Let's check how to create a Print Format.'
			`)
		
	await f.search('sales or','Sales Order List')
		
	await f.click_list_item("SO-00020")
	
	await f.click_print_icon()
		
	await f.scroll(120)
		
	await f.scroll(0)
		
	// await f.hover_element("print-preview-select")
	
	await f.speak(`
			To create new Print format as per your requirement, click on Customize.
				`)
	// await f.click("btn-print-edit", Customize)
	
	await f.speak(`
			In this view, you can drag and drop the required field from the left bar.
			`)
		
	await f.speak(`
			Edit header section to customize Print Heading. Also, you can define fields from which value will be shown in the header section.
			`)		
	
});
	
		
	
		
	
	
	
	