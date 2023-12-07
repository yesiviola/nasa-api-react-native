import React, {useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet,Animated} from 'react-native';


const Header = () => {
    const logoOpacity = useRef(new Animated.Value(1)).current;

    const animateLogo = () => {
        Animated.sequence([
            Animated.timing(logoOpacity, {
                toValue: 0.5,
                duration: 3000,
                useNativeDriver: true,
            }),
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }),
        ]).start(() => animateLogo());
    };
    useEffect(() => {
        animateLogo();
    }, []
    );
    return (
        <View style={styles.header}>
            <Image
             source={require('./assets/logo-nasa.png')}
                style={{width: 110, height: 100}} />
            <View style={styles.titleContainer}>
            <Text style={styles.title}>NASA API Explore</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        paddingTop: 40,
        backgroundColor: '#B0E0E6',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 2,
        paddingTop: '20',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
});
export default Header;