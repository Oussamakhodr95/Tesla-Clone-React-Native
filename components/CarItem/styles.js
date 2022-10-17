import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        position:'absolute',
    },
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
    },
    titles:{
        marginTop:'30%',
        widht:'100%',
        alignItems:'center',
    },
    title:{
        fontSize:40,
        fontWeight:'600',
    },
    subTitles:{
        fontSize:16,
        color:'#5c5e62'
    },
    subTitleCTA:{
        textDecorationLine:'underline',
    },
    buttonContainer:{
        position:"absolute",
        bottom:50,
        width:'100%',
    }
});

export default styles