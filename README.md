# Expo ImagePicker URI Undefined or Null

This repository demonstrates a bug in the Expo ImagePicker library where the selected image's URI is undefined or null after successful image selection.  The issue prevents the selected image from being displayed or processed.

## Bug Description
The `uri` property of the selected image object is consistently undefined or null, making it impossible to work with the selected image.  This occurs despite the image selection process completing successfully, with no apparent errors. The bug is demonstrated in `bug.js`.

## Solution
The solution provided in `bugSolution.js` addresses this issue by adding error handling and additional checks to ensure the URI is valid before attempting to access it. This involves verifying the existence of the `uri` property and potentially handling asynchronous operations related to image selection more robustly.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run the app using `expo start`. 

This repository provides clear examples of the bug and its solution.