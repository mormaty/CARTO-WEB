ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([277757.423332, 1603765.060085, 287741.976820, 1609614.706096]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Liimiecommunale_1 = new ol.format.GeoJSON();
var features_Liimiecommunale_1 = format_Liimiecommunale_1.readFeatures(json_Liimiecommunale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Liimiecommunale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liimiecommunale_1.addFeatures(features_Liimiecommunale_1);
var lyr_Liimiecommunale_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liimiecommunale_1, 
                style: style_Liimiecommunale_1,
                popuplayertitle: 'Liimie  communale',
                interactive: true,
                title: '<img src="styles/legend/Liimiecommunale_1.png" /> Liimie  communale'
            });
var format_PARCELLAIRES_2 = new ol.format.GeoJSON();
var features_PARCELLAIRES_2 = format_PARCELLAIRES_2.readFeatures(json_PARCELLAIRES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PARCELLAIRES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLAIRES_2.addFeatures(features_PARCELLAIRES_2);
var lyr_PARCELLAIRES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLAIRES_2, 
                style: style_PARCELLAIRES_2,
                popuplayertitle: 'PARCELLAIRES',
                interactive: true,
                title: '<img src="styles/legend/PARCELLAIRES_2.png" /> PARCELLAIRES'
            });
var format_Eoute_3 = new ol.format.GeoJSON();
var features_Eoute_3 = format_Eoute_3.readFeatures(json_Eoute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Eoute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eoute_3.addFeatures(features_Eoute_3);
var lyr_Eoute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eoute_3, 
                style: style_Eoute_3,
                popuplayertitle: 'Eoute',
                interactive: true,
                title: '<img src="styles/legend/Eoute_3.png" /> Eoute'
            });
var format_Localit_4 = new ol.format.GeoJSON();
var features_Localit_4 = format_Localit_4.readFeatures(json_Localit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Localit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_4.addFeatures(features_Localit_4);
var lyr_Localit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_4, 
                style: style_Localit_4,
                popuplayertitle: 'Localité',
                interactive: true,
                title: '<img src="styles/legend/Localit_4.png" /> Localité'
            });
var format_Iinfrastructore_5 = new ol.format.GeoJSON();
var features_Iinfrastructore_5 = format_Iinfrastructore_5.readFeatures(json_Iinfrastructore_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Iinfrastructore_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iinfrastructore_5.addFeatures(features_Iinfrastructore_5);
var lyr_Iinfrastructore_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Iinfrastructore_5, 
                style: style_Iinfrastructore_5,
                popuplayertitle: 'Iinfrastructore',
                interactive: true,
                title: '<img src="styles/legend/Iinfrastructore_5.png" /> Iinfrastructore'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Liimiecommunale_1.setVisible(true);lyr_PARCELLAIRES_2.setVisible(true);lyr_Eoute_3.setVisible(true);lyr_Localit_4.setVisible(true);lyr_Iinfrastructore_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Liimiecommunale_1,lyr_PARCELLAIRES_2,lyr_Eoute_3,lyr_Localit_4,lyr_Iinfrastructore_5];
lyr_Liimiecommunale_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'surface': 'surface', 'nom': 'nom', });
lyr_PARCELLAIRES_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid_parcel': 'fid_parcel', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'fid_parc_1': 'fid_parc_1', 'shape_le_1': 'shape_le_1', 'shape_ar_1': 'shape_ar_1', 'numéro': 'numéro', 'superficie': 'superficie', 'statut': 'statut', 'occupation': 'occupation', });
lyr_Eoute_3.set('fieldAliases', {'qc_id': 'qc_id', 'gm_layer': 'gm_layer', 'gm_type': 'gm_type', 'elevation': 'elevation', 'version': 'version', 'natural': 'natural', 'source': 'source', 'id': 'id', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'tracktype': 'tracktype', 'bridge': 'bridge', 'int_ref': 'int_ref', 'lanes': 'lanes', 'layer': 'layer', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'ford': 'ford', 'waterway': 'waterway', 'cables': 'cables', 'power': 'power', 'place': 'place', 'bicycle': 'bicycle', 'foot': 'foot', 'horse': 'horse', 'motor_vehi': 'motor_vehi', 'smoothness': 'smoothness', 'access': 'access', 'aeroway': 'aeroway', 'ele': 'ele', 'length': 'length', 'embankment': 'embankment', 'constructi': 'constructi', 'barrier': 'barrier', 'nom': 'nom', });
lyr_Localit_4.set('fieldAliases', {'qc_id': 'qc_id', 'identifi': 'identifi', 'type': 'type', 'soustyp': 'soustyp', 'x': 'x', 'y': 'y', 'x1': 'x1', 'y1': 'y1', 'longueur': 'longueur', 'surface': 'surface', 'angle': 'angle', 'distance': 'distance', 'nom': 'nom', 'ecole': 'ecole', 'poste': 'poste', 'douane': 'douane', 'gendarme': 'gendarme', 'hopital': 'hopital', 'autrein': 'autrein', 'lieude': 'lieude', 'lieude1': 'lieude1', 'chateau': 'chateau', 'autrepo': 'autrepo', 'antenne': 'antenne', });
lyr_Iinfrastructore_5.set('fieldAliases', {'qc_id': 'qc_id', 'layer': 'layer', 'gm_type': 'gm_type', 'version': 'version', 'source': 'source', 'id': 'id', 'name': 'name', 'phone': 'phone', 'tourism': 'tourism', 'shop': 'shop', 'barrier': 'barrier', 'highway': 'highway', 'power': 'power', 'tower_type': 'tower_type', 'alt_name': 'alt_name', 'place': 'place', 'amenity': 'amenity', 'cuisine': 'cuisine', 'operator': 'operator', 'dispensing': 'dispensing', 'addr_city': 'addr_city', 'addr_house': 'addr_house', 'website': 'website', 'sport': 'sport', 'natural': 'natural', 'type': 'type', 'opening_ho': 'opening_ho', 'entrance': 'entrance', 'name_en': 'name_en', 'name_fr': 'name_fr', 'office': 'office', });
lyr_Liimiecommunale_1.set('fieldImages', {'qc_id': '', 'id': '', 'surface': '', 'nom': '', });
lyr_PARCELLAIRES_2.set('fieldImages', {'qc_id': '', 'fid_parcel': '', 'objectid': '', 'shape_leng': '', 'shape_area': '', 'fid_parc_1': '', 'shape_le_1': '', 'shape_ar_1': '', 'numéro': '', 'superficie': '', 'statut': '', 'occupation': '', });
lyr_Eoute_3.set('fieldImages', {'qc_id': '', 'gm_layer': '', 'gm_type': '', 'elevation': '', 'version': 'TextEdit', 'natural': 'TextEdit', 'source': 'TextEdit', 'id': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'tracktype': 'TextEdit', 'bridge': 'TextEdit', 'int_ref': 'TextEdit', 'lanes': 'TextEdit', 'layer': 'TextEdit', 'maxspeed': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'ford': 'TextEdit', 'waterway': 'TextEdit', 'cables': 'TextEdit', 'power': 'TextEdit', 'place': 'TextEdit', 'bicycle': 'TextEdit', 'foot': 'TextEdit', 'horse': 'TextEdit', 'motor_vehi': 'TextEdit', 'smoothness': 'TextEdit', 'access': 'TextEdit', 'aeroway': 'TextEdit', 'ele': 'TextEdit', 'length': 'TextEdit', 'embankment': 'TextEdit', 'constructi': 'TextEdit', 'barrier': 'TextEdit', 'nom': '', });
lyr_Localit_4.set('fieldImages', {'qc_id': '', 'identifi': '', 'type': '', 'soustyp': '', 'x': '', 'y': '', 'x1': '', 'y1': '', 'longueur': '', 'surface': '', 'angle': '', 'distance': '', 'nom': '', 'ecole': '', 'poste': '', 'douane': '', 'gendarme': '', 'hopital': '', 'autrein': '', 'lieude': '', 'lieude1': '', 'chateau': '', 'autrepo': '', 'antenne': '', });
lyr_Iinfrastructore_5.set('fieldImages', {'qc_id': '', 'layer': '', 'gm_type': '', 'version': '', 'source': '', 'id': '', 'name': '', 'phone': '', 'tourism': '', 'shop': '', 'barrier': '', 'highway': '', 'power': '', 'tower_type': '', 'alt_name': '', 'place': '', 'amenity': '', 'cuisine': '', 'operator': '', 'dispensing': '', 'addr_city': '', 'addr_house': '', 'website': '', 'sport': '', 'natural': '', 'type': '', 'opening_ho': '', 'entrance': '', 'name_en': '', 'name_fr': '', 'office': '', });
lyr_Liimiecommunale_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'surface': 'no label', 'nom': 'inline label - always visible', });
lyr_PARCELLAIRES_2.set('fieldLabels', {'qc_id': 'no label', 'fid_parcel': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'fid_parc_1': 'no label', 'shape_le_1': 'no label', 'shape_ar_1': 'no label', 'numéro': 'no label', 'superficie': 'no label', 'statut': 'no label', 'occupation': 'inline label - always visible', });
lyr_Eoute_3.set('fieldLabels', {'qc_id': 'no label', 'gm_layer': 'no label', 'gm_type': 'no label', 'elevation': 'no label', 'version': 'no label', 'natural': 'no label', 'source': 'no label', 'id': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'tracktype': 'no label', 'bridge': 'no label', 'int_ref': 'no label', 'lanes': 'no label', 'layer': 'no label', 'maxspeed': 'no label', 'oneway': 'no label', 'ref': 'no label', 'ford': 'no label', 'waterway': 'no label', 'cables': 'no label', 'power': 'no label', 'place': 'no label', 'bicycle': 'no label', 'foot': 'no label', 'horse': 'no label', 'motor_vehi': 'no label', 'smoothness': 'no label', 'access': 'no label', 'aeroway': 'no label', 'ele': 'no label', 'length': 'no label', 'embankment': 'no label', 'constructi': 'no label', 'barrier': 'no label', 'nom': 'no label', });
lyr_Localit_4.set('fieldLabels', {'qc_id': 'no label', 'identifi': 'no label', 'type': 'no label', 'soustyp': 'no label', 'x': 'no label', 'y': 'no label', 'x1': 'no label', 'y1': 'no label', 'longueur': 'no label', 'surface': 'no label', 'angle': 'no label', 'distance': 'no label', 'nom': 'inline label - always visible', 'ecole': 'no label', 'poste': 'no label', 'douane': 'no label', 'gendarme': 'no label', 'hopital': 'no label', 'autrein': 'no label', 'lieude': 'no label', 'lieude1': 'no label', 'chateau': 'no label', 'autrepo': 'no label', 'antenne': 'no label', });
lyr_Iinfrastructore_5.set('fieldLabels', {'qc_id': 'no label', 'layer': 'no label', 'gm_type': 'no label', 'version': 'no label', 'source': 'no label', 'id': 'no label', 'name': 'no label', 'phone': 'no label', 'tourism': 'no label', 'shop': 'no label', 'barrier': 'no label', 'highway': 'no label', 'power': 'no label', 'tower_type': 'no label', 'alt_name': 'no label', 'place': 'no label', 'amenity': 'no label', 'cuisine': 'no label', 'operator': 'no label', 'dispensing': 'no label', 'addr_city': 'no label', 'addr_house': 'no label', 'website': 'no label', 'sport': 'no label', 'natural': 'no label', 'type': 'no label', 'opening_ho': 'no label', 'entrance': 'no label', 'name_en': 'no label', 'name_fr': 'no label', 'office': 'no label', });
lyr_Iinfrastructore_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});