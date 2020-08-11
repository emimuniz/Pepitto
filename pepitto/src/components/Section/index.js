import React from 'react';
import Header from '../Header';
import './style.css';

const Section = () => {
    return(
    <>
        <Header/>
        <section className="titulo">
            <div className="cabecalho">
            <h1>We Provide The Best </h1>
            <h1>Cuidamos do seu Pet</h1>
            <div className="sub-titulo">
                <p>Nos somos os melhores seviços para seu pets</p>
            </div>
            <button>Marque a Consulta</button>
            </div>
        </section>
        <section class="planos" id="planos">
		    <div class="container">
                <h2 class="titulo-secao">Planos</h2>
                <div class="plano" data-anime="left">
                    <h3>Plano Básico</h3>
                    <div>R$ 80,00</div>
                        <ul class="itens-plano">
						<li>Atendimento em domicílio<span class="icone-x"></span></li>
						<li>Consulta com clínico geral<span class="icone-check"></span></li>
						<li>Emergência e urgência<span class="icone-x"></span></li>
						<li>Exames laboratoriais<span class="icone-check"></span></li>
						<li>Atendente Exclusivo<span class="icone-x"></span></li>
						<li>Castração<span class="icone-x"></span></li>
                        <li>Cirurgia<span class="icone-x"></span></li>
                        <li>Fisioterapia<span class="icone-x"></span></li>
                        <li>Exames cardiológicos<span class="icone-x"></span></li>
					</ul>
					<button class="btn-padrao">Comprar</button>
				</div>
			    <div class="plano" data-anime="left">
                    <h3>Plano Enterprise</h3>
                    <div>R$ 180,00</div>
                        <ul class="itens-plano">
                            <li>Atendimento em domicílio<span class="icone-x"></span></li>
                            <li>Consulta com clínico geral<span class="icone-check"></span></li>
                            <li>Emergência e urgência<span class="icone-check"></span></li>
                            <li>Exames laboratoriais<span class="icone-check"></span></li>
                            <li>Atendente Exclusivo<span class="icone-x"></span></li>
                            <li>Castração<span class="icone-x"></span></li>
                            <li>Cirurgia<span class="icone-check"></span></li>
                            <li>Fisioterapia<span class="icone-check"></span></li>
                            <li>Exames cardiológicos <span class="icone-x"></span></li>
                            
                        </ul>
                        <button class="btn-padrao">Comprar</button>
				</div>
                <div class="plano" data-anime="left">
                    <h3>Plano Corporation</h3>
                    <div>R$ 250,00</div>
                        <ul class="itens-plano">
                            <li>Atendimento em domicílio<span class="icone-check"></span></li>
                            <li>Consulta com clínico geral<span class="icone-check"></span></li>
                            <li>Emergência e urgência<span class="icone-check"></span></li>
                            <li>Exames laboratoriais<span class="icone-check"></span></li>
                            <li>Atendente Exclusivo<span class="icone-check"></span></li>
                            <li>Castração<span class="icone-check"></span></li>
                            <li>Cirurgia<span class="icone-check"></span></li>
                            <li>Fisioterapia<span class="icone-check"></span></li>
                            <li>Exames cardiológicos<span class="icone-check"></span></li>

                        </ul>
                        <button class="btn-padrao">Comprar</button>
                    </div>
                </div>
	    </section>		
        <footer>
            <div class="container">
                <p>
                    2020 <a href=""> P <span>Hair </span></a> - Todos os direitos reservados.
                </p>
            </div>
	    </footer>

    </>
    )
}

export default Section;