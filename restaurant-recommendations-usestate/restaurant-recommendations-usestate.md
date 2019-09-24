## Introduction

In this challenge, you will build a single-page app, similar to Yelp, for
reviewing restaurants. When complete, a user can click on a restaurant and see it highlighted in blue. Selecting that restaurant also displays the associated reviews. In addition, users can submit a new review via form displayed below the reviews list.

## Getting Started

```no-highlight
et get restaurant-recommendations-usestate
cd restaurant-recommendations-usestate
yarn install
yarn run start
```

## Things to Know

Take a look at the way we've separated the types of components in your text editor. A react infrastructure has already been partially laid out for you. Make sure to write out the current component tree, evaluate how data and props are passed, and determine the most effective places for us to add user input forms. Planning out your approach will help you succeed.

## Instructions

![Restaurant Recommendations App](https://s3.amazonaws.com/horizon-production/images/restaurant-recommendations.png)

We have provided you a web application with a two-column layout, which you can find at <http://localhost:8080>. The column on the left contains a list of Restaurants and displays their title, location, and a small picture. Only one restaurant in this column can be selected at a time.

The column on the right displays the reviews for the selected restaurant.

For this assignment, structure your app like so:

* Logic for the `New Review` form should be held in a `ReviewForm`
* `App.js` should hold the logic for the two `FormContainer`s, as well as the lists of restaurants and reviews.

### Part One

Build a form so that people can add a review. The form should prompt the user
for the following information:

* Name
* Rating (one to five stars)
* The text content of their review of the restaurant

You should only be tracking user's input as they type in to the form (at first). We will persist this new review in a later step.

#### Hints

* Start simple. Get your Review Form to render with the necessary fields but without state and event listeners. Then track user input.
* We will need a hidden field for the `restaurant_id`, so we can keep track of which restaurant the newly added review is tied to.
* Display the form at the bottom of the reviews for the selected restaurant. You do not need to validate your form inputs.

### Part Two

* Handle the form submission by saving the restaurant review to our state of `reviews` in `App`.
* If you have built your React single-page application correctly, a change in state should signal a page update, and you will see the new review in your application.

#### Hints
We need to determine how `reviews` state will be tracked. Note: in order to change the state in `App` where `reviews` state is kept, you'll need to define a function in `App` that will be passed down to your `ReviewForm` component. This will allow you to pass new review information up from the `ReviewForm` to the `App` where all of the reviews are maintained.

### Part Three (optional)

Users shouldn't be constrained to this small list of restaurants!

* Add a second form to allow users to add restaurants to the list.
* Logic for the `Restaurant` form should each be held in a `RestaurantForm`
* As with the reviews form, the data should be saved to your App's state so the new additions are immediately rendered on the page.

### Part Four (optional)

You never know when your site could come under attack by malicious users. Add code to validate your inputs (ensure they are not blank) on both forms to help protect your site.
