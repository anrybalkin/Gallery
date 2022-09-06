/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {storeRedux} from '../store';
import {addPhoto} from "../actions";
import listPhotos from '../listPhotos';
import {useSelector} from 'react-redux';
import {ActivityIndicator, useColorScheme, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
/**
 * Generate Page with list of photos
 * @returns
 */
const ListPhotos = () => {
    //apiKey for Unsplash
    const apikey = "YOUR APIKEY";
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode
            ? Colors.darker
            : Colors.lighter
    };

    const photos = useSelector((state) => {
        return storeRedux
            .getState()
            .photos
    })

    useEffect(() => {
        if (Object.keys(storeRedux.getState().photos).length == 0) {
            fetch("https://api.unsplash.com/photos/?client_id=" + apikey).then(response => {
                return response.json()
            }).then(data => {
                if (data.length > 0) {
                    storeRedux.dispatch(addPhoto(data))
                }
            })
        }

    })

    if (Object.keys(photos).length > 0) {
        let dataRendering = [];
        for (let el in photos) {
            dataRendering.push(photos[el])

        }
        const FlatListPhotos = listPhotos(dataRendering)
        return <SafeAreaView style={styles.container}><FlatListPhotos style={backgroundStyle}/></SafeAreaView>

    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator style={backgroundStyle} size="large" color="#0000ff"/>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    }
});
export default ListPhotos;
