import React from 'react'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'


import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import mapMarker from '../images/map-marker.png' //declarar: declare module "*.png" /dentro da pasta @types, no arquivo index.d.ts
import { useNavigation } from '@react-navigation/native';


export default function  OrphanagesMap() {
    const navigation = useNavigation();
    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{ latitude: -23.5555257, longitude: - 46.6119504, latitudeDelta: 0.08, longitudeDelta: 0.08 }}
            >
                <Marker
                    icon={mapMarker}
                    coordinate={{
                        latitude: -23.5555257,
                        longitude: - 46.6119504
                    }}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                >

                    <Callout tooltip={true} onPress={() => handleNavigateToOrphanageDetails()}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das Meninas</Text>
                        </View>
                    </Callout>

                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { alert('Oi') }}>
                    <Feather name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 16,
        justifyContent: 'center'
    },

    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.4,
    },

    footerText: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_700Bold'
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});