// Récupération des éléments HTML nécessaires
const produits = document.querySelectorAll('.produit');
const nbArticles = document.querySelector('#nb-articles');
const prixTotal = document.querySelector('#prix-total');

// Fonction pour mettre à jour le nombre d'articles et le prix total
function mettreAJourPanier() {
  let nbArticlesTotal = 0;
  let prixTotalCalcul = 0;
  produits.forEach(function(produit) {
    const quantite = parseInt(produit.querySelector('input').value);
    const prix = parseFloat(produit.querySelector('.prix').textContent);
    nbArticlesTotal += quantite;
    prixTotalCalcul += quantite * prix;
  });
