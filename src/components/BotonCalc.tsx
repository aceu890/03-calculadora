import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: ( numeroTexto: string) => void; 
}

export const BotonCalc = ({ texto, color = '#17202A', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( texto )  }
        >
            <View style={{ ...styles.boton, backgroundColor: color, width: (ancho) ? 180 : 80 }}>

                <Text style={{ ...styles.botonTexto, color: (color === '#5DADE2') ? 'black' : 'white'}}> {texto} </Text>

            </View>
        </TouchableOpacity>
    );
}



