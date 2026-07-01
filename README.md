# Pattern Detection Web App

A lightweight browser-based tool that analyzes a comma-separated array of numbers and detects the pattern within it — built to strengthen array traversal logic and conditional thinking in vanilla JavaScript.

## Overview

The app accepts a comma-separated list of numbers and analyzes the array to determine:

- Whether the array is sorted in ascending or descending order
- Whether the sort is **strict** (no equal consecutive elements) or non-strict
- Whether the array is entirely unsorted
- Any **duplicate elements** present in the array
- The **second largest** number in the array

All analysis is computed without using any built-in sort functions — every check is implemented manually using loops.

## Features

- **Sort detection** — detects ascending, descending, or unsorted order in a single pass.
- **Strictly increasing / strictly decreasing** — distinguishes between `[1, 2, 3]` (strict) and `[1, 2, 2, 3]` (non-strict), since consecutive equal elements break strict ordering.
- **Equal elements edge case** — if ascending and descending both return true, the array is either all-equal or single-element, and is reported accordingly.
- **Duplicate detection** — uses a frequency map to identify which numbers appear more than once, without sorting or extra iterations.
- **Second largest** — finds the second largest value in one pass using two running variables, without sorting the array.
- **Validation & edge case handling**
  - Empty input is caught before processing.
  - Non-numeric entries (`NaN`) are detected and reported as "Invalid input."
  - Values outside a ±1000 range trigger a "Limit Exceeded" message.
  - Arrays with fewer than two elements are handled gracefully for second-largest detection.

## Tech Stack

- **HTML** — page structure and result display
- **CSS** — layout and styling (gradient background, card container, hover effects)
- **JavaScript (Vanilla)** — all array analysis logic and DOM updates (no frameworks or libraries)

## How It Works

1. The user enters a comma-separated list of numbers (e.g. `3,5,5,9,12`) and clicks **Submit**.
2. The input is split on commas, trimmed, filtered for blanks, and mapped to numbers.
3. Each value is validated — `NaN` or out-of-range values stop processing immediately.
4. The array is then passed through five independent analysis functions:
   - `isSortedAes()` — checks ascending order
   - `isSortedDes()` — checks descending order
   - `strictlyIn()` — checks strictly increasing
   - `strictlyDe()` — checks strictly decreasing
   - `numFrq()` — builds a frequency map and filters for duplicates
   - `secondLarge()` — tracks largest and second-largest in one pass
5. The results are composed into a single descriptive message and displayed on the page.

## Project Structure

```
Pattern Detection/
├── index.html    # Page structure and result display
├── style.css     # Styling and layout
└── first.js      # Array analysis logic and DOM updates
```

## How to Run

1. Clone or download the project folder.
2. Open `index.html` directly in a browser, or serve it with a local server (e.g. VS Code Live Server).
3. Enter a comma-separated list of numbers and click **Submit** to see the pattern analysis.

## Examples

| Input | Output |
|---|---|
| `1,2,3,4,5` | Array is sorted in Ascending order, its strictly increasing |
| `1,2,2,3` | Array is sorted in Ascending order |
| `5,4,3,2,1` | Array is sorted in Descending order, its strictly decreasing |
| `3,3,3` | All elements are equal |
| `7` | Contain only one element |
| `3,1,4,1,5` | Array is Unsorted, duplicated element: 1, second large Number is 4 |
| `abc,1,2` | Invalid input |

## Learning Highlights

This project was built to practice **pattern recognition in arrays** — thinking beyond simple min/max and into structural properties of sequences. Key concepts reinforced include:

- Writing sort-detection logic manually rather than using `Array.prototype.sort()`, which deepens understanding of comparison-based traversal.
- Distinguishing **strict vs non-strict** ordering as a meaningful distinction (equal consecutive elements break strict monotonicity).
- Using a **frequency map (object as hash)** to count occurrences in O(n) time instead of nested loops.
- Finding the **second largest in one pass** using two running variables — a classic interview pattern that avoids sorting entirely.
- Composing a single output message from multiple independent boolean results cleanly.

## Possible Future Improvements

- Detect additional patterns: constant arrays, alternating sequences, or arithmetic progressions.
- Add visual highlighting of duplicate elements in the input.
- Support floating-point numbers for all checks, including strict ordering.
- Display the frequency map as a table rather than inline in the result text.