console.log('Under Construction!');

const KEY = document.getElementById('Key')
const PROG = document.getElementById('prog')
const STRINGS = document.getElementById('strings')
const GENERATE = document.getElementById('generator')
const keys = ['', 'A', 'A minor', 'A#', 'A# minor', 'B', 'B minor', 'C', 'C minor', 'C#', 'C# minor', 'D', 'D minor', 'D#', 'D# minor', 'E', 'E minor', 'F', 'F minor', 'F#', 'F# minor', 'G', 'G minor', 'G#', 'G# minor'];

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

// getChord('Db_m')



const selectKeys = () => {
  keys.forEach(el => {
    const option = document.createElement('option');
    option.textContent = el;
    KEY.append(option)
  });
};
selectKeys();

// Major Scales
const A = { I: 'A', ii: 'B_m', iii: 'Db_m', IV: 'D', V: 'E', vi: 'F_m', vii: 'Ab_m' };
const Bb = { I: 'Bb', ii: 'Cm', iii: 'D_m', IV: 'Eb', V: 'F', vi: 'Gb_m', vii: 'A_m' };
const B = { I: 'B', ii: 'Db_m', iii: 'Eb_m', IV: 'E', V: 'Gb', vi: 'Ab_m', vii: 'Bb_m' };
const C = { I: 'C', ii: 'D_m', iii: 'E_m', IV: 'F', V: 'G', vi: 'A_m', vii: 'B_m' };
const Db = { I: 'Db', ii: 'Eb_m', iii: 'F_m', IV: 'Gb', V: 'Ab', vi: 'Bb_m', vii: 'C_m' };
const D = { I: 'D', ii: 'E_m', iii: 'Gb_m', IV: 'G', V: 'A', vi: 'B_m', vii: 'Db_m' };
const Eb = { I: 'Eb', ii: 'F_m', iii: 'G_m', IV: 'Ab', V: 'Bb', vi: 'C_m', vii: 'D_m' };
const E = { I: 'E', ii: 'Gb_m', iii: 'Ab_m', IV: 'A', V: 'B', vi: 'Db_m', vii: 'Eb_m' };
const F = { I: 'F', ii: 'G_m', iii: 'A_m', IV: 'Bb', V: 'C', vi: 'D_m', vii: 'E_m' };
const Gb = { I: 'Gb', ii: 'Ab_m', iii: 'Bb_m', IV: 'B', V: 'Db', vi: 'Eb_m', vii: 'F_m' };
const G = { I: 'G', ii: 'A_m', iii: 'B_m', IV: 'C', V: 'D', vi: 'E_m', vii: 'Gb_m' };
const Ab = { I: 'Ab', ii: 'Bb_m', iii: 'C_m', IV: 'Db', V: 'Eb', vi: 'F_m', vii: 'G_m' };
// Minor Scales
const A_minor = { i: 'A_m', ii: 'B_m', IIIb: 'C', iv: 'D_m', v: 'E_m', VIb: 'F', VIIb: 'G' };
const Bb_minor = { i: 'Bb_m', ii: 'C_m', IIIb: 'Db', iv: 'Eb_m', v: 'F_m', VIb: 'Gb', VIIb: 'Ab' };
const B_minor = { i: 'B_m', ii: 'Db_m', IIIb: 'D', iv: 'E_m', v: 'Gb_m', VIb: 'G', VIIb: 'A' };
const C_minor = { i: 'C_m', ii: 'D_m', IIIb: 'Eb', iv: 'F_m', v: 'G_m', VIb: 'Ab', VIIb: 'Bb' };
const Db_minor = { i: 'Db_m', ii: 'Eb_m', IIIb: 'E', iv: 'Gb_m', v: 'Ab_m', VIb: 'A', VIIb: 'B' };
const D_minor = { i: 'D_m', ii: 'E_m', IIIb: 'F', iv: 'G_m', v: 'A_m', VIb: 'Bb', VIIb: 'C' };
const Eb_minor = { i: 'Eb_m', ii: 'F_m', IIIb: 'Gb', iv: 'Ab_m', v: 'Bb_m', VIb: 'B', VIIb: 'Db' };
const E_minor = { i: 'E_m', ii: 'Gb_m', IIIb: 'G', iv: 'A_m', v: 'B_m', VIb: 'C', VIIb: 'D' };
const F_minor = { i: 'F_m', ii: 'G_m', IIIb: 'Ab', iv: 'Bb_m', v: 'C_m', VIb: 'Db', VIIb: 'Eb' };
const Gb_minor = { i: 'Gb_m', ii: 'Ab_m', IIIb: 'A', iv: 'B_m', v: 'Db_m', VIb: 'D', VIIb: 'E' };
const G_minor = { i: 'G_m', ii: 'A_m', IIIb: 'Bb', iv: 'C_m', v: 'D_m', VIb: 'Eb', VIIb: 'F' };
const Ab_minor = { i: 'Ab_m', ii: 'Bb_m', IIIb: 'B', iv: 'Db_m', v: 'Eb_m', VIb: 'E', VIIb: 'Gb' };

// const getRandom = (chord) => {

//     Math.floor(Math.random(chord) * 6) + 1

// }
GENERATE.addEventListener('click', async () => {
  const chord = KEY.value;
  console.log(chord);
  // console.log(chord);
  // console.log('fuck you');
  PROG.innerHTML = ('')
  STRINGS.innerHTML = ('')

  for (let i = 0; i < 4; i++) {
    let chordBox = document.createElement('div')
    let stringBox = document.createElement('div')

    if (i === 0) {
      chordBox.textContent = chord
      stringBox.textContent = (await translateKey(chord))[0].strings;
    }

    PROG.append(chordBox)
    STRINGS.append(stringBox)
  };


});


async function translateKey(chord) {
  switch (chord) {
    case 'A':
      return getChord(A.I)

    case 'A#':
      return getChord(Bb.I)

    case 'B':
      return getChord(B.I)

    case 'C':
      return getChord(C.I)

    case 'C#':
      return getChord(Db.I)

    case 'D':
      return getChord(D.I)

    case 'D#':
      return getChord(Eb.I)

    case 'E':
      return getChord(E.I)

    case 'F':
      return getChord(F.I)

    case 'F#':
      return getChord(Gb.I)

    case 'G':
      return getChord(G.I)

    case 'G#':
      return getChord(Ab.I)

    case 'A minor':
      return getChord(A_minor.i)

    case 'A# minor':
      return getChord(Bb_minor.i)

    case 'B minor':
      return getChord(B_minor.i)

    case 'C minor':
      return getChord(C_minor.i)

    case 'C# minor':
      return getChord(Db_minor.i)

    case 'D minor':
      return getChord(D_minor.i)

    case 'D# minor':
      return getChord(Eb_minor.i)

    case 'E minor':
      return getChord(E_minor.i)

    case 'F minor':
      return getChord(F_minor.i)

    case 'F# minor':
      return getChord(Gb_minor.i)

    case 'G minor':
      return getChord(G_minor.i)

    case 'G# minor':
      return getChord(Ab_minor.i)


    default:
      alert('You gotta pick a key dummy!')


  }
}