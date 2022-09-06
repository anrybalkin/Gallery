import React from "react";
import itemPhotos from "./itemPhotos";
import {FlatList, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * 
 * @param {Object} data 
 * @returns JSX Element List with ListItems of photos
 */
const listPhotos = (data) => {
    return () => {
        const nav=useNavigation()
        return (
            <FlatList
                data={data}
                renderItem={(data) => {
                return itemPhotos(data,nav)
            }}
                keyExtractor={item => item.id}
                style={styles.container}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        
    }
})

export default listPhotos;