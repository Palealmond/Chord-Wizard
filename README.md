# Chord-Wizard
GA Project 1

Project Name : *Chord-Wizard
The name of your project with deployed URL.

Project Description:
 Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
 
*This Produces a pseudo-random chord progression, where it will generate a random chord progression, but can accept some parameters to better tailor the chord progression to the Users preference. 

API and Data Sample
Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

*** write a fetch() and pull the db from uberchord

https://api.uberchord.com/#strings-pattern
https://docs.metronome.com/api/


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


Wireframes
Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.
USE EXCALIDRAW

MVP/PostMVP
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

*MVP
These are examples only. Replace with your own MVP features.
-Find Chord Library
-Build Logic for chord progression
-app will produce a valid random chord progression and display for the user
-app will also display how to play each generated chord

*Post-MVP
- add metronome functionality as a tool on the page
- user can add parameters to the generated progression
- user can star/favorite generated progressions


Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.

Day	Deliverable	Status
January 31	Prompt / Wireframes / Priority Matrix / Timeframes	Incomplete
January 31		Project Approval	Incomplete
Feb 1		Core Application Structure (HTML, CSS, etc.)	Incomplete
Feb 1		Pseudocode / actual code	Incomplete
Feb 2		Initial Clickable Model	Incomplete
Feb 3	MVP	Incomplete
Feb 6	Presentations	Incomplete
Priority Matrix
Include a full list of features that have been prioritized based on the Time and Importance Matrix. Link this image in a similar manner to your wireframes

Timeframes
Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

Component	Priority	Estimated Time	Time Invested	Actual Time
Adding Form	H	3hrs	3.5hrs	3.5hrs
Working with API	H	3hrs	2.5hrs	2.5hrs
Total	H	6hrs	5hrs	5hrs
Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
Use this section to document what changes were made and the reasoning behind those changes.

