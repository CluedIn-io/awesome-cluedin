# Unicode Workaround in CluedIn Advanced Mapping

## Overview

This script detects blank string fields in incoming data and replaces them with the Unicode zero-width space character (`\u200B`).

This prevents ingestion issues that may occur when sending completely empty strings through CluedIn pipelines.

## Script File

- `unicode-replace-empty.js`

## How it Works

The JavaScript scans all properties in the `input` object.  
If a property's value is a string and is blank (like `""` or `"   "`), it replaces it with `\u200B`.

## Example

**Input:**

```json
{
  "FirstName": "Tim",
  "MiddleName": "",
  "LastName": "Ward"
}
`**Output:**`

```json
{
  "FirstName": "Tim",
  "MiddleName": "\u200B",
  "LastName": "Ward"
}




