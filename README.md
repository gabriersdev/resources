# Resources Redirector

This project is a simple web-based redirector application. It is designed to redirect users to various links and resources based on mappings defined in a JSON file.

## Features

- Redirects users to predefined URLs such as portfolios, social media profiles, and documents.
- Provides a clean fallback interface for browsers with JavaScript disabled.

## Project Structure

- `index.html`: The main entry point. It loads the necessary scripts and provides a fallback user interface for environments where JavaScript is disabled.
- `data.json`: The configuration file containing key-value mappings of redirection targets (e.g., GitHub, LinkedIn, resume, etc.).
- `script.js`: The script responsible for handling the redirection logic.
- `style.css`: Styles for the fallback page.

## Configuration

To add, modify, or remove redirection links, edit the `data.json` file. Each key represents an identifier, and the value represents the destination URL or document path.

Example:
```json
{
  "github-profile": "https://github.com/gabriersdev/",
  "resume": "./docs/GABRIEL-RIBEIRO-curriculo.pdf"
}
```
