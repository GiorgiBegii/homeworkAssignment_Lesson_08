# homeworkAssignment_Lesson_08 / [Live](https://homework-assignment-lesson-08.vercel.app/)

## Features:

Implement a simple registration form with such a fields: email (required, email validation), username (required, 
minLength: 3), birthdate (required, correct date, no less than 14 years old), password ( minLength: 3, at least one capital 
letter, at least one special symbol - !#$%&), confirm password (required, should be the same as password [form-level 
validation]), hobbies (dynamic part, should have a button for adding another input to the template [optionally] - should 
have the delete buttons as well, disabled when there is just a single input)
Render the value of the form on submit.
[optionally] implement a birthdate input as a custom control with CVA component
[optionally] implement a hobbies part as a custom control with CVA component

**Folder Structure:**

src/app/ 
├─ components/
│  ├─ [registration-component/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_08/tree/main/src/app/registration-component)  
│  │  ├─ registration-component.ts  
│  │  ├─ registration-component.html  
│  │  ├─ registration-component.scss 

