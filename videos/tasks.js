import { Selector } from 'testcafe';
import f from '../lib';

const video_title = "Project and Tasks"


fixture(video_title)
    .page ("http://localhost:8000/login");

test(video_title, async t => {
	
	await f.login('administrator','admin')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("tom")

    await f.toggle_speak(true)

	
	await f.add_slide({
		title: "Task",
			})



	await f.remove_slide()

	
	await f.click_icon("Projects")

	await f.pause(1)

	await f.click_module_item("Task")

	await f.pause(1)

	

	await f.click_primary_button("New")

	

	await f.fill_field("Subject", "Test iPhone X")

	await f.hover_element("label", "Status")

	

	await f.hover_element("label", "Project")



	await f.hover_element("label", "Expected Start Date")

	

	await f.fill_field("exp_start_date", "25-09-2017")

	await f.fill_field("exp_end_date", "28-09-2017")



	await f.click_primary_button("Save")

	await f.pause(1)

	await f.hover_element("label", "% Progress")


	await f.fill_field("progress", "20")

	await f.click_element("label", "Details")



	await f.fill_field("Details", "Test Face ID, Cameras, UI navigation.")

	await f.scroll_to_section("Depends On")

	

	await f.add_row("depends_on")

	await f.open_row("depends_on", 1)

	await f.fill_field("task", "TASK00019", "19")

	await f.close_row()

	await f.click_primary_button("Save")

	await f.scroll(0)



	await f.hover_element(".strong.add-assignment", "Assign")

	await f.hover_element(".form-shared")

	await f.add_slide({
			title: "Gantt Chart",
				})



	await f.remove_slide()

	await f.go_back()

	await f.pause(1)

	await f.click_element("a","Gantt")

	await f.pause(2)

	await f.scroll(300)

	
	await f.hover_element(".bar-label","Design (TASK00007)")

	

	await f.scroll(0)

	await f.click_element("a","List")

	await f.click_list_item("Test iPhone X")

	await f.add_slide({
			title: "Timesheet from Task",
					})


	await f.remove_slide()

	await f.pause(1)

	await f.click_toolbar_button("View")

	await f.pause(1)

	await f.click_dropdown_item("Timesheet")

	await f.pause(1)

	await f.click_primary_button("New")

	await f.pause(1)

	await f.scroll_to_section("Timesheet Details")

	await f.open_row("time_logs", 1)

	

	await f.fill_field("Activity Type", "Alpha Testing", "alpha")

	await f.fill_field("From Time", "23-09-2017 11:30:00")

	

	await f.fill_field("Hrs", "3")


	await f.fill_field("task", "TASK00024", "24")

	await f.close_row()


	await f.click_primary_button("Save")

	await f.pause(1)

	await f.click_primary_button("Submit")

	await f.click_primary_button("Yes")

	await f.click_primary_button("Submit")
	


	await f.search("24 in task", "24 in Task")
		
	await f.click_list_item("Test iPhone X")
		
	await f.hover_element("label", "Actual Time (in hours)")
	
		
	await f.scroll(0)
	
	
});