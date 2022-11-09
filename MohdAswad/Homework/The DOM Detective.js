// isit General Assembly's website in Google Chrome, and open up the JavaScript console.

// You'll have to do this all in the JavaScript console, so keep track of what you have written!

// Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

// // The title of the page
 document.querySelector('title')
// // The logo in the nav
 document.querySelector('a.navi_banner_logo')
// // The "Find Your Course" button in the nav
 document.querySelector(".navi_menu .highlight a");
// // The heading that says "Learning Today, Leading Tomorrow"
 document.querySelector('H1')
// // All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
 document.querySelectorAll('course-name')
// // The amount of campuses around the world
 //document.querySelector('ul.MetroSwitcher__metro_switcher_list___1ugWH')
 document.querySelector('div.facts_list_item_quantity')
// // The number of instructors
 document.querySelectorAll('div.facts_list_item_quantity')[2]
// // The logos of GA's featured clients and hiring partners
 document.querySelectorAll('div.Employers__list___1cuG_')
// // GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
 document.querySelectorAll('div.navi_footer-standfirst')
// // The input where you add your email to sign up for the newsletter (in the footer)
 document.querySelectorAll('input.navi_footer-signup-email-input')

