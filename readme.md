# Mina Landing Page

This is a landing page for Mina, a marketplace for secondhand baby gear that allows users to join a waitlist.

## Google Sheets Form Integration Setup

Follow these steps to set up the Google Sheets integration for collecting email addresses and zipcodes:

### Step 1: Create a Google Sheet

1. Log in to Google Drive with the minateam0504@gmail.com account
2. Create a new Google Sheet
3. Name it "Mina Waitlist Submissions"
4. Set up the following columns in row 1:
   - A1: Timestamp
   - B1: Email
   - C1: Zipcode

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to Extensions > Apps Script
2. Create a new script with the following code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get form data
  var data = e.parameter;
  var email = data.email || "No email provided";
  var zipcode = data.zipcode || "No zipcode provided";
  
  // Validate email format
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var isValidEmail = emailRegex.test(email);
  
  // Validate zipcode format (5 digits)
  var zipcodeRegex = /^\d{5}$/;
  var isValidZipcode = zipcodeRegex.test(zipcode);
  
  // Only proceed if both email and zipcode are valid
  if (isValidEmail && isValidZipcode) {
    // Add timestamp and data to sheet
    sheet.appendRow([new Date(), email, zipcode]);
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Thank you for joining our waitlist!'
    })).setMimeType(ContentService.MimeType.JSON);
  } else {
    // Return error message
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': 'Please provide a valid email and 5-digit zipcode.'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script with a name like "Form Handler"
4. Click Deploy > New deployment
5. Select "Web app" as the type
6. Set "Execute as" to "Me"
7. Set "Who has access" to "Anyone"
8. Click "Deploy"
9. Copy the web app URL that's generated (it will look something like: https://script.google.com/macros/s/AKfycbz...)

### Step 3: Update Your HTML Form

1. Open index.html
2. Find the form with id="waitlistForm"
3. Replace "YOUR_GOOGLE_SCRIPT_URL" with the URL you copied in Step 2

```html
<form id="waitlistForm" action="YOUR_COPIED_URL_HERE" method="POST">
```

### Step 4: Test the Form

1. Open the landing page in a browser
2. Fill out the form with a valid email and zipcode
3. Submit the form
4. Check your Google Sheet to verify that the data was recorded

### Additional Notes

- The form includes client-side validation for email format and 5-digit zipcodes
- The Google Apps Script also includes server-side validation as a backup
- The form submission is handled via JavaScript to provide a better user experience (no page reload)
- You may need to authorize the script the first time it runs

If you need to make changes to the script, you'll need to create a new deployment and update the URL in the HTML form.

## Features

- Clean and responsive design
- Consistent style with the Mina app design (https://yxu921.github.io/mina/)
- Email and zipcode collection form with validation
- Google Sheets integration for storing submissions
- Mobile-friendly layout

## Technologies Used

- **HTML5**: Structure of the page
- **CSS3**: Styling and responsive layout
- **JavaScript**: Form handling and validation
- **Google Apps Script**: Backend for form processing
- **Google Sheets**: Data storage for form submissions
