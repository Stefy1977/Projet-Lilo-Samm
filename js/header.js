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
                <li class="littleRow"><a id="openSubMenu" class="${current === "boutique" ? 'active' : ''}" href="#">Boutique</a>
                    <ul class="sub" id="subBoutique">
                        <li><a href="shop.html">Voir tout</a></li>
                        <li><a href="badges.html">Badges</a></li>
                        <li><a href="bijoux.html">Bijoux</a></li>
                        <li><a href="papeterie.html">Papeterie</a></li>
                        <li><a href="nouveautes.html">Nouveautés</a></li>
                        <li><a href="promo.html">Promo</a></li>
                    </ul>
                </li>
                <li><a class="${current === "apropos" ? 'active' : ''}" href="apropos.html">A propos</a></li>
                <li class="littleRow2"><a id="openSubMenuBlog" class="${current === "blog" ? 'active' : ''}" href="#">Blog</a>
                    <ul class="sub" id="subBlog">
                        <li><a href="blog.html">Actualités</a></li>
                        <li><a href="evenements.html">Evènements</a></li>
                    </ul>
                </li>
                <li><a class="${current === "ateliers" ? 'active' : ''}" href="ateliers.html">Ateliers</a></li>
                <li><a class="${current === "ptvente" ? 'active' : ''}" href="pointsdevente.html">Points de vente</a></li>
                <li><a class="${current === "contact" ? 'active' : ''}" href="contact.html">Contact</a></li>
            </ul>

            <div class="userMenu">
            <a id="fav" href="#" title="mes favoris"> <img src="img/mdi_cards-heart-outline.svg"
                    alt="icône des favoris"> <span class="sr-only">Mes favoris</span> </a>
            <a id="cart" href="#" title="mon panier d'achats"> <img src="img/mdi_shopping-outline.svg"
                    alt="icône du panier d'achat"><span class="sr-only">Mon panier</span></a>
            <a href="connexion.html" title="me connecter au profil"><img src="img/mdi_account-circle-outline.svg"
                    alt="icône du profil pour se connecter"><span class="sr-only">Mon profil</span></a>
            </div>
        </nav>

        <div class="overlay">
                <div class="overlayIn">
                    <a href="" class="closebtn"></a>
                    <span class="titleCart">Panier</span>
                    <div class="overlay-content">
                        <div class="content-product">
                            <figure><img src="img/product/badge-mille-feuille.jpeg" alt="badge Mille-feuille émotionnel"></figure>
                            <div class="product-infos">
                                <div class="cartInfos">
                                    <span class="cat">Badge</span><br>
                                    <span class="titleProduct">"Mille-feuille émotionnel"</span><br>
                                    <span class="price">5,00 €</span>
                                </div>
                                <div class="quantity">
                                    <div>
                                        <button>-</button>
                                        <span class="number">1</span>
                                        <button>+</button>
                                    </div>
                                    <a href="" class="delete"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlay-content">
                        <div class="content-product">
                            <figure><img src="img/product/tiny-bijoux/boucles-multicolor-deparaillees.jpg" alt="boucles d'oreilles multicolores deparaillées"></figure>
                            <div class="product-infos">
                                <div class="cartInfos">
                                    <span class="cat">Boucles d'oreilles</span><br>
                                    <span class="titleProduct">"Pas deux les même!"</span><br>
                                    <span class="price">22,00 €</span>
                                </div>
                                <div class="quantity">
                                    <div>
                                        <button>-</button>
                                        <span class="number">1</span>
                                        <button>+</button>
                                    </div>
                                    <a href="" class="delete"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subTotal">
                        <span>Sous Total</span>
                        <span class="price">27,00 €</span>
                    </div>
                    <div class="shippingFees">
                        <span>Frais de port</span>
                        <span>3,00 €</span>
                    </div>
                    <div class="total">
                        <span>Total</span>
                        <span>30,00 €</span>
                    </div>
                    <div class="btnCart">
                        <a href="tunnelcommande_infos.html" class="cta">Commander</a>
                    </div>
                    <div class="btnCart">
                        <a href="panier.html" class="secondBtn">Afficher le panier</a>
                    </div>
                </div>
            </div>
            
        <div class="overlayFav">
            <div class="overlayIn">
                <a href="" class="closebtn"></a>
                <span class="titleCart">Mes favoris</span>
                <div class="overlay-content">
                    <div class="content-product">
                        <figure><img src="img/product/badge-mille-feuille.jpeg" alt="badge mille-feuille émotionnel"></figure>
                        <div class="product-infos">
                            <div class="cartInfos">
                                <span class="cat">Badge</span><br>
                                <span class="titleProduct">"Mille-feuille émotionnel"</span><br>
                                <span class="price">5,00 €</span>
                            </div>
                            <div class="quantity">
                                <a title="supprimer" href="" class="delete"></a>
                            </div>
                        </div>
                    </div>
                    <div class="ctaCenter">
                        <a href="#" class="cta">ajouter au panier</a>
                    </div>
                </div>

                <div class="overlay-content">
                    <div class="content-product">
                        <figure><img src="img/product/tiny-bijoux/boucles-multicolor-deparaillees.jpg" alt="boucles d'oreilles multicolores déparaillées"></figure>
                        <div class="product-infos">
                            <div class="cartInfos">
                                <span class="cat">Boucles d'oreilles</span><br>
                                <span class="titleProduct">"Pas deux les même!"</span><br>
                                <span class="price">22,00 €</span>
                            </div>
                            <div class="quantity">
                                <a title="supprimer" href="" class="delete"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ctaCenter">
                <a href="#" class="cta">ajouter au panier</a>
                </div>
                <div class="ctaCenter">
                    <a href="connexion.html" class="secondBtn">Aller vers mes favoris</a>
                </div>
            </div>
        </div>

    </header>`
    }
}

customElements.define('main-header', MyHeader);