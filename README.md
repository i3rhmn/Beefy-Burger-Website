Beefy Burger Website
====================

Project Overview
================

Beefy Burger is a fictional burger restaurant website developed as a multi-page web development project.

The website was created using HTML, CSS, and JavaScript and provides users with information about the restaurant, its menu, staff, story, and registration functionality.

The project demonstrates fundamental front-end web development concepts, including:

*   HTML5
    
*   CSS3
    
*   JavaScript
    
*   Form validation
    
*   Regular expressions
    
*   Local Storage
    
*   DOM manipulation
    
*   Event handling
    
*   Responsive web design
    
*   Semantic HTML
    
*   Reusable CSS classes
    
*   Navigation between pages
    
*   Image integration
    
*   User personalization
    
*   User interface design
    

Project Goals
=============

The main goals of the project were to create a complete and visually consistent restaurant website while demonstrating practical knowledge of front-end web development.

The project focuses on:

*   Creating multiple interconnected web pages
    
*   Designing a consistent website interface
    
*   Presenting restaurant information
    
*   Displaying food and drink items
    
*   Introducing restaurant staff
    
*   Creating a registration system
    
*   Validating user input
    
*   Providing real-time validation feedback
    
*   Storing user information in Local Storage
    
*   Providing a personalized user experience
    
*   Creating a responsive website
    
*   Documenting design and development decisions
    

Website Concept
===============

Beefy Burger is a fictional burger restaurant created for the project.

The website presents the restaurant as a friendly burger brand focused on handcrafted burgers, fresh ingredients, and an enjoyable customer experience.

The website uses a food-focused visual identity with burger imagery, warm colors, structured content sections, and a simple navigation system.

Website Pages
=============

PagePurposeHome.htmlMain landing page and registration formMenu.htmlDisplays burgers and drinksAbout-us.htmlRestaurant information, story, vision, and missionStaff.htmlIntroduces the restaurant staffMaking-of.htmlExplains design and development decisionsOur-story.htmlProject reflectionreg.htmlRegistration functionality

Navigation
==========

The website provides a navigation bar that allows users to move between the different sections of the website.

The navigation contains:

*   Home
    
*   Menu
    
*   About Us
    
*   Staff
    
*   Making of
    
*   Our Story
    
*   Register
    

The currently selected page is visually identified using an active navigation class.

Home Page
=========

The Home page acts as the main landing page of the website.

It contains:

*   Beefy Burger branding
    
*   Navigation bar
    
*   Hero section
    
*   Burger image
    
*   Welcome message
    
*   Registration form
    
*   Footer
    
*   User name display
    

The main welcome message is:

> Welcome to Beefy Burger, where flavor meets satisfaction!

Registration Form
=================

The registration functionality collects:

*   First Name
    
*   Last Name
    
*   Mobile Number
    
*   Email Address
    

The form uses JavaScript to validate the information entered by the user.

Form Validation
===============

JavaScript validates the registration information before accepting the form.

The validation includes:

*   First name validation
    
*   Last name validation
    
*   Mobile number validation
    
*   Email validation
    

First Name Validation
=====================

The first name must contain at least 3 characters.

Last Name Validation
====================

The last name must contain at least 3 characters.

Mobile Number Validation
========================

The mobile number must contain exactly 8 digits.

The validation uses the following regular expression:

/^\\d{8}$/

Email Validation
================

The email field is validated using a regular expression to check whether the entered value follows a valid email format.

Real-Time Validation
====================

The registration form provides visual feedback while the user enters information.

Valid input fields receive the valid CSS class.

Invalid input fields receive the error CSS class.

This allows users to immediately understand whether their input is valid.

Local Storage
=============

The website uses browser Local Storage to save registration information.

The stored information includes:

*   firstName
    
*   lastName
    
*   mobile
    
*   email
    

Local Storage allows information to remain available in the browser after the page is refreshed.

User Personalization
====================

The website uses the stored first name to personalize the user's experience.

JavaScript retrieves the user's first name from Local Storage and displays it on the website.

Example:

> Welcome, Abdul!

JavaScript
==========

JavaScript provides the interactive functionality of the website.

The JavaScript implementation handles:

*   Form submission
    
*   Form validation
    
*   Real-time validation
    
*   Error messages
    
*   Valid input feedback
    
*   Local Storage
    
*   Retrieving stored information
    
*   Displaying the user's name
    
*   Dynamic page behavior
    

DOM Manipulation
================

JavaScript interacts with HTML elements through the Document Object Model (DOM).

The JavaScript can access:

*   Form fields
    
*   Buttons
    
*   Validation messages
    
*   User name display areas
    

This allows the website to respond dynamically to user actions.

Event Handling
==============

JavaScript event handling is used to respond to user interaction.

Examples include:

*   Form submission
    
*   User input
    
*   Field validation
    
*   Page loading
    

Menu Page
=========

The Menu page presents the restaurant's food and drink selections.

Each menu item includes:

*   Name
    
*   Price
    
*   Description
    
*   Image where available
    

Burger Menu
===========

BurgerPriceClassic Beefy Burger$8.99Cheesy Delight Burger$9.99Bacon Bliss Burger$10.99Spicy Chicken Burger$9.49

Drinks Menu
===========

DrinkPriceClassic Soda$2.50Fresh Lemonade$3.00Iced Tea$2.75Chocolate Milkshake$4.50Mineral Water$1.50

About Us Page
=============

The About Us page introduces the fictional Beefy Burger restaurant.

It explains the restaurant's concept and background and presents its vision and mission.

The page focuses on:

*   Fresh ingredients
    
*   Handcrafted burgers
    
*   Customer experience
    
*   Restaurant atmosphere
    
*   Community
    
*   Brand identity
    

Restaurant Story
================

The website presents Beefy Burger as beginning with the idea of creating delicious burgers using fresh ingredients.

The fictional restaurant story describes the business developing from a small food truck into a full restaurant.

Vision
======

The website's vision is to become a leading burger destination where every bite represents freshness and flavor.

Mission
=======

The website's mission is to serve handcrafted burgers using fresh ingredients while providing an enjoyable dining experience.

Staff Page
==========

The Staff page introduces the fictional Beefy Burger team.

NameRoleChef John DoeHead ChefJane SmithRestaurant ManagerPaul JohnsonGrill MasterMia WilliamsWaitressLucy BrownCashier

Each staff member is presented with:

*   Profile image
    
*   Name
    
*   Job role
    
*   Description
    

Making of Page
==============

The Making of page explains the design and coding decisions used to create the website.

It covers:

*   Color choices
    
*   Typography
    
*   HTML structure
    
*   CSS organization
    
*   JavaScript functionality
    
*   Maintainability
    

Design Choices
==============

The website was designed to create a friendly and visually appealing restaurant experience.

The design uses warm colors and neutral tones to create a consistent visual identity.

Color Palette
=============

The main brand color is:

#ffcb05

Other colors used include:

*   #2c2c2c
    
*   #e8e8e8
    
*   #f7f7f7
    

Yellow is used for branding and important visual elements.

Dark grey is used for navigation, headings, and contrast.

Light grey is used for backgrounds and supporting sections.

Typography
==========

The website uses:

Arial, sans-serif

Arial was selected as a clean, simple, and widely available font.

Different font sizes, bold headings, spacing, and contrast are used to create a clear visual hierarchy.

HTML Structure
==============

The website uses semantic HTML elements to organize content.

Examples include:

Semantic HTML makes the website structure easier to understand and maintain.

CSS Architecture
================

The project uses a shared stylesheet:

Styling/Style.css

The stylesheet controls:

*   Body
    
*   Header
    
*   Navigation
    
*   Hero section
    
*   Registration form
    
*   Buttons
    
*   Footer
    
*   About Us
    
*   Vision
    
*   Mission
    
*   Menu
    
*   Menu items
    
*   Staff
    
*   Making of
    
*   Our Story
    
*   Responsive layouts
    

Reusable CSS Classes
====================

Reusable classes are used throughout the website.

Examples include:

*   .hero
    
*   .register-form
    
*   .menu
    
*   .menu-item
    
*   .menu-item-details
    
*   .staff
    
*   .staff-member
    
*   .staff-details
    
*   .making-of
    
*   .our-story
    
*   .vision
    
*   .mission
    

Reusable classes help maintain consistent styling and make future changes easier.

Form Styling
============

The registration form uses CSS for:

*   Structured input fields
    
*   Rounded corners
    
*   Spacing
    
*   Button styling
    
*   Error highlighting
    
*   Valid input highlighting
    
*   Success messages
    

Navigation Styling
==================

The navigation uses:

*   Dark grey background
    
*   Yellow text
    
*   Bold links
    
*   Hover effects
    
*   Active page highlighting
    

Hero Section
============

The Home page contains a hero section featuring a burger image and welcome message.

The hero section uses:

*   Center alignment
    
*   Spacing
    
*   Background styling
    
*   Burger imagery
    
*   Highlighted welcome text
    

Responsive Design
=================

The website includes responsive CSS to support smaller screens.

The responsive layout uses a media query at:

@media (max-width: 768px)

On smaller screens, the navigation changes from a horizontal layout to a vertical layout.

User Interface
==============

The website uses:

*   Consistent navigation
    
*   Clear headings
    
*   Structured content sections
    
*   Rounded corners
    
*   Box shadows
    
*   Hover effects
    
*   Active navigation states
    
*   Form feedback
    
*   Image presentation
    
*   Responsive layouts
    

Our Story Page
==============

The Our Story page provides a reflection on the website development process.

The reflection discusses:

*   Work completed
    
*   Team collaboration
    
*   Development challenges
    
*   Communication
    
*   Technical learning
    
*   Project experience
    
*   Problem solving
    
*   Adaptability
    

Project Development
===================

The development process included:

1.  Creating the HTML page structure
    
2.  Creating the shared CSS stylesheet
    
3.  Designing the navigation system
    
4.  Adding restaurant content
    
5.  Adding food and staff images
    
6.  Implementing the registration form
    
7.  Adding JavaScript validation
    
8.  Implementing Local Storage
    
9.  Adding user personalization
    
10.  Applying responsive design
    
11.  Testing website functionality
    
12.  Reviewing the final website structure
    

Challenges
==========

The project involved several development challenges:

*   Maintaining consistent styling between pages
    
*   Managing multiple HTML files
    
*   Keeping file paths correct
    
*   Implementing JavaScript validation
    
*   Managing Local Storage
    
*   Making the website responsive
    
*   Maintaining consistent design
    
*   Managing image assets
    

Problem Solving
===============

The project demonstrates problem-solving through:

*   Reusable CSS classes
    
*   Shared styling
    
*   JavaScript validation
    
*   Structured HTML
    
*   Organized files
    
*   Responsive media queries
    
*   Local Storage
    
*   Consistent navigation
    

Maintainability
===============

The website was structured with maintainability in mind.

HTML uses semantic elements.

CSS uses reusable classes.

JavaScript functionality is separated from the HTML structure.

This makes it easier to modify or extend individual parts of the website.

Website Assets
==============

The website uses image assets for:

*   Hero section
    
*   Burger content
    
*   Menu items
    
*   Staff members
    
*   Restaurant information
    

Some original image assets are currently missing.

As a result, certain images referenced by the HTML files may not display correctly until the missing image files are restored.

File Paths
==========

The HTML pages use relative paths for CSS, JavaScript, and image files.

For example:

Styling/Style.css

and:

script.js

The image files are also referenced using relative paths.

Therefore, the folder structure should be maintained when uploading the project to GitHub.

Repository Structure
====================

Beefy-Burger-Website/

├── README.md

├── Home.html

├── Menu.html

├── About-us.html

├── Staff.html

├── Making-of.html

├── Our-story.html

├── reg.html

├── script.js

├── register.js

├── Styling/

│ └── Style.css

└── imgs/

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   └── Available website images   `

Main Files
==========

File / FolderPurposeREADME.mdProject documentationHome.htmlMain website pageMenu.htmlRestaurant menuAbout-us.htmlRestaurant informationStaff.htmlStaff informationMaking-of.htmlDesign and development explanationOur-story.htmlProject reflectionreg.htmlRegistration pagescript.jsWebsite JavaScript functionalityregister.jsRegistration-related functionalityStyling/Website CSSimgs/Available image assets

How to Run
==========

The project is a front-end website and does not require a database or backend server for its basic functionality.

To run the website:

1.  Download or clone the repository.
    
2.  Keep the existing folder structure.
    
3.  Open Home.html in a web browser.
    
4.  Use the navigation bar to browse the website.
    
5.  Open the Menu page to view the food and drinks.
    
6.  Open the About Us page.
    
7.  Open the Staff page.
    
8.  Open the Making of page.
    
9.  Open the Our Story page.
    
10.  Test the registration form.
    

Registration Testing
====================

A valid registration should follow these requirements:

*   First Name: At least 3 characters
    
*   Last Name: At least 3 characters
    
*   Mobile Number: Exactly 8 digits
    
*   Email: Valid email format
    

Example:

First Name: AbdulLast Name: AhmedMobile Number: 12345678Email: [example@email.com](mailto:example@email.com)

Invalid Input Testing
=====================

The form can also be tested using invalid values.

Example:

First Name: AbLast Name: AMobile Number: 123Email: invalid

The JavaScript validation should identify invalid fields and provide feedback.

Expected User Experience
========================

A user visiting the website should be able to:

1.  Open the Home page.
    
2.  Navigate between website sections.
    
3.  View the restaurant menu.
    
4.  Learn about Beefy Burger.
    
5.  View the restaurant staff.
    
6.  Read about the website development process.
    
7.  Register their information.
    
8.  Receive validation feedback.
    
9.  Have registration information stored in Local Storage.
    
10.  See personalized user information when available.
    

Project Features
================

The website includes:

*   Multi-page navigation
    
*   Restaurant branding
    
*   Home page
    
*   Hero section
    
*   Restaurant information
    
*   Menu presentation
    
*   Staff profiles
    
*   Vision and mission
    
*   Registration system
    
*   Form validation
    
*   Real-time validation
    
*   Local Storage
    
*   User personalization
    
*   Responsive design
    
*   Hover effects
    
*   Active navigation indicators
    
*   Reusable CSS components
    
*   Semantic HTML
    
*   Project reflection
    
*   Design documentation
    

Technologies Used
=================

TechnologyPurposeHTML5Website structure and contentCSS3Styling and responsive designJavaScriptInteractivity and validationLocal StorageBrowser-side data storageRegular ExpressionsInput validationGitHubSource code management

Skills Demonstrated
===================

*   HTML5
    
*   CSS3
    
*   JavaScript
    
*   Front-End Development
    
*   Semantic HTML
    
*   Responsive Web Design
    
*   Form Validation
    
*   Regular Expressions
    
*   Local Storage
    
*   DOM Manipulation
    
*   Event Handling
    
*   CSS Classes
    
*   Website Navigation
    
*   User Interface Design
    
*   Image Integration
    
*   Website Testing
    
*   File Organization
    
*   Technical Documentation
    

Project Learning Outcomes
=========================

This project provides practical experience in building a front-end website using multiple technologies.

The project demonstrates how HTML, CSS, and JavaScript work together.

HTML provides the structure.

CSS provides the visual design.

JavaScript provides interaction and dynamic functionality.

Local Storage provides browser-side data persistence for registration information.

Project Reflection
==================

The project provided practical experience in developing a multi-page website using HTML, CSS, and JavaScript.

It also provided experience with:

*   Working with a shared website structure
    
*   Maintaining consistent styling
    
*   Implementing JavaScript validation
    
*   Handling user input
    
*   Using Local Storage
    
*   Designing responsive layouts
    
*   Organizing website assets
    
*   Testing website functionality
    
*   Collaborating during development
    

Project Status
==============

The website is available as a front-end project.

Some original image assets are currently missing, so certain image references may not display until the corresponding files are restored.

The available website source files remain organized according to their existing structure.

Future Improvements
===================

Possible future improvements include:

*   Restoring all missing image assets
    
*   Improving accessibility
    
*   Adding additional responsive layouts
    
*   Adding more interactive menu features
    
*   Adding a shopping cart system
    
*   Adding backend functionality
    
*   Adding a database for customer registrations
    
*   Improving form security
    
*   Adding server-side validation
    
*   Adding additional restaurant pages
    
*   Improving mobile navigation
    
*   Adding more advanced animations
    

Project Outcome
===============

The final project demonstrates the development of a fictional restaurant website using fundamental front-end technologies.

The website combines structured HTML, reusable CSS styling, and JavaScript functionality to provide:

*   Restaurant information
    
*   Menu presentation
    
*   Staff information
    
*   Registration functionality
    
*   Input validation
    
*   Local Storage
    
*   User personalization
    
*   Responsive design
    
*   Interactive navigation
    

Disclaimer
==========

Beefy Burger is a fictional restaurant created for academic and educational purposes.

This project is intended to demonstrate front-end web development concepts and does not represent a real restaurant or commercial business.
