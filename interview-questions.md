# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this mistake, I would add a foreign key to the Student model. The foreign key would be on the Student model. The name of the foreign key would be cohort_id.

Researched answer: A foreign key is a reference to another record in the database. It is used to link one record to another. In this case, the foreign key is on the Student model as the Student model is the one that has the has_many relationship with the Cohort model.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are update, destroy, and show. These need params in order to have a change happen to the record.

Researched answer: Becasue show uses a dynamic URl, it can access the ID of the record through params hash. Destroy find the record in the database on the ID in the url params hash and deletes it. Update modifies an existing record based on the ID in the url hence why it requires params.

3. Name three rails generator commands. What is created by each?

Your answer: There is rails g controller which creates a controller that means a class that inherits from ApplicationController. Rails g model creates a model that inherits from ActiveRecord::Base. Rails g migration creates a migration file that inherits from ActiveRecord::Migration.

Researched answer: Rails g controller creates a model that has a controller file, a view file and a route file. This is sorta a template that saves time. Rails g model create a model that already has a database table. Rails g migration is a way to update the database. It updates the schema of the database rather than having to perform modifications in pure sql.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - index

action: "POST" location: /students - create

action: "GET" location: /students/new - new

action: "GET" location: /students/2 - show

action: "GET" location: /students/2/edit - edit

action: "PATCH" location: /students/2 - update

action: "DELETE" location: /students/2 - destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I want to be able to create a new to do item.
As a developer, I want to be able to view all of my to do items.
As a developer, I want to be able to view a single to do item.
As a developer, I want to be able to edit a to do item.
As a developer, I can initialize each to do item with a title, description, and complete status.
As a developer, I can return the title, description, and complete status of each to do item.
As a developer, I can mark a to do item as complete.
As a developer, I can mark a to do item as incomplete.
As a developer, I can delete a to do item.
As a developer, I can delete all to do items at once.