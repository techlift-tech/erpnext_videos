import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Cancel and Amend"


fixture(video_title)
    .page ("http://localhost:8000/login");

test(video_title, async t => {
	
	await f.login('administrator','admin')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("alex")

    await f.toggle_speak(true)
	
	

	await f.add_slide({
		title: "Edit Submitted Document",
		sub_heading: "Test sub-heading",
		bullet_points: [
			"Cancel",
			"Amend",
		],
	})
	
	await f.pause(3)

	
	await f.remove_slide()

	
	await f.search ("purchase o", "Purchase Order List")

	await f.click_list_item("Fermentum Metus Aenean LLP")

	await f.scroll(200)

	await f.hover_element("label", "Supplier")

	

	await f.hover_element("label", "Date")

	await f.scroll_to_section("Currency and Price List")

	await f.pause(1)

	await f.scroll_to_section("Additional Discount")

	await f.pause(1)

	await f.scroll(0)



	await f.click_element("button","Cancel")

	await f.click_primary_button('Yes')

	

	await f.hover_element("button", "Amend")

	

	await f.click_primary_button("Amend")

	await f.hover_element("label","Supplier")

	await f.hover_element("label","Date")

	

	await f.fill_field("supplier", "Morbi Tristique Foundation", "morbi")

	await f.speak(`
			Save.
			`)

	await f.click_primary_button('Save')

	await f.hover_element(".ellipsis.sub-heading.text-muted")

	

	await f.click_primary_button('Submit')
	await f.click_primary_button('Yes')

	
		
	await f.add_slide({
		title: "Cancel and Amend Permission",
		})
		
	
		
	await f.remove_slide()
		
	await f.search("purchase order", "Purchase Order List")
		
	await f.pause(1)
		
	await f.click_form_menu()
	
	await f.pause(1)
		
	await f.click_dropdown_item("Role Permissions Manager")
		
	await f.pause(1)
		
	await f.hover_element("a", "Purchase User")
		
	
		
	await f.hover_element("a", "Purchase Manager")
		
	
});