import { StyleSheet } from "react-native";

// Estilos Globales
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },  
    resultado: {
        color: '#EBF5FB',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultadoPequeno: {
        color: 'rgba(209, 242, 235,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        height:80,
        width: 80,
        // backgroundColor: '#229954',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
    },


});