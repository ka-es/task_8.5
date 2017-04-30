var a = prompt('Podaj długość podstawy trójkąta:'),
	h = prompt('Podaj wysokość trójkąta:'),
	triangleArea = a*h/2;

if (isNaN(triangleArea)) {
	console.log('Nieprawidlowa wartosc');
	alert('Nieprawidlowa wartosc');
} else {
	console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
	alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
}
