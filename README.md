# Passwor-generator
In this project is a random pasword generator application is developed. This application can be used campanies as a temporary code to reset forgot password requests. 

# Direction for use 
1. To generate a new password click on `Generate passwword`, then enter the length of password or number of characters. No blank, space, letters or special characters are accepted.
2. `Click Ok` to confirm for every Characters you want to include in yor password. 
3. The random password generated is posted in the box.

# files 
There are `password.html`, `password.css` and `password.js`. 
In the javascript part all the neccesary divs and buttons are collected by `cueryselector` and hold in a var. Then, if number entry is not confirmed then request ends, else if number is confrmed  an alert pop up. The characters confirmed are pushed into an arrey and out of which random characters based on the numbers needed are selected. This randomly selected number is appended in to a new `h3`.
