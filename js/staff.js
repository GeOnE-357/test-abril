function staff()
	{	
		const staff = [{nombre:'Javier Alvarez',sector:'Dirección',cargo:'Director',foto:'01',info:{interno:'Int. 102'}},
		{nombre:'Gustavo Tielens',sector:'Dirección',cargo:'Director',foto:'01',info:{interno:'Int. 102'}},
		{nombre:'Gabriela Ameri',sector:'Coordinación',cargo:'Coordinadora General',foto:'01',info:{interno:'Int. 102'}},
		{nombre:'Claudina Guillermet',sector:'Coordinación',cargo:'Coordinadora General',foto:'01',info:{interno:'Int. 102'}},
		{nombre:'Miriam Perez',sector:'Coordinación',cargo:'Coordinadora Naturales',foto:'01',info:{interno:'Ciclo orientado'}},
		{nombre:'Claudia Montoya',sector:'Coordinación',cargo:'Coordinadora PDL',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Victor Nacuse',sector:'Coordinación',cargo:'Coordinador Matemática',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Guillermo Pazos',sector:'Coordinación',cargo:'Coordinador Ingles',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Cecilia Montecinos',sector:'Coordinación',cargo:'Coordinadora Language',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Paula Chavol',sector:'Coordinación',cargo:'Coordinadora Artística',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Gisela Rizzelo',sector:'Coordinación',cargo:'Coordinadora Tecnología',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Claudia Clas',sector:'Coordinación',cargo:'Coordinadora Economía',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Hernan Bellini',sector:'Coordinación',cargo:'Coordinador Naturales',foto:'01',info:{interno:'Ciclo básico'}},
		{nombre:'Esteban Rodriguez',sector:'Coordinación',cargo:'Coordinador Sociales',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Florencia Cameli',sector:'Coordinación',cargo:'Coordinadora Ed. Física',foto:'01',info:{interno:'Ambos ciclos'}},
		{nombre:'Macarena Zambrano',sector:'Tutoría',cargo:'Tutora',foto:'01',info:{turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Hernan Bellini',sector:'Tutoría',cargo:'Tutor',foto:'01',info:{turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Valeria Pichardo',sector:'Tutoría',cargo:'Tutora',foto:'01',info:{turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Antonela Heredia',sector:'Tutoría',cargo:'Tutora',foto:'01',info:{turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Marina Gugliotela',sector:'Preceptoría',cargo:'Jefa de Precetores',foto:'00',info:{turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Judith Abalo',sector:'Preceptoría',cargo:'Preceptora',foto:'01',info:{curso:'1°',turno:'Mañana',interno:'Int. 102'}},
		{nombre:'Federico Spahr',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'1°',turno:'Tarde',interno:'Int. 102'}},
		{nombre:'Rocio Gonzales',sector:'Preceptoría',cargo:'Preceptora',foto:'01',info:{curso:'2°',turno:'Mañana',interno:'Int. 102'}},
		{nombre:'Emilia Rey',sector:'Preceptoría',cargo:'Preceptora',foto:'01',info:{curso:'2°',turno:'Tarde',interno:'Int. 102'}},
		{nombre:'Natalia Brozicevich',sector:'Preceptoría',cargo:'Preceptora',foto:'01',info:{curso:'3°',turno:'Mañana',interno:'Int. 102'}},
		{nombre:'Leila Centurion',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'3°',turno:'Tarde',interno:'Int. 102'}},
		{nombre:'Fernando Bentancor',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'4°',turno:'Mañana',interno:'Int. 102'}},
		{nombre:'Santiago Olivo',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'4°',turno:'Tarde',interno:'Int. 102'}},
		{nombre:'Carolina Scarpetti',sector:'Preceptoría',cargo:'Preceptor',foto:'00',info:{curso:'5°',turno:'Ambos',interno:'Int. 102'}},
		{nombre:'Facundo Romero',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'6°',turno:'Mañana',interno:'Int. 102'}},
		{nombre:'Alejandra Ruiz',sector:'Preceptoría',cargo:'Preceptor',foto:'01',info:{curso:'6°',turno:'Tarde',interno:'Int. 102'}}];

		const botonesStaffBlancos = document.querySelectorAll('section#staff p.boton.blanco');
		const staffSlider = document.querySelector('article.staff-slider');
		let slider;
		/*Agregada la funcion a los clicks de los botones principales.*/
		staffSlider.children[0].onclick=function(){slide('atras', slider)};
		staffSlider.children[2].onclick=function(){slide('adelante', slider)}; 


		for(const boton of botonesStaffBlancos)
			{
				boton.onclick=function(){infoStaff(boton)};
			}

		infoStaff(botonesStaffBlancos[0]);

		function infoStaff(boton)
			{
				activarBoton(boton);
				const filtrado = filtrarStaff(boton.innerHTML);
				staffSlider.children[1].innerHTML='';
				slider = crearSlider(filtrado, staffSlider.children[1]);
			}

		function filtrarStaff(sector)
			{
				const filtrado = [];
				for (const persona of staff)
					{
						if(persona.sector === sector)
							{
								filtrado.push(persona);
							}
					}
				return filtrado;
			}

		function activarBoton(boton)
			{
				for(let elemento of botonesStaffBlancos)
					{
						elemento.classList.remove('activo')
					}
				boton.classList.add('activo');
			}

		/*Funcion que crea los sliders en el HTML.*/
		function crearSlider(filtrado, ubicacion)
			{
				let count=0;
				for (const persona of filtrado)
					{
						let slide = document.createElement("div");
						slide.classList.add('staff-slide')
						slide.classList.add('animate__animated')
						slide.classList.add('animate__fadeIn')
						const img = document.createElement("img");
						img.setAttribute("src","./img/slider/staff/"+persona.foto+"-s.jpg");
						slide.appendChild(img);
						const info = document.createElement("div");
						info.classList.add('staff-info');
						info.classList.add('verde');
						slide.appendChild(info);
						const nombre =document.createElement("p");
						nombre.classList.add('color-amarillo');
						nombre.innerHTML='<b>'+persona.nombre+'</b>';
						info.appendChild(nombre);
						const cargo =document.createElement("p");
						cargo.classList.add('color-amarillo');
						cargo.innerHTML=persona.cargo;
						if(persona.info.curso)
							{
								cargo.innerHTML+=' de <b>'+persona.info.curso+'</b>';
							}
						info.appendChild(cargo);
						const turnoInterno =document.createElement("p");
						turnoInterno.classList.add('color-amarillo');
						if(persona.info.turno)
							{
								turnoInterno.innerHTML+=' Turno: '+persona.info.turno+' - ';
							}
						turnoInterno.innerHTML+='<b>'+persona.info.interno+'</b>';
						info.appendChild(turnoInterno);
						ubicacion.appendChild(slide);
						count++;
					}

				return {actual:0, contenedor:ubicacion,ultimo:count-1};
			}

		/*Funcion que define el movimiento de los sliders.*/
		function slide(direccion, slider)
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
					}
	}

staff();