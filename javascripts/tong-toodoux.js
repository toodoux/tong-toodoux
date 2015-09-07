$(function() {
    // Configuration, textes et traductions
    var config = { // Configuration principale
        title : "Tong Toodoux", // Titre (apparait en haut à gauche)
        subtitle : "Tong Toodoux", // Sous-titre (apparait en petit sur l'accueil)
        catchphrase : "La Tong d'Hiver", // Slogan (apparait en gros sur l'accueil, sous "sous-titre")
        author : "Alves Maxime", // Développeur du site
        company : "Cuir etc...", // Entreprise
        facebook : "https://www.facebook.com/tongtoodoux", // Lien vers la page facebook
        twitter : "https://twitter.com/tongtoodoux", // Lien vers la page twitter
        github : "https://github.com/mrPain89/tong-toodoux/tree/gh-pages", // Lien vers la page github (hebergeur)
        button : { //Configuration du bouton
            text : { // Texte contenu dans le bouton
                fr : "Choisir Ma Tong",
                en : "Choose My Flip-Flop",
                ger : "Choisir Ma Tong"
            },
            section : "choose" // ID de la section vers laquelle il envoie
        },
        videos : [ // IDs des videos uploadées sur gyfcat (une aléatoire apparaît sur la page d'accueil)
            "UntriedCorruptElver",
            "IllegalMasculineBuffalo",
            "DirectPracticalAlleycat",
            "BrightDirectIchneumonfly"
        ]
    },meta = { // Meta-données (pour les moteurs de recherche)
        title : "La Tong D'Hiver Toodoux, par Pascal Nicolazo", // Titre du site (apparait dans la barre de titre du navigateur ainsi que sur les moteur de recherche en gros)
        description : "Site de la Tong Toodoux, Tong habillée en cuir de vache naturelle, fabriquée en France", // Description qui apparait sur les moteurs de recherche en petit
        tags : "Tongs, Tong, Toodoux, Tong-Toodoux, Chaussures, Hiver, Nicolazo, Pascal Nicolazo, Artisanat, Courchevel", // Mots-clefs pour facilier le travail du moteur de recherche
        author : "Alves Maxime" // Développeur du site
    }, sections = [ //Configuration des différentes sections du site
        {
            id : "gallery", // ID (unique, sert à référencer la section)
            name : { // Nom tel qu'il apparaît en gros titre
                fr : "Galerie",
                en : "Gallery",
                ger : "Gallerie"
            },
            subtitle : { // Sous-titre
                fr : "les photos des Tongs Toodoux",
                en : "pictures of the Toodoux flip-flops",
                ger : "bilder aus dem Toodoux flip-flops"
            }, 
            items : [ // Images de la gallerie
                {
                    title : "Pour enfant", // Titre de l'image (apparait dans la vue plein écran)
                    description : { // Description, pour reconnaitre l'image (facultatif)
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },
                    category : "Enfant, 2015", // Categories (facultatif, peut-être utilisé dans le futur)
                    date : "Septembre 2015", // Date d'ajout (facultatif, peut-être utilisé dans le futur)
                    link : "https://i.imgur.com/6b75Hbd.jpg" // Lien vers l'image ( imgur.com pour envoyer l'image et prendre le lien direct ( direct link) )
                }, {
                    title : "Blanches et pierre",
                    description : {
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },

                    link : "http://i.imgur.com/uVo4jAE.jpg"
                }, {
                    title : "El Téide",
                    description : {
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },

                    link : "http://i.imgur.com/sbvWmBx.jpg"
                }, {
                    title : "Automne",
                    description : {
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },

                    link : "http://i.imgur.com/fh7sTpD.jpg"
                }, {
                    title : "Automne",
                    description : {
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },

                    link : "http://i.imgur.com/9i5Gh3f.jpg"
                }, {
                    title : "Automne",
                    description : {
                        fr : "Bleue, charolaise",
                        en : "Bleue, charolaise",
                        ger : "Bleue, charolaise"
                    },

                    link : "http://i.imgur.com/LKClmuB.jpg"
                }

            ]
        },
        {
            id : "choose",
            name : {
                fr : "Choisir",
                en : "Choose",
                ger : "Choisir"
            },
            subtitle : {
                fr : "ma Tong Personalisée",
                en : "my own Flip-Flops",
                ger : "ma Tong Personalisée"
            },
            items : [ // Configuration des boutons
                {
                    title : { // Titre du bouton
                        fr : "Taille",
                        en : "Size",
                        ger : "Taille2"
                    },
                    description : { // Description du bouton, apparaît en dessous
                        fr : "ma pointure",
                        en : "of my feet",
                        ger : "vum die fuss"
                    },
                    icon : "http://i.imgur.com/bLGlfUu.png" // Image à utiliser pour le bouton
                }, {
                    title : {
                         fr : "Couleur",
                         en : "Color",
                         ger : "Farbe"
                    },
                    description : {
                        fr : "gers brides",
                        en : "gers brides",
                        ger : "des brides"
                    },
                    icon : "http://i.imgur.com/8zhn6Q1.png"
                }, {
                    title : {
                        fr : "Peau",
                        en : "Peau",
                        ger : "Peau"
                    },
                    description : {
                        fr : "pour habiller",
                        en : "pour habiller",
                        ger : "pour habiller"
                    },
                    icon : "http://i.imgur.com/l15mGeX.png"
                }
            ]
        },
        {
            id : "about",
            name : {
                fr : "Les Liens",
                en : "The Links",
                ger : "Die Linke"
            },
            subtitle : {
                fr : "vers notre réseau",
                en : "vers notre réseau",
                ger : "vers notre réseau"
            },
            items : [ // Liste de liens supplémentaires
            /*
                {
                    name : { // Titre du lien
                        fr : "",
                        en : "",
                        de : ""
                    },
                    subtitle : { // sous-titre
                        fr : "",
                        en : "",
                        de : ""
                    },
                    description : { // Description
                        fr : "",
                        en : "",
                        de : ""
                    },
                    img : "" // Lien vers l'image apparaissant dans le rond
                }
            */
            ]
        },
        {
            id : "team", // Section pour les membres de l'entreprise, étant donné que tu est seul pour le moment je n'ai pas mis la possibilité de rajouter des personnes, mais ce serait faisable
            name : { // Titre
                fr : "Le Créateur",
                en : "The Creator",
                ger : "Le Créateur"
            },
            subtitle : { // sous-titre
                fr : "de la Tong Toodoux",
                en : "of the Toodoux flip-flop",
                ger : "de la Tong Toodoux"
            },
            text: {
                fr : "",
                en : "",
                de : ""
            },
            item : { // Description d'un membre
                name : "Pascal Nicolazo", // Nom et Prénom
                address : "16 rue des dominicains Guebwiller", // Adresse postale
                number : "06010010101", // Numéro de téléphone
                email : "toodoux@laposte.net", // Adresse e-mail
                facebook : "https://www.facebook.com/pascal.nicolazo", // Lien vers facebook (personnel)
                twitter : "", // Lien vers twitter (personnel)
                linkedin : "", // Lien vers linkedin (pro)
                role : { // Role du membre
                    fr : "",
                    en : "",
                    de : ""
                },
                description : { // Description du poste
                    fr : "",
                    en : "",
                    de : ""
                },
                img : "http://i.imgur.com/2ha7Gwv.jpg" // Photo du membre
            }
        }
    ],
     footer = { // Pied de page
        company : "&copy;2015 - Cuir Etc...", // Nom de l'entreprise
        link : "https://www.facebook.com/pages/Animation-Cuir-Etc_" // Lien vers le facebook de l'entreprise
     },
     // Fin de la configuration des textes
     
     // Récuperation des codes html pour les template et initialization avec underscore.js
     // Si il y a un bug de template, c'est la qu'il faudrait le désactiver
     headtemplate = _.template($('#head-template').html()),
     navtemplate = _.template($('#nav-template').html()),
     maintemplate = _.template($('#main-template').html()),
     footertemplate = _.template($('#footer-template').html()),
     
    // Recupération du cookie de language, s'il existe, sinon récupère la valeur de "lang" dans l'url, sinon prend le default, 'fr'
     lang = $.cookie('lang') ? $.cookie('lang') : 'fr',
     
    // Fonction qui charge une vidéo aléatoire dans la liste de la variable config.videos
     gfyShow = function() {
        $(".videos .gfyitem").attr("data-id",config.videos[Math.floor(Math.random() * config.videos.length)]);
    };    

    // Insertion des templates avec les variables dont ils ont besoin
    // <head>
    $('head').append(headtemplate({meta:meta}));
    // <nav>
    $('nav').html(navtemplate({config:config, sections:sections}));
    // <div id="main">
    $('#main').html(maintemplate({config:config, sections:sections}));
    // <footer>
    $('footer').html(footertemplate({config:config, footer:footer}));

    // Appel du chargement de la vidéo accueil
    gfyShow();
    
    // Insertion des templates de section, il recupére le template dans le <script id="sectionid-template"> et l'insère dans le containeur <section id="sectionid">
    $.each(sections, function(i, e) {
        // i = le numero de la section, e = la section traitée
        var sectionstemplate = _.template($('#' + e.id + '-template').html());
        $('#' + e.id + ' .container').html(sectionstemplate({config:config, data:e}));
    });

    // Fonction permettant le changement de langue, est éxecutée lorsque la valeur du select de la bar de navigation est changée
    $('#language').change(function() {
        if ($(this).val() == lang)
            return;

        lang = $(this).val();
        $.cookie('lang', lang);
        window.location = '?lang=' + lang;    
    });

    // Utilisation du script de lightbox (https://github.com/ashleydw/lightbox)
    $('.portfolio-link').click(function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
});
