import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

  return (
    <View style={ styles.calculadoraContainer}>
        {
            ( numeroAnterior !== '0' &&  <Text style={ styles.resultadoPequeno}>{ numeroAnterior }</Text>)
        }
       
        <Text style={ styles.resultado} 
        numberOfLines={1} 
        adjustsFontSizeToFit
        >
            { numero }
        </Text>

        {/* Fila de Botones  */}
        <View style={ styles.fila}>
            <BotonCalc texto="C"   color="#5DADE2" action={limpiar} />
            <BotonCalc texto="+/-" color="#5DADE2" action={positivoNegativo} />
            <BotonCalc texto="del" color="#5DADE2" action={btnDelete} />
            <BotonCalc texto="/"   color="#34495E" action={btnDividir} />
        </View>
        
        {/* Fila de Botones  */}
        <View style={ styles.fila}>
            <BotonCalc texto="7" action={armarNumero}/>
            <BotonCalc texto="8" action={armarNumero}/>
            <BotonCalc texto="9" action={armarNumero}/>
            <BotonCalc texto="X" color="#34495E" action={btnMultiplicar}/>
        </View>

        {/* Fila de Botones  */}
        <View style={ styles.fila}>
            <BotonCalc texto="4" action={armarNumero}/>
            <BotonCalc texto="5" action={armarNumero}/>
            <BotonCalc texto="6" action={armarNumero}/>
            <BotonCalc texto="-" color="#34495E" action={btnRestar}/>
        </View>

        {/* Fila de Botones  */}
        <View style={ styles.fila}>
            <BotonCalc texto="1" action={armarNumero}/>
            <BotonCalc texto="2" action={armarNumero}/>
            <BotonCalc texto="3" action={armarNumero}/>
            <BotonCalc texto="+" color="#34495E" action={btnSumar}/>
        </View>

        {/* Fila de Botones  */}
        <View style={ styles.fila}>
            <BotonCalc texto="0" action={armarNumero} ancho={true}/> 
            <BotonCalc texto="."   action={armarNumero}/>
            <BotonCalc texto="="   color="#34495E" action={calcular}/>
        </View>

    </View>
  )
}
