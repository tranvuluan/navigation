import React from 'react';
import { TouchableOpacity, View, Text } from "react-native";
import styles from './style';

const PreviewLayout = ({ label, values, selectedValue, setSelectedValue }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
                {values.map(value => (
                    <TouchableOpacity key={value} onPress={() => setSelectedValue(value)}
                        style={[styles.button, selectedValue === value && styles.selected]} >
                        <Text
                            style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
                        {value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default PreviewLayout;
