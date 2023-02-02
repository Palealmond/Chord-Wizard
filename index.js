console.log('Under Construction!');

const KEY = document.getElementById('Key')
const PROG = document.getElementById('prog')
const FINGER = document.getElementById('finger')
const GENERATE = document.getElementById('generator')
const keys = ['', 'A', 'A minor', 'A#', 'A# minor', 'B', 'B minor', 'C', 'C minor', 'C#', 'C# minor', 'D', 'D minor', 'D#', 'D# minor', 'E', 'E minor', 'F', 'F minor', 'F#', 'F# minor', 'G', 'G minor', 'G#', 'G#minor'];




// async function getChord(chord) {
//   const url = `https://api.uberchord.com/v1/chords/${chord}`

//   try {
//     const res = await fetch(url)
//     const json = await res.json()
//     console.log(json);
//     return json;

//   } catch (error) {
//     console.log('');
//   }
// }

// GetChord('D')

const selectKeys = () => {
  keys.forEach(el => {
    const option = document.createElement('option');
    option.textContent = el;
    KEY.append(option)
  });

};
selectKeys();