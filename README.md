# Blog
### Description
* I made a blog site with the following components:
- home: is the default page with a list of all the posts
- Post: shows a single detailed view of a post. The user can edit each section including by clicking on the text, and can unselect by clicking elsewhere. The cover image will also change is the user changes the cover url. If the user deletes the content then a placeholder message such as "write title here" is shown. Markdown is supported
-newPost: creates a new post with all fields mandatory. There is a max limit of 30 characters for the title. User creates a new post by clicking the button and will be redirected to the home page where the new post will be added. The user can click on the home icon to go back tot he home page if they wish to cancel making a post.

## LAB4 PART 2-API

### Extra credits
* Input validation: if not all fields are filled out when creating a post the user will see a message above the submit button that says "Fill out all fields please :)"

## LAB4 PART 2-API

### Extra credits
* Comment function: You can add a comment to each of the posts. The comments are listed and numbered in the order they are added in
* store tags as arrays: The tags are split by space and stored in an array

## LAB4 PART 3-AUTH

### Extra credits
* profile page: displays welcome message for the user, username, and email
* Error page: applies to errors such as not inputting all fields when signing up, accessing profile page when not logged. Will be redirected to see an error.
* Only authenticated users can have their edits and comments saved
