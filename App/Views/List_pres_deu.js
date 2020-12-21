import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker } from 'react-native'
import { Container, Button, Icon } from 'native-base';

const List = (props) => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('');
    return (
        <Container>

            <View style={[styles.bg_color, styles.header]}>
                <View style={styles.header_top}>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </View>
                <View style={styles.total}>
                    <Text style={styles.total_txt}>{props.type ? 'Te deben' : 'Debes'} <Text style={styles.total_value}>${props.value}</Text></Text>
                </View>
                <View style={styles.filters}>
                    <TouchableOpacity style={[styles.button_strech, { backgroundColor: '#28A745' }]}>
                        <Text>Entró</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_picker]}>

                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}
const styles = StyleSheet.create({
    bg_color: {
        backgroundColor: '#5FABDB'
    },
    header: {
        position: 'absolute',
        width: '100%',
        top: 0,
        height: 143,
        paddingRight: 22,
        paddingLeft: 15,
    },
    header_top: {
        flexDirection: 'row'
    },
    total: {
        alignItems: 'flex-end',
        marginTop: 17,
    },
    filters: {
        flexDirection: 'row',
        marginTop: 17,
    },
    total_txt: {
        color: '#FDFBFB',
        fontSize: 16,
    },
    total_value: {
        fontWeight: 'bold',
    },
    button_picker: {
        backgroundColor: 'white',
        borderRadius: 5,
    },
});
export default List;