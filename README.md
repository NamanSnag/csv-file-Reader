
# 📁 CSV Reader
A simple project to convert a CSV file to JSON format and display it in a tabular form using EJS.


## Features

- CSV to JSON conversion
- Showing JSON data in a tabular format
- Searching data
- Sorting data in ascending and descending order


## Technologies Used

- EJS
- JavaScript
- HTML
- CSS


## How to use

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- EJS
- JavaScript
- HTML
- CSS

Clone the project

```bash
  git clone https://github.com/NamanSnag/csv-file-Reader
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Open your web browser and navigate to http://localhost:8000
## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

        CSV
        |-----assets
        |       |--- css
        |             |-- details.css
        |             |-- landing.css
        |             |-- layout.css
        |             └-- upload.css
        |       |--- js
        |       |     
        |       |--- scss
        |             |-- details.scss
        |             |-- landing.scss
        |             |-- layout.scss
        |             └-- upload.scss
        |------ controllers
        |         |--- read_Controller.js
        |         |--- home_Controller.js
        |         └--- upload_Controller.js
        |------ routers
        |         └--- index.js
        |------ uploads
        |         └--- All the upload files
        |------ views
        |         |--- details.ejs
        |         |--- landingPage.ejs
        |         |--- layout.ejs
        |         └--- upload.ejs  
        |------ .env
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md


## Authors

- [@Naman Nag](https://github.com/NamanSnag/csv-file-Reader)

