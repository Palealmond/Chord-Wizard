# Chord-Wizard
GA Project 1

## Project Name : Chord-Wizard

https://github.com/Palealmond/Chord-Wizard/

Project Description:
 
*Chord-Wizard Produces a pseudo-random chord progression, where it will generate a random chord progression, and print how to make that chord
## API and Data Sample

*** write a fetch() and pull the db from uberchord

https://api.uberchord.com/#strings-pattern




```js
async function getChord(chord) {
const url = `https://api.uberchord.com/v1/chords/${chord}`

  try {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json);
    return json;
  
  } catch (error) {
    console.log('');
  }
}

GetChord('D')
```

## Wireframes
Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.
USE EXCALIDRAW

![image](https://user-images.githubusercontent.com/122394668/215829281-98f79ccf-654d-4f32-a09d-9d7f9e59c5f3.png)


MVP/PostMVP:

## MVP

- Find Chord Library

- Build Logic for chord progression

- app will produce a valid random chord progression and display for the user

- app will also display how to play each generated chord

## Post-MVP

- add metronome functionality as a tool on the page

- user can add parameters to the generated progression

- user can star/favorite generated progressions


## Project Schedule:


Day	Deliverable	Status

January 31:	Prompt / Wireframes / Priority Matrix / Timeframes	Incomplete

January 31:		Project Approval	Incomplete

Feb 1:		Core Application Structure (HTML, CSS, etc.)	Incomplete

Feb 1:		Pseudocode / actual code	Incomplete

Feb 2:		Initial Clickable Model	Incomplete

Feb 3:	MVP	Incomplete

Feb 6:	Presentations	Incomplete

## Priority Matrix
Include a full list of features that have been prioritized based on the Time and Importance Matrix. Link this image in a similar manner to your wireframes

1) Random Chord Progression Generator

2) a linked event that displays the fingers of the chords, pulled from the Generator

<img width="1054" alt="image" src="https://user-images.githubusercontent.com/122394668/215854908-d7964c5b-ae9d-4f30-8fdd-cc5ed94bad43.png">


## Timeframes
Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Component|	Priority|	Estimated Time|	Time Invested|	Actual Time|

Building HTML/Styling	H	3hrs

Building Logic/ AP Manipulation	H	6hrs

Finalizing/debug	4hrs

Total	H	13hrs	

## Change Log
Use this section to document what changes were made and the reasoning behind those changes.

