Some launchers are going camping, so - naturally - they decided to write a Rails app to help them organize.

### Learning Goals

### Getting Started

```no-highlight
et get nested-routes-going-camping
cd nested-routes-going-camping
bundle exec bundle install
bundle exec rake db:create && bundle exec rake db:migrate && bundle exec rake db:seed
```

### Instructions

Our application will have several models:

- a `camper` is a person going camping
- a `supply` is something a `camper` brings with them
- a `campsite` is an area that a `camper` camps in

A campsite can have many campers, and a camper can have many supplies. These relationships have already been established on the model and database levels.

You've also been provided with index views for all of those resources, but they're a little disorganized:

Currently, a user can see all campers (`/campers`), all supplies (`/supplies`), and all campsites (`/campsites`).

But what we really want is to see what supplies each camper (e.g., `/campers/1/supplies`) is bringing and which campers are camping at a given campsite (e.g., (`/campsites/1/campers`)).

In our infinite test-driven-development wisdom, we've set up some tests to make sure that our refactoring gives us the outcome we want!

1. Run `rspec` to run the rspec tests that have been provided. Expect two failures with `ActionController::RoutingError` errors. Read the error messages and resolve them by modifying the routes.

- After your route failures have been resolved, you'll encounter some test failures concerning the content on your pages. You'll need to modify your app to pass the remaining tests.

  - Carefully read the test results and review test specs in `spec/features` to get a sense of the final target.
  - Take a look at your models, views, and controllers. Which of these should be modified to pass the tests?

    {% show_hint %}
    We could modify the views, but it would be simpler to modify the controllers instead. We don't need `/campers/1/supplies` to have a dramatically different layout than `/supplies`, so we can just tweak the data being handed to each view by the controller.
    {% endshow_hint %}

  - Make the changes needed to make the tests pass.

    {% show_hint %}
      You'll need to handle two different cases: a user landing on the, e.g., campers index page via `/campers` and via `/campsites/1/campers`. What logic can you use in the controller to differentiate between these two routes?
    {% endshow_hint %}

    {% show_hint %}
      Pop a `binding.pry` into the first line of your `#create` method and start your server. Navigate to `/campers` (or `/supplies`) and check your params. Navigate to `/campsites/1/campers` (or `/campers/1/supplies`) and check your params. How can you use this information to your advantage?
    {% endshow_hint %}

    {% show_hint %}
      Remember that controllers are still just ruby files.  You can do the same ruby logic there as anywhere else, including `if` blocks and loops!
    {% endshow_hint %}
