# Module 3 - Front end Questions

## `App` Component

### Q1. Why do we need the `renderView` method?
In order to render the proper component,we need to create a conditional statement inside the renderView.

### Q2. What value do we expect `this.state.view` to be in order to render the Post component?
It cannot be posts or create.

### Q3. Why do we need to bind `this.changeView` to the keyword this (on line 16)?
So that it could refer to the App and not to the component. 

## `Posts` Component

### Q4. What interactions with the server will be required in order to fully implement this component?
http requests or Axios or Jquery AJAX will be required in order to fully implement this component. 

### Q5. What information should be kept inside `this.state` in this component?
Need a state that waits for the posts to be returned from the server. Another state to render the data of all the posts from the database. 

### Q6. What props does this component receive from its parent component?
this.changeView

### Q7. What additional components might we create to help implement this component?
no.

## `Post` Component

### Q8. What interactions with the server will be required in order to fully implement this component?
Make an AJAX request to get all posts, make a new post, get post by id, find one post and update votes, and and finally add comments. 

### Q9. What information should be kept inside `this.state` in this component?
Headers, sentences in a paragraph, upvotes, comments, comment-entry, 

### Q10. What props does this component receive from its parent component?
postId

### Q11. What additional components might we create to help implement this component?
nothing additional.

## `Create` Component

### Q12. What interactions with the server will be required in order to fully implement this component?
Axios call to the right controller.

### Q13. What information should be kept inside `this.state` in this component?
title and body - texts and boxes.

### Q14. What props does this component receive from its parent component?
this.changeView

### Q15. What additional components might we create to help implement this component?
None!

<!-- Your answer here! -->
