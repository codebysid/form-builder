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
- Preview/Publish Form button redirects to review where you can fill out the form like an end user, since public url for forms are under construciton right now

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
- Preview and Fill the form
- Github Auth to authenticate (public form is under construciton)
