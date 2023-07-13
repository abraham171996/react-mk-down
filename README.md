# react-mk-down
The Git repository contains a React application that allows users to enter and preview Markdown text. It includes features for editing and previewing Markdown content in real-time.
he Main component is the main feature of the application. It utilizes React Hooks to manage the state of the input field (`value`), the array of entered Markdown text (`markArr`), and the visibility of the edit and preview lists (`showEditList` and `showPreviewList`).

The component's functionality includes the following:

1. Input and Add Button: Users can enter Markdown text in a textarea input field. When they press the "Click" button or press Enter, the entered text is added to the `markArr` array, and the input field is cleared. This triggers the rendering of the edit list and hides the preview list.

2. Edit and Preview Buttons: Users can toggle between the edit and preview modes by clicking the "Edit" and "Preview" buttons, respectively. Clicking the "Edit" button displays the edit list, while clicking the "Preview" button shows the preview list.

3. Preview List: When in preview mode, the entered Markdown text is rendered as HTML using the `ReactMarkdown` component. The `remark-gfm` plugin is used to support GitHub Flavored Markdown (GFM) syntax. The rendered Markdown text is displayed in a list format.

4. Edit List: When in edit mode, the entered Markdown text is displayed as plain text. It is rendered in a list format.

The application provides a simple and convenient way for users to enter and preview Markdown content. It can be used as a Markdown editor or as a reference for implementing Markdown functionality in React projects.

The Git repository contains the necessary code files, including the Main component and a CSS file (`main.css`) for styling the application. Developers can explore the code and styles to understand how to handle input, manage state, and render Markdown content in a React application.
