import { Text } from "react-native";
import PropTypes from 'prop-types';
import { StyleSheet } from "react-native";

function MyText({ children, bold, color, size }) {
  return (
    <Text style={[
      styles.text, 
      bold && styles.bold,      // Aplica negrita si "bold" es verdadero
      { color: color },         // Aplica el color recibido
      { fontSize: size }        // Aplica el tamaño recibido
    ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',             // Valor predeterminado del color
    fontSize: 16,               // Valor predeterminado del tamaño de fuente
  },
  bold: {
    fontWeight: 'bold',         // Negrita si "bold" es verdadero
  }
});

MyText.propTypes = {
  children: PropTypes.node.isRequired,   // Asegura que haya texto o un componente hijo
  bold: PropTypes.bool,                  // Controla si el texto es negrita o no
  color: PropTypes.string,               // Permite personalizar el color del texto
  size: PropTypes.number,                // Permite personalizar el tamaño del texto
};

MyText.defaultProps = {
  bold: false,                           // No es negrita por defecto
  color: 'white',                        // Color predeterminado
  size: 16,                              // Tamaño de texto predeterminado
};

export default MyText;
