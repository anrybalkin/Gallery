import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native";
import {addChoisen} from "./actions";
import {storeRedux} from "./store";
/**
 *  
 * @param {Object} data Object with data from response unsplash
 * @param {Navigator} navigation Object Navigator for navigate on touch
 * @returns JSX Element with Item list Photo
 */
const itemPhotos = (data, navigation) => {
    data = data.item;
    if (typeof data.description == "object") {
        data.description = "Nothing here";
    }
    function handlerTouch() {
        storeRedux.dispatch(addChoisen(data))
        navigation.navigate("Show");
    }

    return (

        <TouchableHighlight onPress={handlerTouch} underlayColor="#DDDDDD">
            <View style={styles.container}>
                <Image
                   
                   style={styles.minifyImg}
                   source={{
                    uri: data.urls.thumb
               }}/>
                <View style={styles.info}>
                    <Text style={{textAlign:"right",fontSize:12}}>{data.description.length > 60
                            ? "Description: \n"+data
                                .description
                                .substring(0, 87) + "..."
                            : "Description: \n"+data.description}</Text>
                    <Text style={{textAlign:"right"}}>Author: {data.user.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 20
    },
    info: {
        marginLeft:50,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flex:1
    },
    minifyImg: {
        width: 50,
        height: 50
    }
});
export default itemPhotos;