import backgroundTwo from '../../../assets/images/background/background2.jpeg';
import darthVader from '../../../assets/images/elements/vader.png';
import footer from '../footer';

let TextContent = `
Enquanto Vader supervisiona a estação espacial Estrela da Morte, que permitirá ao Império esmagar a Aliança Rebelde (formada para combater a tirania de Palpatine) liderada pela Princesa Leia Organa que está com o projeto/plano da Estrela da Morte roubados pelos Rebeldes. Mas Vader captura Leia, que esconde o plano e uma mensagem no dróide R2-D2, que em seguida juntamente com o colega C-3PO escapa para o planeta Tatooine, onde são adquiridos por Luke Skywalker e seu tio e tia. Enquanto Luke limpa R2-D2, aciona acidentalmente a mensagem implantada por Leia, implorando o socorro de Obi-Wan Kenobi. Assim, Luke ajuda os dróides a encontrarem o Cavaleiro Jedi que, fingindo de ermitão, sob a alcunha de Ben Kenobi, diz ao Luke conhecer seu pai. Contou que Anakin era um excelente Jedi e que foi traído e assassinado por Vader.
<br/><br/>
Após os tios de Luke serem mortos pelo Império, este junta-se a Obi-Wan e contratam o contrabandista Han Solo e seu co-piloto Wookiee Chewbacca para levá-los a Alderaan. O planeta natal de Leia, que é posteriormente destruído pela Estrela da Morte. Após invadirem a estação espacial, Obi-Wan sacrifica-se e deixa que Vader o mate durante um duelo de sabres de luz; permitindo assim que o grupo escape com Leia e os planos que ajudarão os rebeldes a destruir a Estrela da Morte. Mas Obi-Wan atinge a imortalidade, semelhante ao seu mestre Qui-Gon, e continua se comunicando com Luke na forma de um espectro luminoso. Orientado por Obi-Wan e com ajuda de Han, Luke consegue usar a Força para destruir a Estrela da Morte, em seguida, ele e Han são condecorados por Leia.    
`

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
    <div class="container block-section">
        <div class="block-section--two">
            <img src="${darthVader}" alt="Vader">
            <div "text-block--two">
                <p>
                    ${TextContent}
                </p>
            </div>
        </div>
        <div class="block-section">
            ${footer}
        </div>
    </div>
</section>
`

export default HomeSectionTwo