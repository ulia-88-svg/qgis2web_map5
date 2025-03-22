var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'здания — building',
                interactive: false,
                title: '<img src="styles/legend/building_3.png" /> здания — building'
            });
var format_network_4 = new ol.format.GeoJSON();
var features_network_4 = format_network_4.readFeatures(json_network_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_network_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_network_4.addFeatures(features_network_4);
var lyr_network_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_network_4, 
                style: style_network_4,
                popuplayertitle: 'network',
                interactive: false,
                title: '<img src="styles/legend/network_4.png" /> network'
            });
var format_network_5 = new ol.format.GeoJSON();
var features_network_5 = format_network_5.readFeatures(json_network_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_network_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_network_5.addFeatures(features_network_5);
var lyr_network_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_network_5, 
                style: style_network_5,
                popuplayertitle: 'network',
                interactive: true,
                title: '<img src="styles/legend/network_5.png" /> network'
            });
var format_network_6 = new ol.format.GeoJSON();
var features_network_6 = format_network_6.readFeatures(json_network_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_network_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_network_6.addFeatures(features_network_6);
var lyr_network_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_network_6, 
                style: style_network_6,
                popuplayertitle: 'дороги — network',
                interactive: false,
                title: '<img src="styles/legend/network_6.png" /> дороги — network'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_building_2.setVisible(true);lyr_building_3.setVisible(true);lyr_network_4.setVisible(true);lyr_network_5.setVisible(true);lyr_network_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_building_2,lyr_building_3,lyr_network_4,lyr_network_5,lyr_network_6];
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'barrier': 'barrier', 'aeroway': 'aeroway', 'start_date': 'start_date', 'building:levels:underground': 'building:levels:underground', 'building:flats': 'building:flats', 'opening_hours': 'opening_hours', 'religion': 'religion', 'ref:sobory.ru': 'ref:sobory.ru', 'name:ru': 'name:ru', 'denomination': 'denomination', 'lawyer': 'lawyer', 'utilization': 'utilization', 'amenity': 'amenity', 'brand': 'brand', 'postal_code': 'postal_code', 'phone': 'phone', 'email': 'email', 'source:addr': 'source:addr', 'office': 'office', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'addr:city': 'addr:city', 'type': 'type', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'barrier': 'barrier', 'aeroway': 'aeroway', 'start_date': 'start_date', 'building:levels:underground': 'building:levels:underground', 'building:flats': 'building:flats', 'opening_hours': 'opening_hours', 'religion': 'religion', 'ref:sobory.ru': 'ref:sobory.ru', 'name:ru': 'name:ru', 'denomination': 'denomination', 'lawyer': 'lawyer', 'utilization': 'utilization', 'amenity': 'amenity', 'brand': 'brand', 'postal_code': 'postal_code', 'phone': 'phone', 'email': 'email', 'source:addr': 'source:addr', 'office': 'office', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'addr:city': 'addr:city', 'type': 'type', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_network_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'network': 'network', 'level': 'level', 'maxspeed:designed': 'maxspeed:designed', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes': 'turn:lanes', 'start_date': 'start_date', 'construction': 'construction', 'name:be': 'name:be', 'seamark:type': 'seamark:type', 'seamark:bridge:clearance_width': 'seamark:bridge:clearance_width', 'seamark:bridge:clearance_height': 'seamark:bridge:clearance_height', 'seamark:bridge:category': 'seamark:bridge:category', 'track_ref': 'track_ref', 'turn:lanes:backward': 'turn:lanes:backward', 'lanes:backward': 'lanes:backward', 'local_ref': 'local_ref', 'voltage_1': 'voltage_1', 'source:maxspeed': 'source:maxspeed', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'alt_name': 'alt_name', 'width': 'width', 'int_name': 'int_name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'bridge:name': 'bridge:name', 'material': 'material', 'maxspeed:advisory': 'maxspeed:advisory', 'access': 'access', 'covered': 'covered', 'railway:integra_signum:ALSO': 'railway:integra_signum:ALSO', 'bridge:structure': 'bridge:structure', 'name:uk': 'name:uk', 'boundary': 'boundary', 'admin_level': 'admin_level', 'cutting': 'cutting', 'destination:ref': 'destination:ref', 'maxheight': 'maxheight', 'service': 'service', 'railway:integra_signum:ALSN': 'railway:integra_signum:ALSN', 'railway:atp3b': 'railway:atp3b', 'lanes:forward': 'lanes:forward', 'postal_code': 'postal_code', 'junction': 'junction', 'addr:postcode': 'addr:postcode', 'destination': 'destination', 'maxspeed:practical': 'maxspeed:practical', 'name:etymology:wikidata': 'name:etymology:wikidata', 'height': 'height', 'foot': 'foot', 'name:en': 'name:en', 'source:name': 'source:name', 'old_ref': 'old_ref', 'name:ru': 'name:ru', 'description': 'description', 'official_name': 'official_name', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', 'highway': 'highway', 'tracks': 'tracks', 'length': 'length', 'tunnel': 'tunnel', 'source:position': 'source:position', 'railway:alsn-en': 'railway:alsn-en', 'incline': 'incline', 'embankment': 'embankment', 'railway:bidirectional': 'railway:bidirectional', 'old_name': 'old_name', 'bridge': 'bridge', 'railway:traffic_mode': 'railway:traffic_mode', 'railway:rail': 'railway:rail', 'railway:radio': 'railway:radio', 'railway:integra_signum:ALS': 'railway:integra_signum:ALS', 'railway:ballastless': 'railway:ballastless', 'metre_load': 'metre_load', 'maxspeed:freight': 'maxspeed:freight', 'loading_gauge': 'loading_gauge', 'lit': 'lit', 'axle_load': 'axle_load', 'oneway': 'oneway', 'name': 'name', 'layer': 'layer', 'railway:preferred_direction': 'railway:preferred_direction', 'maxspeed': 'maxspeed', 'highspeed': 'highspeed', 'train:forward': 'train:forward', 'railway:track_ref': 'railway:track_ref', 'voltage': 'voltage', 'usage': 'usage', 'railway': 'railway', 'passenger_lines': 'passenger_lines', 'operator': 'operator', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', 'designated_direction': 'designated_direction', 'branch': 'branch', });
lyr_network_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'network': 'network', 'alt_ref': 'alt_ref', 'alt_name': 'alt_name', 'network:be': 'network:be', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'check_date': 'check_date', 'to': 'to', 'service': 'service', 'public_transport:version': 'public_transport:version', 'operator': 'operator', 'network:wikipedia': 'network:wikipedia', 'network:wikidata': 'network:wikidata', 'network:ru': 'network:ru', 'network:en': 'network:en', 'from': 'from', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'route': 'route', 'ref': 'ref', 'name': 'name', 'distance': 'distance', });
lyr_network_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'network': 'network', 'alt_ref': 'alt_ref', 'alt_name': 'alt_name', 'network:be': 'network:be', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'check_date': 'check_date', 'to': 'to', 'service': 'service', 'public_transport:version': 'public_transport:version', 'operator': 'operator', 'network:wikipedia': 'network:wikipedia', 'network:wikidata': 'network:wikidata', 'network:ru': 'network:ru', 'network:en': 'network:en', 'from': 'from', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'route': 'route', 'ref': 'ref', 'name': 'name', 'distance': 'distance', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'layer': '', 'barrier': '', 'aeroway': '', 'start_date': '', 'building:levels:underground': '', 'building:flats': '', 'opening_hours': '', 'religion': '', 'ref:sobory.ru': '', 'name:ru': '', 'denomination': '', 'lawyer': '', 'utilization': '', 'amenity': '', 'brand': '', 'postal_code': '', 'phone': '', 'email': '', 'source:addr': '', 'office': '', 'building:levels': '', 'addr:postcode': '', 'shop': '', 'addr:city': '', 'type': '', 'name': '', 'addr:street': '', 'addr:housenumber': '', });
lyr_building_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'aeroway': 'TextEdit', 'start_date': 'TextEdit', 'building:levels:underground': 'TextEdit', 'building:flats': 'TextEdit', 'opening_hours': 'TextEdit', 'religion': 'TextEdit', 'ref:sobory.ru': 'TextEdit', 'name:ru': 'TextEdit', 'denomination': 'TextEdit', 'lawyer': 'TextEdit', 'utilization': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'postal_code': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'source:addr': 'TextEdit', 'office': 'TextEdit', 'building:levels': 'TextEdit', 'addr:postcode': 'TextEdit', 'shop': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': 'TextEdit', });
lyr_network_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'network': '', 'level': '', 'maxspeed:designed': '', 'turn:lanes:forward': '', 'turn:lanes': '', 'start_date': '', 'construction': '', 'name:be': '', 'seamark:type': '', 'seamark:bridge:clearance_width': '', 'seamark:bridge:clearance_height': '', 'seamark:bridge:category': '', 'track_ref': '', 'turn:lanes:backward': '', 'lanes:backward': '', 'local_ref': '', 'voltage_1': '', 'source:maxspeed': '', 'maxspeed:forward': '', 'maxspeed:backward': '', 'alt_name': '', 'width': '', 'int_name': '', 'wikipedia': '', 'wikidata': '', 'bridge:name': '', 'material': '', 'maxspeed:advisory': '', 'access': '', 'covered': '', 'railway:integra_signum:ALSO': '', 'bridge:structure': '', 'name:uk': '', 'boundary': '', 'admin_level': '', 'cutting': '', 'destination:ref': '', 'maxheight': '', 'service': '', 'railway:integra_signum:ALSN': '', 'railway:atp3b': '', 'lanes:forward': '', 'postal_code': '', 'junction': '', 'addr:postcode': '', 'destination': '', 'maxspeed:practical': '', 'name:etymology:wikidata': '', 'height': '', 'foot': '', 'name:en': '', 'source:name': '', 'old_ref': '', 'name:ru': '', 'description': '', 'official_name': '', 'surface': '', 'ref': '', 'lanes': '', 'highway': '', 'tracks': '', 'length': '', 'tunnel': '', 'source:position': '', 'railway:alsn-en': '', 'incline': '', 'embankment': '', 'railway:bidirectional': '', 'old_name': '', 'bridge': '', 'railway:traffic_mode': '', 'railway:rail': '', 'railway:radio': '', 'railway:integra_signum:ALS': '', 'railway:ballastless': '', 'metre_load': '', 'maxspeed:freight': '', 'loading_gauge': '', 'lit': '', 'axle_load': '', 'oneway': '', 'name': '', 'layer': '', 'railway:preferred_direction': '', 'maxspeed': '', 'highspeed': '', 'train:forward': '', 'railway:track_ref': '', 'voltage': '', 'usage': '', 'railway': '', 'passenger_lines': '', 'operator': '', 'gauge': '', 'frequency': '', 'electrified': '', 'designated_direction': '', 'branch': '', });
lyr_network_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'network': '', 'alt_ref': '', 'alt_name': '', 'network:be': '', 'name:uk': '', 'name:ru': '', 'check_date': '', 'to': '', 'service': '', 'public_transport:version': '', 'operator': '', 'network:wikipedia': '', 'network:wikidata': '', 'network:ru': '', 'network:en': '', 'from': '', 'wikipedia': '', 'wikidata': '', 'type': '', 'route': '', 'ref': '', 'name': '', 'distance': '', });
lyr_network_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'network': '', 'alt_ref': '', 'alt_name': '', 'network:be': '', 'name:uk': '', 'name:ru': '', 'check_date': '', 'to': '', 'service': '', 'public_transport:version': '', 'operator': '', 'network:wikipedia': '', 'network:wikidata': '', 'network:ru': '', 'network:en': '', 'from': '', 'wikipedia': '', 'wikidata': '', 'type': '', 'route': '', 'ref': '', 'name': '', 'distance': '', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'barrier': 'no label', 'aeroway': 'no label', 'start_date': 'no label', 'building:levels:underground': 'no label', 'building:flats': 'no label', 'opening_hours': 'no label', 'religion': 'no label', 'ref:sobory.ru': 'no label', 'name:ru': 'no label', 'denomination': 'no label', 'lawyer': 'no label', 'utilization': 'no label', 'amenity': 'no label', 'brand': 'no label', 'postal_code': 'no label', 'phone': 'no label', 'email': 'no label', 'source:addr': 'no label', 'office': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'addr:city': 'no label', 'type': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'barrier': 'no label', 'aeroway': 'no label', 'start_date': 'no label', 'building:levels:underground': 'no label', 'building:flats': 'no label', 'opening_hours': 'no label', 'religion': 'no label', 'ref:sobory.ru': 'no label', 'name:ru': 'no label', 'denomination': 'no label', 'lawyer': 'no label', 'utilization': 'no label', 'amenity': 'no label', 'brand': 'no label', 'postal_code': 'no label', 'phone': 'no label', 'email': 'no label', 'source:addr': 'no label', 'office': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'addr:city': 'no label', 'type': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_network_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'network': 'no label', 'level': 'no label', 'maxspeed:designed': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes': 'no label', 'start_date': 'no label', 'construction': 'no label', 'name:be': 'no label', 'seamark:type': 'no label', 'seamark:bridge:clearance_width': 'no label', 'seamark:bridge:clearance_height': 'no label', 'seamark:bridge:category': 'no label', 'track_ref': 'no label', 'turn:lanes:backward': 'no label', 'lanes:backward': 'no label', 'local_ref': 'no label', 'voltage_1': 'no label', 'source:maxspeed': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'alt_name': 'no label', 'width': 'no label', 'int_name': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'bridge:name': 'no label', 'material': 'no label', 'maxspeed:advisory': 'no label', 'access': 'no label', 'covered': 'no label', 'railway:integra_signum:ALSO': 'no label', 'bridge:structure': 'no label', 'name:uk': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'cutting': 'no label', 'destination:ref': 'no label', 'maxheight': 'no label', 'service': 'no label', 'railway:integra_signum:ALSN': 'no label', 'railway:atp3b': 'no label', 'lanes:forward': 'no label', 'postal_code': 'no label', 'junction': 'no label', 'addr:postcode': 'no label', 'destination': 'no label', 'maxspeed:practical': 'no label', 'name:etymology:wikidata': 'no label', 'height': 'no label', 'foot': 'no label', 'name:en': 'no label', 'source:name': 'no label', 'old_ref': 'no label', 'name:ru': 'no label', 'description': 'no label', 'official_name': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', 'highway': 'no label', 'tracks': 'no label', 'length': 'no label', 'tunnel': 'no label', 'source:position': 'no label', 'railway:alsn-en': 'no label', 'incline': 'no label', 'embankment': 'no label', 'railway:bidirectional': 'no label', 'old_name': 'no label', 'bridge': 'no label', 'railway:traffic_mode': 'no label', 'railway:rail': 'no label', 'railway:radio': 'no label', 'railway:integra_signum:ALS': 'no label', 'railway:ballastless': 'no label', 'metre_load': 'no label', 'maxspeed:freight': 'no label', 'loading_gauge': 'no label', 'lit': 'no label', 'axle_load': 'no label', 'oneway': 'no label', 'name': 'no label', 'layer': 'no label', 'railway:preferred_direction': 'no label', 'maxspeed': 'no label', 'highspeed': 'no label', 'train:forward': 'no label', 'railway:track_ref': 'no label', 'voltage': 'no label', 'usage': 'no label', 'railway': 'no label', 'passenger_lines': 'no label', 'operator': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', 'designated_direction': 'no label', 'branch': 'no label', });
lyr_network_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'network': 'no label', 'alt_ref': 'no label', 'alt_name': 'no label', 'network:be': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'check_date': 'no label', 'to': 'no label', 'service': 'no label', 'public_transport:version': 'no label', 'operator': 'no label', 'network:wikipedia': 'no label', 'network:wikidata': 'no label', 'network:ru': 'no label', 'network:en': 'no label', 'from': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'name': 'no label', 'distance': 'no label', });
lyr_network_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'network': 'no label', 'alt_ref': 'no label', 'alt_name': 'no label', 'network:be': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'check_date': 'no label', 'to': 'no label', 'service': 'no label', 'public_transport:version': 'no label', 'operator': 'no label', 'network:wikipedia': 'no label', 'network:wikidata': 'no label', 'network:ru': 'no label', 'network:en': 'no label', 'from': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'name': 'no label', 'distance': 'no label', });
lyr_network_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});