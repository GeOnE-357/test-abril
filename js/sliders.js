function sliders()
	{
		/*Creacion de listado de sliders.*/
		const sliderUno = {0:'00', 1:'01', 2:'02', 3:'03', 4:'04'};


		/*Invocacion a todos los sliders del HTML.*/
		const sliders = document.querySelectorAll('.slider');

		/*Invocación para la creación logica del slider principal.*/
		const main = crearSlider(sliderUno, sliders[0].children[1], 'main');

		/*Invocación para la creación logica de los bullets principales.*/
		const mainBullets = crearBullets(main.ultimo+1,sliders[0].children[2]);

		/*Creacion de intervalo principal*/
		const mainIntervalo = setInterval(slide,4000,'adelante',main, mainBullets);

		/*Agregada la funcion a los clicks de los botones principales.*/
		sliders[0].children[0].onclick=function(){slide('atras', main, mainBullets)};
		sliders[0].children[3].onclick=function(){slide('adelante', main, mainBullets)}; 

		/*Funcion que crea los sliders en el HTML.*/
		function crearSlider(slides, ubicacion, carpeta)
			{
				let count=0;
				for (const slide in slides)
					{
						const img = document.createElement("picture");
						/*img.src="img/slider/main/"+slides[slide]+"-l.jpg";*/
						img.innerHTML+="<img src='img/slider/main/"+slides[slide]+"-l.jpg'>";
						
						ubicacion.appendChild(img);
						count++;
					}

				return {actual:0, contenedor:ubicacion,ultimo:count-1};
			}

		/*Funcion que crea los bullets en el HTML.*/
		function crearBullets(cantidad, ubicacion)
			{
				const bullets = [];
				for (let i = 0; i < cantidad; i++) 
					{
						const bullet = document.createElement("div");
						bullet.classList.add("bullet");
						if(i==0)
							{
								bullet.classList.add("activo");
							}
						ubicacion.appendChild(bullet);
						bullets.push(bullet);
					}

				return bullets;
			}
		
		/*Funcion que define el movimiento de los sliders.*/
		function slide(direccion, slider, bullets)
					{
						const pixeles = slider.contenedor.children[0].children[0].width;
						if(direccion=='atras')
							{
								if(slider.actual>0)
									{
										slider.actual--;
										slider.contenedor.scrollTo({left: pixeles*slider.actual, behavior: "smooth"});

									}
								else
									{
										slider.actual=slider.ultimo
										slider.contenedor.scrollTo({left: pixeles*slider.ultimo, behavior: "smooth"});		
									}						
										
							}
						else
							{
								
								if(slider.actual<slider.ultimo)
									{
										slider.actual++;
										slider.contenedor.scrollTo({left: pixeles*slider.actual, behavior: "smooth"});			
									}
								else
									{
										slider.actual=0;
										slider.contenedor.scrollTo({left: pixeles*slider.actual, behavior: "smooth"});
							
									}
								
							}
						bulletActivo(bullets, slider.actual);
					}

		/*Funcion que actualiza el estado de los bullets, mostrando el activo.*/
		function bulletActivo(bullets, actual)
			{
				for (const bullet in bullets)
					{
						bullets[bullet].classList.remove('activo');
					}
				bullets[actual].classList.add('activo');
			}
	}

sliders();