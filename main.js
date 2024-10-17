document.addEventListener('DOMContentLoaded', () => {
  defaultPreview()
})

marked.setOptions({
  breaks: true
});

function defaultPreview() {
  const defaultText = `
  # Welcome to my Markdown Previewer!

  ## This is a sub-heading...
  
  ### Here's a link:
  [Visit Google](https://www.google.com)
  
  Here's some inline code: \`<div></div>\`
  
  \`\`\`
  // This is a code block:
  function helloWorld() {
    console.log("Hello, world!");
  }
  \`\`\`
  
  - Item 1
  - Item 2
  - Item 3
  
  > This is a blockquote.
  
  **This is bolded text!**
  
  And here is an image:
  ![Markdown Logo](https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=f7EWJti8x_JFmDxA8CMJvi1ulMlPjTdDP69HBWy9Hb4=)`

  document.getElementById('editor').innerHTML =
    defaultText
  document.getElementById('preview').innerHTML =
    marked.parse(defaultText);
}

function updatePreview() {
  const editorText = document.getElementById("editor").value
  document.getElementById('preview').innerHTML =
    marked.parse(editorText);
}

document.getElementById('editor').addEventListener('input', updatePreview)

function toggleMaximize(element) {
  const editor = document.getElementById('editorCard')
  const previewer = document.getElementById('previewerCard')

  if (element === 'editor') {
    editor.classList.toggle('fullscreen')
    previewer.classList.toggle('hide')
  } else if (element === 'preview') {
    previewer.classList.toggle('fullscreen')
    editor.classList.toggle('hide')
  }
}



