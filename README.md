# Pizza Parlor

#### By _**Joe Roaden**_

#### _a webpage used to generate responses based on user input.  This project uses Constructor and Prototype Methods to generate a result_

## Technologies Used

* _html_
* _css_
* _javascript_
* _bootstrap_
* _jquery_



## Description

_A web application that takes input from the user and generates a price based on their selections_

- [x] _This project's GitHub repo can be found at the following link_ [GitHub Pages](https://github.com/joeroaden/pizza-parlor).  


## Setup/Installation Requirements

* _To properly view this project, please see the steps below on cloning from GitHub_

1. Locate this projects GitHub Repository via [GitHub Pages](https://github.com/joeroaden/pizza-parlor).  

2. Within the terminal, navigate to the directory where you want to clone and save this project (Typically Desktop, but just be sure you do not clone into another project's directory)

3. Once within your desired directory to save the clone, type the following in your terminal
_$ git clone https://github.com/joeroaden/pizza-parlor

4. Since this is a public repository, no credentials will be needed and you can now navigate into the pizza-parlor directory to access the html

5. Acces the html page called pizza-parlor.html and you are ready to begin using the application

6. For additional information and help, here is a link to GitHub Docs that provides detailed explanations - https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Known Bugs

* _there are no known bugs at this time_


## License

_MIT License_



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

Copyright (c) June 17th, 2022 Joe Roaden

_Tests_

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }