# Form Builder

Form Builder lets user to build customizable forms with variety of input elements &nbsp;

Live here: [Form Builder](https://form-builder-eta-lyart.vercel.app/)

## How to setup ?

- Clone the repository
- Install dependencies

  ```bash
  > npm i
  ```

- View it on [localhost](http://localhost:3000)

## Technical Choices

- Used Context + Reducer hook for state management and not Redux
- Dnd-kit for rearranging (drag and drop) question types

## Features

- 6 question type supported:
  - Short Answer
  - Long Answer
  - Number
  - Single Select (Radio)
  - URL
  - Date
- Drag and Drop on desktop/mobile to rearrange questions easily
- Responsive for desktops/mobile devices
- You can also view a table of all your form with "View your forms" button with preview and public url copy button which you can share with anyone
- Preview button shows a preview just like to an end user
- Publish Form button saves the form to the Db
- Github Auth to authenticate and save forms accordingly to the DB
