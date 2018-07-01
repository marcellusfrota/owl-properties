var options = {
	target: '.owl-properties', // Class or ID
	props: {
		canta: {
			context: '<b>Canta</b>', // Text or HTML
			initialState: false,
		},
		dança: {
			context: '<i>Dança</i>',
			initialState: false,
		},
		sapateia: {
			context: 'Sapateia',
			initialState: false,
			attrs: { // Accept any HTML5 attribute
				class: 'teste',
				title: 'Quem canta, os males espanta.'
			}
		},
	}
};

var data = [
	{
		content: '<img src="imgs/CkG59dn.jpg">',
		title: 'Maria da Silva Joana', 
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
		props: {canta: true, dança: true, sapateia: false}
	},
	{
		content: '<img src="imgs/HAGhgga.jpg">',
		title: 'Pedro Carvalho de Neto', 
		description: 'Sed imperdiet ligula non orci mattis imperdiet.', 
		props: {canta: false, dança: true, sapateia: true}
	},
	{
		content: '<img src="imgs/klBpMAs.png">',
		title: 'João Carlos Cunha', 
		description: 'Integer facilisis sem eget dui pretium euismod.', 
		props: {canta: true, dança: false, sapateia: false}
	},				
	{
		content: '<img src="imgs/qdtImX7.jpg">',
		title: 'Aberta Júlia Nepomucena', 
		description: 'Integer porttitor dolor purus, sed aliquet mi semper at.', 
		props: {canta: true, dança: false, sapateia: true}
	},				
	{
		content: '<img src="imgs/rzWgy2c.jpg">',
		title: 'Pedro Guerra Saltiago', 
		description: 'Donec tincidunt iaculis tempor. Phasellus ut cursus est, vitae accumsan urna.', 
		props: {canta: false, dança: false, sapateia: true}
	}
];