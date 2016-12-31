document.addEventListener('DOMContentLoaded',function() {
	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

	const recognition = new SpeechRecognition();
	recognition.interimResults = true;

	let p = document.createElement('p');
	const main = document.querySelector('.main');
	main.appendChild(p);

	recognition.addEventListener('result', e => {
		const transcripts = Array.from(e.results)
												.map(result => result[0])
												.map(result => result.transcript)
												.join('');
		p.textContent = transcript;
		if(e.results[0].isFinal) {
			p = document.createElement('p');
			main.appendChild(p);
		}
	});

	recognition.addEventListener('end', recognition.start);
	recognition.start();
});
