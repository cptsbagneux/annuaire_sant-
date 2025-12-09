ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:RGF93LAMB93.IGN69").setExtent([646473.918329, 6853979.921728, 652878.828289, 6857129.984806]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CommunedeBagneux_1 = new ol.format.GeoJSON();
var features_CommunedeBagneux_1 = format_CommunedeBagneux_1.readFeatures(json_CommunedeBagneux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_CommunedeBagneux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeBagneux_1.addFeatures(features_CommunedeBagneux_1);
var lyr_CommunedeBagneux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeBagneux_1, 
                style: style_CommunedeBagneux_1,
                popuplayertitle: 'Commune de Bagneux',
                interactive: false,
                title: '<img src="styles/legend/CommunedeBagneux_1.png" /> Commune de Bagneux'
            });
var format_Ergothrapeutes_2 = new ol.format.GeoJSON();
var features_Ergothrapeutes_2 = format_Ergothrapeutes_2.readFeatures(json_Ergothrapeutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Ergothrapeutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ergothrapeutes_2.addFeatures(features_Ergothrapeutes_2);
var lyr_Ergothrapeutes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ergothrapeutes_2, 
                style: style_Ergothrapeutes_2,
                popuplayertitle: 'Ergothérapeutes',
                interactive: true,
                title: '<img src="styles/legend/Ergothrapeutes_2.png" /> Ergothérapeutes'
            });
var format_Ditticiens_3 = new ol.format.GeoJSON();
var features_Ditticiens_3 = format_Ditticiens_3.readFeatures(json_Ditticiens_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Ditticiens_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ditticiens_3.addFeatures(features_Ditticiens_3);
var lyr_Ditticiens_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ditticiens_3, 
                style: style_Ditticiens_3,
                popuplayertitle: 'Diététiciens',
                interactive: true,
                title: '<img src="styles/legend/Ditticiens_3.png" /> Diététiciens'
            });
var format_Pdicurespodologues_4 = new ol.format.GeoJSON();
var features_Pdicurespodologues_4 = format_Pdicurespodologues_4.readFeatures(json_Pdicurespodologues_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Pdicurespodologues_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pdicurespodologues_4.addFeatures(features_Pdicurespodologues_4);
var lyr_Pdicurespodologues_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pdicurespodologues_4, 
                style: style_Pdicurespodologues_4,
                popuplayertitle: 'Pédicures-podologues',
                interactive: true,
    title: 'Pédicures-podologues<br />\
    <img src="styles/legend/Pdicurespodologues_4_0.png" /> 1<br />\
    <img src="styles/legend/Pdicurespodologues_4_1.png" /> 2<br />' });
var format_Psychologues_5 = new ol.format.GeoJSON();
var features_Psychologues_5 = format_Psychologues_5.readFeatures(json_Psychologues_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Psychologues_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Psychologues_5.addFeatures(features_Psychologues_5);
var lyr_Psychologues_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Psychologues_5, 
                style: style_Psychologues_5,
                popuplayertitle: 'Psychologues',
                interactive: true,
    title: 'Psychologues<br />\
    <img src="styles/legend/Psychologues_5_0.png" /> 1<br />\
    <img src="styles/legend/Psychologues_5_1.png" /> 2<br />\
    <img src="styles/legend/Psychologues_5_2.png" /> 3<br />' });
var format_Orthophonistes_6 = new ol.format.GeoJSON();
var features_Orthophonistes_6 = format_Orthophonistes_6.readFeatures(json_Orthophonistes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Orthophonistes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orthophonistes_6.addFeatures(features_Orthophonistes_6);
var lyr_Orthophonistes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orthophonistes_6, 
                style: style_Orthophonistes_6,
                popuplayertitle: 'Orthophonistes',
                interactive: true,
    title: 'Orthophonistes<br />\
    <img src="styles/legend/Orthophonistes_6_0.png" /> 1<br />\
    <img src="styles/legend/Orthophonistes_6_1.png" /> 3<br />\
    <img src="styles/legend/Orthophonistes_6_2.png" /> 4<br />' });
var format_Infirmiers_7 = new ol.format.GeoJSON();
var features_Infirmiers_7 = format_Infirmiers_7.readFeatures(json_Infirmiers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Infirmiers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infirmiers_7.addFeatures(features_Infirmiers_7);
var lyr_Infirmiers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infirmiers_7, 
                style: style_Infirmiers_7,
                popuplayertitle: 'Infirmiers',
                interactive: true,
    title: 'Infirmiers<br />\
    <img src="styles/legend/Infirmiers_7_0.png" /> 1<br />\
    <img src="styles/legend/Infirmiers_7_1.png" /> 2<br />\
    <img src="styles/legend/Infirmiers_7_2.png" /> 3<br />\
    <img src="styles/legend/Infirmiers_7_3.png" /> 4<br />\
    <img src="styles/legend/Infirmiers_7_4.png" /> 5<br />\
    <img src="styles/legend/Infirmiers_7_5.png" /> 6<br />\
    <img src="styles/legend/Infirmiers_7_6.png" /> 10<br />' });
var format_Ostopathes_8 = new ol.format.GeoJSON();
var features_Ostopathes_8 = format_Ostopathes_8.readFeatures(json_Ostopathes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Ostopathes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ostopathes_8.addFeatures(features_Ostopathes_8);
var lyr_Ostopathes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ostopathes_8, 
                style: style_Ostopathes_8,
                popuplayertitle: 'Ostéopathes',
                interactive: true,
                title: '<img src="styles/legend/Ostopathes_8.png" /> Ostéopathes'
            });
var format_Masseurskinsithrapeutes_9 = new ol.format.GeoJSON();
var features_Masseurskinsithrapeutes_9 = format_Masseurskinsithrapeutes_9.readFeatures(json_Masseurskinsithrapeutes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Masseurskinsithrapeutes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masseurskinsithrapeutes_9.addFeatures(features_Masseurskinsithrapeutes_9);
var lyr_Masseurskinsithrapeutes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masseurskinsithrapeutes_9, 
                style: style_Masseurskinsithrapeutes_9,
                popuplayertitle: 'Masseurs-kinésithérapeutes',
                interactive: true,
    title: 'Masseurs-kinésithérapeutes<br />\
    <img src="styles/legend/Masseurskinsithrapeutes_9_0.png" /> 1<br />\
    <img src="styles/legend/Masseurskinsithrapeutes_9_1.png" /> 2<br />\
    <img src="styles/legend/Masseurskinsithrapeutes_9_2.png" /> 4<br />' });
var format_Chirurgiensdentistes_10 = new ol.format.GeoJSON();
var features_Chirurgiensdentistes_10 = format_Chirurgiensdentistes_10.readFeatures(json_Chirurgiensdentistes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Chirurgiensdentistes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chirurgiensdentistes_10.addFeatures(features_Chirurgiensdentistes_10);
var lyr_Chirurgiensdentistes_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chirurgiensdentistes_10, 
                style: style_Chirurgiensdentistes_10,
                popuplayertitle: 'Chirurgiens-dentistes',
                interactive: true,
    title: 'Chirurgiens-dentistes<br />\
    <img src="styles/legend/Chirurgiensdentistes_10_0.png" /> 1<br />\
    <img src="styles/legend/Chirurgiensdentistes_10_1.png" /> 3<br />\
    <img src="styles/legend/Chirurgiensdentistes_10_2.png" /> 5<br />\
    <img src="styles/legend/Chirurgiensdentistes_10_3.png" /> 7<br />' });
var format_Traumatologue_11 = new ol.format.GeoJSON();
var features_Traumatologue_11 = format_Traumatologue_11.readFeatures(json_Traumatologue_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Traumatologue_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traumatologue_11.addFeatures(features_Traumatologue_11);
var lyr_Traumatologue_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traumatologue_11, 
                style: style_Traumatologue_11,
                popuplayertitle: 'Traumatologue',
                interactive: true,
                title: '<img src="styles/legend/Traumatologue_11.png" /> Traumatologue'
            });
var format_Echographiste_12 = new ol.format.GeoJSON();
var features_Echographiste_12 = format_Echographiste_12.readFeatures(json_Echographiste_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Echographiste_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Echographiste_12.addFeatures(features_Echographiste_12);
var lyr_Echographiste_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Echographiste_12, 
                style: style_Echographiste_12,
                popuplayertitle: 'Echographiste',
                interactive: true,
                title: '<img src="styles/legend/Echographiste_12.png" /> Echographiste'
            });
var format_Radiologue_13 = new ol.format.GeoJSON();
var features_Radiologue_13 = format_Radiologue_13.readFeatures(json_Radiologue_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Radiologue_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radiologue_13.addFeatures(features_Radiologue_13);
var lyr_Radiologue_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radiologue_13, 
                style: style_Radiologue_13,
                popuplayertitle: 'Radiologue',
                interactive: true,
                title: '<img src="styles/legend/Radiologue_13.png" /> Radiologue'
            });
var format_Ophtalmologues_14 = new ol.format.GeoJSON();
var features_Ophtalmologues_14 = format_Ophtalmologues_14.readFeatures(json_Ophtalmologues_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Ophtalmologues_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ophtalmologues_14.addFeatures(features_Ophtalmologues_14);
var lyr_Ophtalmologues_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ophtalmologues_14, 
                style: style_Ophtalmologues_14,
                popuplayertitle: 'Ophtalmologues',
                interactive: true,
    title: 'Ophtalmologues<br />\
    <img src="styles/legend/Ophtalmologues_14_0.png" /> 1<br />\
    <img src="styles/legend/Ophtalmologues_14_1.png" /> 3<br />' });
var format_Gyncologues_15 = new ol.format.GeoJSON();
var features_Gyncologues_15 = format_Gyncologues_15.readFeatures(json_Gyncologues_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Gyncologues_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gyncologues_15.addFeatures(features_Gyncologues_15);
var lyr_Gyncologues_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gyncologues_15, 
                style: style_Gyncologues_15,
                popuplayertitle: 'Gynécologues',
                interactive: true,
    title: 'Gynécologues<br />\
    <img src="styles/legend/Gyncologues_15_0.png" /> 1<br />\
    <img src="styles/legend/Gyncologues_15_1.png" /> 2<br />' });
var format_Dermatologues_16 = new ol.format.GeoJSON();
var features_Dermatologues_16 = format_Dermatologues_16.readFeatures(json_Dermatologues_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Dermatologues_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermatologues_16.addFeatures(features_Dermatologues_16);
var lyr_Dermatologues_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dermatologues_16, 
                style: style_Dermatologues_16,
                popuplayertitle: 'Dermatologues',
                interactive: true,
                title: '<img src="styles/legend/Dermatologues_16.png" /> Dermatologues'
            });
var format_Cardiologues_17 = new ol.format.GeoJSON();
var features_Cardiologues_17 = format_Cardiologues_17.readFeatures(json_Cardiologues_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Cardiologues_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cardiologues_17.addFeatures(features_Cardiologues_17);
var lyr_Cardiologues_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cardiologues_17, 
                style: style_Cardiologues_17,
                popuplayertitle: 'Cardiologues',
                interactive: true,
                title: '<img src="styles/legend/Cardiologues_17.png" /> Cardiologues'
            });
var format_Mdecinsgnralistes_18 = new ol.format.GeoJSON();
var features_Mdecinsgnralistes_18 = format_Mdecinsgnralistes_18.readFeatures(json_Mdecinsgnralistes_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Mdecinsgnralistes_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdecinsgnralistes_18.addFeatures(features_Mdecinsgnralistes_18);
var lyr_Mdecinsgnralistes_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdecinsgnralistes_18, 
                style: style_Mdecinsgnralistes_18,
                popuplayertitle: 'Médecins généralistes',
                interactive: true,
    title: 'Médecins généralistes<br />\
    <img src="styles/legend/Mdecinsgnralistes_18_0.png" /> 1<br />\
    <img src="styles/legend/Mdecinsgnralistes_18_1.png" /> 2<br />\
    <img src="styles/legend/Mdecinsgnralistes_18_2.png" /> 3<br />\
    <img src="styles/legend/Mdecinsgnralistes_18_3.png" /> 10<br />' });
var format_CentreMunicipaldeSantCMS_19 = new ol.format.GeoJSON();
var features_CentreMunicipaldeSantCMS_19 = format_CentreMunicipaldeSantCMS_19.readFeatures(json_CentreMunicipaldeSantCMS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_CentreMunicipaldeSantCMS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentreMunicipaldeSantCMS_19.addFeatures(features_CentreMunicipaldeSantCMS_19);
var lyr_CentreMunicipaldeSantCMS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentreMunicipaldeSantCMS_19, 
                style: style_CentreMunicipaldeSantCMS_19,
                popuplayertitle: 'Centre Municipal de Santé (CMS)',
                interactive: true,
                title: '<img src="styles/legend/CentreMunicipaldeSantCMS_19.png" /> Centre Municipal de Santé (CMS)'
            });
var format_Pharmacies_20 = new ol.format.GeoJSON();
var features_Pharmacies_20 = format_Pharmacies_20.readFeatures(json_Pharmacies_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Pharmacies_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacies_20.addFeatures(features_Pharmacies_20);
var lyr_Pharmacies_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacies_20, 
                style: style_Pharmacies_20,
                popuplayertitle: 'Pharmacies',
                interactive: true,
                title: '<img src="styles/legend/Pharmacies_20.png" /> Pharmacies'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_CommunedeBagneux_1.setVisible(true);lyr_Ergothrapeutes_2.setVisible(true);lyr_Ditticiens_3.setVisible(true);lyr_Pdicurespodologues_4.setVisible(true);lyr_Psychologues_5.setVisible(true);lyr_Orthophonistes_6.setVisible(true);lyr_Infirmiers_7.setVisible(true);lyr_Ostopathes_8.setVisible(true);lyr_Masseurskinsithrapeutes_9.setVisible(true);lyr_Chirurgiensdentistes_10.setVisible(true);lyr_Traumatologue_11.setVisible(true);lyr_Echographiste_12.setVisible(true);lyr_Radiologue_13.setVisible(true);lyr_Ophtalmologues_14.setVisible(true);lyr_Gyncologues_15.setVisible(true);lyr_Dermatologues_16.setVisible(true);lyr_Cardiologues_17.setVisible(true);lyr_Mdecinsgnralistes_18.setVisible(true);lyr_CentreMunicipaldeSantCMS_19.setVisible(true);lyr_Pharmacies_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CommunedeBagneux_1,lyr_Ergothrapeutes_2,lyr_Ditticiens_3,lyr_Pdicurespodologues_4,lyr_Psychologues_5,lyr_Orthophonistes_6,lyr_Infirmiers_7,lyr_Ostopathes_8,lyr_Masseurskinsithrapeutes_9,lyr_Chirurgiensdentistes_10,lyr_Traumatologue_11,lyr_Echographiste_12,lyr_Radiologue_13,lyr_Ophtalmologues_14,lyr_Gyncologues_15,lyr_Dermatologues_16,lyr_Cardiologues_17,lyr_Mdecinsgnralistes_18,lyr_CentreMunicipaldeSantCMS_19,lyr_Pharmacies_20];
lyr_CommunedeBagneux_1.set('fieldAliases', {'dep': 'dep', 'insee_com': 'insee_com', 'nom_com': 'nom_com', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'typ_iris': 'typ_iris', 'POP65P': 'POP65P', 'part pop65': 'part pop65', });
lyr_Ergothrapeutes_2.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Structure': 'Structure', 'Nombre d\'ergothérapeutes': 'Nombre d\'ergothérapeutes', 'Adresse': 'Adresse', 'Plus d\'informations :': 'Plus d\'informations :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ditticiens_3.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Pdicurespodologues_4.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Structure': 'Structure', 'Nombre de podologues': 'Nombre de podologues', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Psychologues_5.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de psychologues': 'Nombre de psychologues', 'Prise en charge': 'Prise en charge', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Site web': 'Site web', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Orthophonistes_6.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre d\'orthophonistes': 'Nombre d\'orthophonistes', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Infirmiers_7.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Etablissement': 'Etablissement', 'Nombre d\'infirmiers :': 'Nombre d\'infirmiers :', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ostopathes_8.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Masseurskinsithrapeutes_9.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de masseurs-kinésithérapeutes': 'Nombre de masseurs-kinésithérapeutes', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Chirurgiensdentistes_10.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de dentistes': 'Nombre de dentistes', 'Etablissement': 'Etablissement', 'Prise en charge d\'enfants :': 'Prise en charge d\'enfants :', 'Adresse :': 'Adresse :', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Traumatologue_11.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Echographiste_12.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Radiologue_13.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ophtalmologues_14.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre d\'ophtalmologues': 'Nombre d\'ophtalmologues', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Gyncologues_15.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de gynécologues': 'Nombre de gynécologues', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Dermatologues_16.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de dermatologues': 'Nombre de dermatologues', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Cardiologues_17.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Nombre de cardiologues': 'Nombre de cardiologues', 'Secteur': 'Secteur', 'Structure': 'Structure', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Mdecinsgnralistes_18.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Structure': 'Structure', 'Nombre de médecins': 'Nombre de médecins', 'Adresse': 'Adresse', 'Prendre rendez-vous :': 'Prendre rendez-vous :', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CentreMunicipaldeSantCMS_19.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Prénom': 'Prénom', 'Nom': 'Nom', 'Structure': 'Structure', 'Nombre de MG': 'Nombre de MG', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Pharmacies_20.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Nom': 'Nom', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Site Internet': 'Site Internet', });
lyr_CommunedeBagneux_1.set('fieldImages', {'dep': 'TextEdit', 'insee_com': 'TextEdit', 'nom_com': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'typ_iris': 'TextEdit', 'POP65P': 'Range', 'part pop65': 'Range', });
lyr_Ergothrapeutes_2.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Structure': 'TextEdit', 'Nombre d\'ergothérapeutes': 'Range', 'Adresse': 'TextEdit', 'Plus d\'informations :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Ditticiens_3.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Pdicurespodologues_4.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Structure': 'TextEdit', 'Nombre de podologues': 'Range', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Psychologues_5.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de psychologues': 'Range', 'Prise en charge': 'TextEdit', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Site web': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Orthophonistes_6.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre d\'orthophonistes': 'Range', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Infirmiers_7.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Etablissement': 'TextEdit', 'Nombre d\'infirmiers :': 'Range', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Ostopathes_8.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Masseurskinsithrapeutes_9.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de masseurs-kinésithérapeutes': 'Range', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Chirurgiensdentistes_10.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de dentistes': 'Range', 'Etablissement': 'TextEdit', 'Prise en charge d\'enfants :': 'TextEdit', 'Adresse :': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Traumatologue_11.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Secteur': 'CheckBox', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Echographiste_12.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Secteur': 'CheckBox', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Radiologue_13.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Secteur': 'TextEdit', 'Structure': 'CheckBox', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Ophtalmologues_14.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre d\'ophtalmologues': 'Range', 'Secteur': 'Range', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Gyncologues_15.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de gynécologues': 'Range', 'Secteur': 'Range', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Dermatologues_16.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de dermatologues': 'CheckBox', 'Secteur': 'CheckBox', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Cardiologues_17.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Nombre de cardiologues': 'CheckBox', 'Secteur': 'CheckBox', 'Structure': 'TextEdit', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Mdecinsgnralistes_18.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Structure': 'TextEdit', 'Nombre de médecins': 'Range', 'Adresse': 'TextEdit', 'Prendre rendez-vous :': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CentreMunicipaldeSantCMS_19.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'Structure': 'TextEdit', 'Nombre de MG': 'Range', 'Adresse': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Pharmacies_20.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Site Internet': 'TextEdit', });
lyr_CommunedeBagneux_1.set('fieldLabels', {'dep': 'no label', 'insee_com': 'no label', 'nom_com': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'typ_iris': 'no label', 'POP65P': 'no label', 'part pop65': 'no label', });
lyr_Ergothrapeutes_2.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Structure': 'inline label - always visible', 'Nombre d\'ergothérapeutes': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Plus d\'informations :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Ditticiens_3.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Pdicurespodologues_4.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Nombre de podologues': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Psychologues_5.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de psychologues': 'inline label - always visible', 'Prise en charge': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Site web': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Orthophonistes_6.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre d\'orthophonistes': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Infirmiers_7.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Etablissement': 'inline label - always visible', 'Nombre d\'infirmiers :': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Ostopathes_8.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Structure': 'hidden field', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Masseurskinsithrapeutes_9.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de masseurs-kinésithérapeutes': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Chirurgiensdentistes_10.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de dentistes': 'inline label - always visible', 'Etablissement': 'inline label - always visible', 'Prise en charge d\'enfants :': 'inline label - always visible', 'Adresse :': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Traumatologue_11.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Secteur': 'hidden field', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Echographiste_12.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Secteur': 'hidden field', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Radiologue_13.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Secteur': 'hidden field', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Ophtalmologues_14.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre d\'ophtalmologues': 'hidden field', 'Secteur': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Gyncologues_15.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de gynécologues': 'inline label - always visible', 'Secteur': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Dermatologues_16.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de dermatologues': 'inline label - always visible', 'Secteur': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Cardiologues_17.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Nombre de cardiologues': 'inline label - always visible', 'Secteur': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Mdecinsgnralistes_18.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Structure': 'inline label - always visible', 'Nombre de médecins': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Prendre rendez-vous :': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_CentreMunicipaldeSantCMS_19.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Prénom': 'hidden field', 'Nom': 'hidden field', 'Structure': 'inline label - always visible', 'Nombre de MG': 'hidden field', 'Adresse': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Pharmacies_20.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Nom': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Site Internet': 'inline label - always visible', });
lyr_Pharmacies_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});