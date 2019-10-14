We have successfully created an application to create delicious wing orders of various flavors!

## Application Set Up
Set up the application and run the test suite with the following commands:

```no-highlight
et get wings-order-form
cd wings-order-form
bundle install
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
bundle exec rspec
```
The tests should be passing, and the form should be working correctly.

## 1. Refactor the wing order form

However, we did not use [Rails Form Helpers][rails-form-helpers], so the HTML that makes up our form is starting to become excessive and difficult to understand.
Let's refactor the form to use the appropriate rails form helpers to reduce the html clutter.

Refactor the form in `wing_orders/new.html.erb` to user Rails form helpers. Understanding and knowing your way around the Rails documentation is an important skill to learn. Look into the following resources for guidance:
- [Select and Option Tags][select-and-option-tags]
- [Check Boxes][check-boxes]
- [Collection Radio Buttons][collection-radio-buttons]
- [Collection Check Boxes][collection-check-boxes]

You'll notice that the collection documentation has the following code for general usage:

`collection_radio_buttons(object, method, collection, value_method, text_method, ...)`

Let's dissect this.
* `object`(in the doc's example, **:post**) - The type of object the form is creating.

* `method`(**:author_id**) - refers to the column of the object to which this portion of the form is posting.

* `collection`(**Author.all**) - The collection of objects that the user can choose from.

* `value_method`(**:id**) - The method called on a single Author object in order to determine what value is passed through to params when the form is submitted. In this case, when we select a single `Author` and submit, `:id` is pulling the id of that specific author and passing it as a parameter. If we were to check the params hash, we would see the value of the id stored in `params[:post][:author_id]`.

* `text_method`(**:name_with_initial**) - The method called on the on a single Author object in order to determine how each selection will be displayed to the client. In the example, we wish to have the user select from a list of Author names, not a list of Author id's, but the id of the Author is what gets submitted through the `value_method`.

If we were to refactor the example to use `form_for`, the result would be the following:
```ruby
form_for(post) do |f|
  f.collection_radio_buttons(:author_id, Author.all, :id, :name_with_initial)
end
```

[rails-form-helpers]: http://guides.rubyonrails.org/form_helpers.html
[select-and-option-tags]: http://guides.rubyonrails.org/form_helpers.html#the-select-and-option-tags
[collection-radio-buttons]: http://edgeapi.rubyonrails.org/classes/ActionView/Helpers/FormOptionsHelper.html#method-i-collection_radio_buttons
[check-boxes]: http://guides.rubyonrails.org/form_helpers.html#checkboxes
[collection-check-boxes]: http://edgeapi.rubyonrails.org/classes/ActionView/Helpers/FormOptionsHelper.html#method-i-collection_check_boxes

**Once your are finished refactoring the form, run `bundle exec rspec` to ensure that the original functionality still works.**

## 2. Render forms in a partial

It would be nice if we could edit our orders in case we forgot to add ranch dressing! Write an acceptance test and implement functionality for editing a wing order. Leverage the same form helper we created by creating a partial for the form and rendering it in two places.
