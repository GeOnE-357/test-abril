function main()
	{
		const solapa = document.querySelector('.solapa');
		solapa.onclick=menu;

		const cards = document.querySelectorAll('.oferta');
		for (const carta of cards) 	
			{
				carta.children[0].children[2].onclick=function(){girarCard(carta);};
				carta.children[1].children[2].onclick=function(){girarCard(carta);};
			}

		const enlaces = document.querySelectorAll('ul.navegacion>li');
		for(let i = 0; i < enlaces.length; i++)
			{
				enlaces[i].onclick=function(){cambioSeccion(i)};
			}

		const botonesStaff = document.querySelectorAll('section#staff p.boton.celeste');
		for(const boton of botonesStaff)
			{
				boton.onclick=staff;
			}

		/*Secciones para navegar al hacer click en el menu.*/
		const secciones = document.querySelectorAll('body>section');
		

		/*Articulos para mostrar u ocultar al staff.*/
		const articulosStaff = document.querySelectorAll('section#staff > article.parrafo-2-col');


		function menu()
			{
				const nav = document.querySelector('nav');
				nav.classList.toggle('activo');		
			}

		function girarCard(carta)
			{
				carta.classList.toggle('girar');
				setTimeout(function(){carta.children[0].classList.toggle('oculto')},500);
				setTimeout(function(){carta.children[1].classList.toggle('oculto')},500);
				setTimeout(function(){carta.classList.toggle('girar')}, 600);
			}

		function cambioSeccion(id)
			{
				for(const seccion of secciones)
					{
						seccion.classList.remove('activo');
					}

				secciones[id].classList.add('activo');
				menu();
			}

		function staff()
			{
				articulosStaff[0].classList.toggle('oculto');
				articulosStaff[1].classList.toggle('oculto');
			}
	}




main();