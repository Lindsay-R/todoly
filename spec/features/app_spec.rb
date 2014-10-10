require 'rails_helper'

describe "viewing the todo page" do
  it "shows root page", js:true do
    visit root_path

    expect(page).to have_content("Todo.ly")

  end
  it "can create a todo", js:true do
    visit root_path

    expect(page).to have_content("Todo.ly")
    fill_in "todo", with: "walk dog"
    click_on "Create Todo"
    expect(page).to have_content("walk dog")
  end

end