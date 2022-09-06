import React from "react";
import {View, Button, StyleSheet} from "react-native";
import {storeRedux} from "../store";
import ImageViewer from "react-native-image-zoom-viewer";
import { useSelector } from 'react-redux';


/**
 * Generate page what show image
 * @param {Navigator} param0 
 * @returns JSX Element
 */
const ShowPhoto = ({navigation}) => {

     const currentData = useSelector((state)=>{
        return storeRedux.getState().current
    })
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (<Button
                onPress={() => navigation.navigate("List")}
                title="Back "/>)
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <ImageViewer
                imageUrls={[{
                    url: currentData.urls.regular
                }
            ]}
                renderIndicator={() => null}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default ShowPhoto;