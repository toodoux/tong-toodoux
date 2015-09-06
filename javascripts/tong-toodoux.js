$(function() {
    var config = {
        title : "Tong Toodoux",
        subtitle : "Tong Toodoux",
        catchphrase : "La Tong d'Hiver",
        button : {
            text : "Choisir Ma Tong",
            section : "attention"
        }
    },sections = [
        {
            id : "gallery",
            name : "Gallerie",
            subtitle : "les photos des Tongs Toodoux",
            data : {
            }
        },
        {
            id : "choose",
            name : "Choisir",
            subtitle : "ma Tong Personalisée",
            data : {
            }
        },
        {
            id : "about",
            name : "Les Liens",
            subtitle : "vers notre réseau",
            data : {
            }
        },
        {
            id : "team",
            name : "Le Créateur",
            subtitle : "de la Tong Toodoux",
            data : {
            }
        }
    ],
     navtemplate = _.template($('#nav-template').html()),
     maintemplate = _.template($('#main-template').html());
     footertemplate = _.template($('#footer-template').html());

    $('nav').html(navtemplate({config:config, sections:sections}));
    $('#main').html(maintemplate({config:config, sections:sections}));
    $('footer').html(footertemplate({config:config, sections:sections}));

    $.each(sections, function(i, e) {
        var sectionstemplate = _.template($('#' + e.id + '-template').html());
        $('#' + e.id + ' .container').html(sectionstemplate({config:config, data:e}));
    });

});
