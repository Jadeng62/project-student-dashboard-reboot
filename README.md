# Student Dashboard App

## Overview

Welcome to our Student Dashboard App! This application was designed to simplify the process of managing student records by providing a user-friendly platform to view, filter, and add comments to a specific student's record. Whether you're a student or teacher, this app is here to streamline your workflow.

## Installation

- Fork and Clone this repository

  - Open the repository in VS Code by running `code .` in the terminal

  - Run the command `npm install` to receive all the necessary dependecies

- Now clone this repository [Back End Server](https://github.com/10-3-pursuit/project-student-dashboard-reboot-server)

  - Run the command `npm install` to receive all the necessary dependecies

- Now with both terminals up for each respective repository run the command `npm run dev`. This will make the page visible and make the server run in order to grab the students information.

## Features

### Viewing List of Students

Once you load up the page you will see a list of student cards being displayed. This will show you their name, username, birthday and if they're in the process of graduating. On the top right of their card will indicate "On track to graduate."

\*Insert image here

### Filtering Cohorts

Based on the home page you can see how on the top it shows "All Cohorts", "Total Fellows: 250." These are dynamic so they can be manipulated based upon our filtering system.

\*Insert Cohort Count home page

On the aside filter component you are able to select the specific semester you are looking for. You can also change the order from ascending to descending. Once you click the respective semester of students you are looking for, the list of student cards will update. And let's just say you want to view all students from all cohorts again. Select the All Semesters button.

\*Insert image of Aside

### Student View

If you haven't noticed but when you hover your cursor over a student's name it turns red. That's because it is clickable! Once you select the student. You are directed to a page that displays more about the student such as personal information, codewars, scores and certifications. You are also displayed with a form titled "1-on-1 Notes"

\*Insert image of student show

### Add Comments

The "1-on-1 Notes" section of the student page allows an educator to leave a comment regarding the student's performance. Just a heads up all fields are required to be filled if you'd like to submit a comment. Once you fill the input boxes. The author's name and comment will appear in the "Comment Section."

\*Insert image of 1-on-1 Notes with comments filled in

### About the Devs

In the top right of the header we have provided a button when clicked will bring you to the "About the Developers" page. Here, you will get to know more about the creators of this application.

### Stretch Goals

- Implemented the framework Tailwind CSS
- Made the student card listing component, and comment section scrollable. For better user experience.
- Added a footer that allows the user to be redirected to the home and about page.

### Credits

This project was possible by the contributions of our talented team of developers:

- Jaden Glenn: Team Lead
- Alexander Gonzalez: Team Member
- Carlitos Dutan: Team Member
