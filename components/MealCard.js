import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import CustomText from './CustomText';

const MealCard = props => {
    return (
        <View
            style={styles.container}>
            <View
                style={styles.mealItem}>
                <TouchableOpacity
                    onPress={props.onSelectMeal}>
                    <View>
                        <View
                            style={{ ...styles.mealRow, ...styles.mealHeader }}>
                            <ImageBackground
                                source={{ uri: props.imageUrl }}
                                style={styles.image}>
                                <CustomText
                                    numberOfLines={1}
                                    style={styles.title}>
                                    {props.title}
                                </CustomText>
                            </ImageBackground>
                        </View>
                        <View
                            style={{ ...styles.mealRow, ...styles.mealDetails }}>
                            <CustomText>
                                {props.duration}m
                            </CustomText>
                            <CustomText>
                                {props.complexity.toUpperCase()}
                            </CustomText>
                            <CustomText>
                                {props.affordability.toUpperCase()}
                            </CustomText>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 240,
        width: '100%',
        marginTop: 10,
        backgroundColor: Colors.grey,
        borderRadius: 20,
        overflow: 'hidden',
    },
    mealHeader: {
        height: '80%',
    },
    mealDetails: {
        height: '20%',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 22,
        color: Colors.white,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    }
});

export default MealCard;