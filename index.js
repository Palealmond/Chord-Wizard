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

const selectKeys = () => {
  keys.forEach(el => {
    const option = document.createElement('option');
    option.textContent = el;
    KEY.append(option)
  });
};
selectKeys();

// Major Scales
const A = { i: 'A', ii: 'B_m', iii: 'Db_m', iv: 'D', v: 'E', vi: 'F_m', vii: 'Ab_m' };
const Bb = { i: 'Bb', ii: 'Cm', iii: 'D_m', iv: 'Eb', v: 'F', vi: 'Gb_m', vii: 'A_m' };
const B = { i: 'B', ii: 'Db_m', iii: 'Eb_m', iv: 'E', v: 'Gb', vi: 'Ab_m', vii: 'Bb_m' };
const C = { i: 'C', ii: 'D_m', iii: 'E_m', iv: 'F', v: 'G', vi: 'A_m', vii: 'B_m' };
const Db = { i: 'Db', ii: 'Eb_m', iii: 'F_m', iv: 'Gb', v: 'Ab', vi: 'Bb_m', vii: 'C_m' };
const D = { i: 'D', ii: 'E_m', iii: 'Gb_m', iv: 'G', v: 'A', vi: 'B_m', vii: 'Db_m' };
const Eb = { i: 'Eb', ii: 'F_m', iii: 'G_m', iv: 'Ab', v: 'Bb', vi: 'C_m', vii: 'D_m' };
const E = { i: 'E', ii: 'Gb_m', iii: 'Ab_m', iv: 'A', v: 'B', vi: 'Db_m', vii: 'Eb_m' };
const F = { i: 'F', ii: 'G_m', iii: 'A_m', iv: 'Bb', v: 'C', vi: 'D_m', vii: 'E_m' };
const Gb = { i: 'Gb', ii: 'Ab_m', iii: 'Bb_m', iv: 'B', v: 'Db', vi: 'Eb_m', vii: 'F_m' };
const G = { i: 'G', ii: 'A_m', iii: 'B_m', iv: 'C', v: 'D', vi: 'E_m', vii: 'Gb_m' };
const Ab = { i: 'Ab', ii: 'Bb_m', iii: 'C_m', iv: 'Db', v: 'Eb', vi: 'F_m', vii: 'G_m' };
// Minor Scales
const A_minor = { i: 'A_m', ii: 'B_m', iii: 'C', iv: 'D_m', v: 'E_m', vi: 'F', vii: 'G' };
const Bb_minor = { i: 'Bb_m', ii: 'C_m', iii: 'Db', iv: 'Eb_m', v: 'F_m', vi: 'Gb', vii: 'Ab' };
const B_minor = { i: 'B_m', ii: 'Db_m', iii: 'D', iv: 'E_m', v: 'Gb_m', vi: 'G', vii: 'A' };
const C_minor = { i: 'C_m', ii: 'D_m', iii: 'Eb', iv: 'F_m', v: 'G_m', vi: 'Ab', vii: 'Bb' };
const Db_minor = { i: 'Db_m', ii: 'Eb_m', iii: 'E', iv: 'Gb_m', v: 'Ab_m', vi: 'A', vii: 'B' };
const D_minor = { i: 'D_m', ii: 'E_m', iii: 'F', iv: 'G_m', v: 'A_m', vi: 'Bb', vii: 'C' };
const Eb_minor = { i: 'Eb_m', ii: 'F_m', iii: 'Gb', iv: 'Ab_m', v: 'Bb_m', vi: 'B', vii: 'Db' };
const E_minor = { i: 'E_m', ii: 'Gb_m', iii: 'G', iv: 'A_m', v: 'B_m', vi: 'C', vii: 'D' };
const F_minor = { i: 'F_m', ii: 'G_m', iii: 'Ab', iv: 'Bb_m', v: 'C_m', vi: 'Db', vii: 'Eb' };
const Gb_minor = { i: 'Gb_m', ii: 'Ab_m', iii: 'A', iv: 'B_m', v: 'Db_m', vi: 'D', vii: 'E' };
const G_minor = { i: 'G_m', ii: 'A_m', iii: 'Bb', iv: 'C_m', v: 'D_m', vi: 'Eb', vii: 'F' };
const Ab_minor = { i: 'Ab_m', ii: 'Bb_m', iii: 'B', iv: 'Db_m', v: 'Eb_m', vi: 'E', vii: 'Gb' };
// this expects an object
const getRandom = (chord) => {
  let rand = Math.floor(Math.random() * 6) + 1
  // console.log(chord);
  switch (rand) {
    case 1:
      return chord.ii
    case 2:
      return chord.iii
    case 3:
      return chord.iv
    case 4:
      return chord.v
    case 5:
      return chord.vi
    case 6:
      return chord.vii
  }

}
// getRandom(A_minor)

GENERATE.addEventListener('click', async () => {
  const chord = KEY.value;
  console.log(chord);
  // console.log(chord);
  // console.log('fuck you');
  PROG.innerHTML = ('')
  STRINGS.innerHTML = ('')

  let translated;

  for (let i = 0; i < 4; i++) {
    let chordBox = document.createElement('div')
    let stringBox = document.createElement('div')

    if (i === 0) {
      chordBox.textContent = chord
      translated = await translateKey(chord);
      const obj = await getChord(translated.i)

      stringBox.textContent = obj[0].strings;
    } else {
      console.log(getRandom(translated))
      //  console.log(getRandom(await translateKey(chord)))
      console.log(stringBox);
      console.log(translated);

    }

    PROG.append(chordBox)
    STRINGS.append(stringBox)
  };


});


async function translateKey(chord) {
  switch (chord) {
    case 'A':
      return A

    case 'A#':
      return await getChord(Bb.i)

    case 'B':
      return await getChord(B.i)

    case 'C':
      return await getChord(C.i)

    case 'C#':
      return await getChord(Db.i)

    case 'D':
      return await getChord(D.i)

    case 'D#':
      return await getChord(Eb.i)

    case 'E':
      return await getChord(E.i)

    case 'F':
      return await getChord(F.i)

    case 'F#':
      return await getChord(Gb.i)

    case 'G':
      return await getChord(G.i)

    case 'G#':
      return await getChord(Ab.i)

    case 'A minor':
      return await getChord(A_minor.i)

    case 'A# minor':
      return await getChord(Bb_minor.i)

    case 'B minor':
      return await getChord(B_minor.i)

    case 'C minor':
      return await getChord(C_minor.i)

    case 'C# minor':
      return await getChord(Db_minor.i)

    case 'D minor':
      return await getChord(D_minor.i)

    case 'D# minor':
      return await getChord(Eb_minor.i)

    case 'E minor':
      return await getChord(E_minor.i)

    case 'F minor':
      return await getChord(F_minor.i)

    case 'F# minor':
      return await getChord(Gb_minor.i)

    case 'G minor':
      return await getChord(G_minor.i)

    case 'G# minor':
      return await getChord(Ab_minor.i)


    default:
      alert('You gotta pick a key dummy!')


  }
}