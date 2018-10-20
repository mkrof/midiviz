const el: HTMLElement = document.createElement('div');
el.innerHTML = `MIDI ${navigator.requestMIDIAccess ? '' : 'not '}available`;
document.body.appendChild(el);

