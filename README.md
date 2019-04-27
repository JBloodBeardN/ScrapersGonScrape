# ScrapersGonScrape

scrapers gon scrape is a homework activity for ut coding bootcamp.

The solution has yet to fully meet specifications of adding notes to a scraped article and being able to delete them.

Currently the app is using the echoJS scraping script to pull in articles, pushing those into a handlebars template powered by bootstrap. 
Each article has a bootstrap card which takes you to a form page, still in infancy. 

The solution currently allows a one-to-one relationship of note to article. notes are note deleted. new notes overwrite the association with the article to point at the new note. Definitely a memory leak situation as there is no notes delete or collection drop at this time. 

to finish the project. 

I would- integrate a bootstrap modal which is data populated on click of the "View Notes" button.
-this would house the current form page contents. 
-this would also have a <ul> of the array of notes associated with an article (associated change to database struction one-to-many)
  I would add a delete button(probably icon) to each of the <li> Note <button id=delete-{{id}}></li> and associated javascript onclick and route for db.notes.remove /delete
  
  lastly, you can see that I started to play around with bootstrap tabs.. if I had replaced the scrape, I was going to try to do a scrape of different article types and populate different collections. pipe dreams. 
  
 I think I used all of the tech, but I must admit, I did more getting ready made components from in class activities to play nice together and against a new heroku / MongoDB instance, than writing any of my own functionality.
