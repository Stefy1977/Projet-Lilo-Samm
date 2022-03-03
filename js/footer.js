class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <container class="footer">
            <div class="footerBox">
                <img src="img/ladl-logo-white.svg" alt="logo les ateliers de Lilo">
                <p>Rue Arthur Duquesne, 53<br>7032 Spiennes<br>Belgique<br>TVA : BE0880.678.456</p>
            </div>
            <div class="footerBox">
                <ul class="links">
                    <li><a href="pointsdevente.html">Points de vente</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="cgdv.html">CGDV</a></li>
                    <li><a href="rgpd.html">RGPD</a></li>
                </ul>
            </div>
            <div class="footerBox">
                <p>Retrouvez-moi sur :</p>
                <ul class="reseaux">
                    <li><a class="facebook" href="https://fr-fr.facebook.com/lesateliersdelilo/" target="_blank">Facebook</a></li>
                    <li><a class="instagram" href="https://www.instagram.com/lesateliersdelilo/" target="_blank">Instagram</a></li>
                </ul>
            </div>
        </container>
    </footer>`
    }
}

customElements.define('main-footer', MyFooter);