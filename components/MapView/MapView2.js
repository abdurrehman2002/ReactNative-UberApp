import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import UIButton from '../UI/Button';



export default class MapScreen2 extends Component {




    state = {
        coordinate: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        origin : { latitude: 37.3318456, longitude: -122.0296002 },
        destination : { latitude: 37.771707, longitude: -122.4053769 },
        GOOGLE_MAPS_APIKEY : '…',
        marginBottom: 1
    }

    async getCurrentLocation() {

        let location = await Location.getCurrentPositionAsync({ "accuracy": Location.Accuracy.High });

        this.setState({
            ...this.state,
            coordinate: {
                ...location.coords
            }
        })


    }
    // async componentDidMount() {
    //     //this.getCurrentLocation()
    // }
    render() {
        let { latitude, longitude } = this.state.coordinate

        return (
            <View style={styles.map}>

                {/* <View style={[styles.map, {position:"absolute", zIndex: 1, top:"50%",  marginTop:-37, marginLeft:-11, left:"50%"}]}>
                    <Image
                        source={{ uri: "https://www.pngfind.com/pngs/m/114-1147878_location-poi-pin-marker-position-red-map-google.png" }}
                        style={{ height: 50, width: 50, }}
                        resizeMode="contain"
                    />      
                </View> */}
 
                <MapView
                    // ref={map => this.map = map}
                    style={[styles.map, { marginBottom: this.state.marginBottom }]}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    // ref={map => (this.map = map)}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    showsPointsOfInterest={false}
                    showsCompass={true}
                    // onRegionChangeComplete={(region) => this.setState({
                    //     coordinate: region
                    // })}
                    // onRegionChange={(region)=> {
                    //     this.setState({ region });
                    //   }}
                    onMapReady={async () => {
                        await this.getCurrentLocation()
                        this.setState({ marginBottom: 0 })
                    }}

                >

                    <Marker
                        draggable
                        onDragEnd={(e) => this.setState({ coordinate: { ...e.nativeEvent.coordinate } })}
                        coordinate={{
                            latitude,
                            longitude,
                        }}
                        title="test"
                        description="des"
                        animation={true}
                    />


                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={this.state.GOOGLE_MAPS_APIKEY}
                    />



                </MapView>
                <UIButton onPress={() => { this.props.navigation.navigate('SelectVehicle') }} text={"Send Request"}  
                mystyle={{position: 'absolute',
                 bottom:-700}}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    map: {
        ...StyleSheet.absoluteFillObject
    }
})