

require 'spec_helper'
    feature "user sees articles" do

    # When I visit /articles I should be able to see all the articles that have been submitted.
        scenario 'see articles when visiting /articles' do
        visit '/articles'
        expect(page).to have_content("cats article")
        expect(page).to have_content("dogs article")
    end

    # Each article should show the description, title, and URL.
        scenario 'each article shows description, title and url'  do
        visit '/articles'
        expect(page).to  have_content('Description:')
        expect(page).to have_content('Title:')
        expect(page).to have_content('URL:')

        end


    # If I click on the URL it should take me to the relevant page inside of a new tab.
        scenario 'url takes me to new page' do
            visit '/articles'
            click_link 'cats article'
            expect(page).to have_current_path("cats/newcat")
            expect(page).to have_content('cats are awesome right')

        end

        

        end
