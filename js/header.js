class MyHeader extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        this.innerHTML = `<header>
        <nav>
            <div id="burger">
                <button type="button">Menu</button>
            </div>
            <a href="index.html" title="les ateliers de lilo"><img class="logo" src="img/ladl-logo-dark.svg" alt="logo"></a>
            <ul class="menuDesktop">
                <li><a class="${current === "accueil" ? 'active' : ''}" href="index.html">Accueil</a></li>
                <li><a class="${current === "boutique" ? 'active' : ''}" href="shop.html">Boutique</a>
                    <ul class="sub">
                        <li><a href="shop.html">Voir tout</a></li>
                        <li><a href="bijoux.html">Bijoux</a></li>
                        <li><a href="badges.html">Badges</a></li>
                        <li><a href="papeterie.html">Papeterie</a></li>
                        <li><a href="nouveautes.html">Nouveautés</a></li>
                        <li><a href="promo.html">Promo</a></li>
                    </ul>
                </li>
                <li><a class="${current === "apropos" ? 'active' : ''}" href="apropos.html">A propos</a></li>
                <li><a class="${current === "blog" ? 'active' : ''}" href="blog.html">Blog</a>
                    <ul class="sub">
                        <li><a href="blog.html">Actualités</a></li>
                        <li><a href="evenements.html">Evènements</a></li>
                    </ul>
                </li>
                <li><a class="${current === "ateliers" ? 'active' : ''}" href="ateliers.html">Ateliers</a></li>
                <li><a class="${current === "ptvente" ? 'active' : ''}" href="pointsdevente.html">Points de vente</a></li>
                <li><a class="${current === "contact" ? 'active' : ''}" href="contact.html">Contact</a></li>
            </ul>

            <div class="userMenu">
                <a href="#" title="mes favoris"> <img src="img/mdi_cards-heart-outline.svg"
                        alt="icône de la wishlist donc des favoris"></a>
                <a href="shoppingcart.html" title="mon panier d'achats"> <img src="img/mdi_shopping-outline.svg"
                        alt="icône du panier d'achat"></a>
                <a href="#" title="me connecter au profil"><img src="img/mdi_account-circle-outline.svg"
                        alt="icône du profil pour se connecter"></a>
            </div>
        </nav>

    </header>`
    }
}

customElements.define('main-header', MyHeader);