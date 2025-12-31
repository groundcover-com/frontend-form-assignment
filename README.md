# Frontend Form Assignment

## Overview

This is a coding assignment designed to evaluate frontend development skills. You'll be working with a React + TypeScript application that contains static markup for a multi-step form. Your task is to transform this static markup into a fully functional, interactive form with proper state management, validation, and step navigation.

## The Task

The application currently displays a multi-step form with three steps:
1. **Profile** - Username and About fields
2. **Personal Information** - First name, Last name, and Email address
3. **Address** - Country, Street address, City, State/Province, and ZIP/Postal code

The form markup is complete, but it's currently static. You need to implement the following functionality:

### 1. Form State Management

Implement state management for all form fields across the three steps:
- **Step 1 (Profile)**: `username`, `about`
- **Step 2 (Personal Information)**: `first-name`, `last-name`, `email`
- **Step 3 (Address)**: `country`, `street-address`, `city`, `region`, `postal-code`

You can use any approach you prefer:
- Vanilla React state (`useState`, `useReducer`)
- Form libraries (React Hook Form, Formik, etc.)
- Any other state management solution

### 2. Step Navigation

Implement navigation between form steps:
- Add a **"Previous"** button on steps 2 and 3
- Add a **"Next"** button on steps 1 and 2
- Change the button on step 3 to **"Submit"**
- Only allow progression to the next step if the current step's fields are valid
- Preserve form data when navigating between steps

### 3. Form Validation

Add validation rules for each field:
- **Username**: Required, minimum 3 characters
- **Email**: Required, must be a valid email format
- **All other fields**: Required (as appropriate for each field)

Validation requirements:
- Display validation errors inline with the fields
- Prevent step progression if the current step has validation errors
- Show validation errors on blur or when attempting to proceed to the next step
- Use appropriate error messaging that helps users understand what needs to be fixed

> **Hint**: Check `src/components/fieldset.tsx` for an `ErrorMessage` component that can be used to display validation errors. The form input components also support a `data-invalid` prop for error state styling.

### 4. Progress Indicator

Update the progress indicator dynamically:
- Mark steps as **"complete"** when the user has successfully progressed past them
- Mark the current step as **"current"**
- Mark future steps as **"upcoming"**
- The progress indicator should reflect the actual state of form completion

### 5. Form Submission

Handle the final form submission:
- On step 3, clicking "Submit" should validate all fields
- If validation passes, `console.log` the complete form data object containing all fields from all three steps
- Prevent submission if there are any validation errors
- Ensure all three steps' data is included in the logged output

## Technical Requirements

- Work within the existing component structure in `src/app.tsx` (you may refactor as needed)
- All necessary UI components are already available in `/src/components`
- Maintain the existing visual design and styling
- Use TypeScript with proper type definitions
- Follow React best practices and patterns
- Write clean, maintainable, and well-structured code

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to the local development URL (typically `http://localhost:5173`)

4. Begin implementing the functionality in `src/app.tsx`

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm lint` - Run the linter (Biome)
- `pnpm preview` - Preview the production build

Good luck!
