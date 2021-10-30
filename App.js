import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      start: 'Iniciar',
      lastTime: null
    };

    //variavel que controlar o timer do relogio
    this.timer = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar(){
    if(this.timer != null) {
      //pausa o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({start: 'Iniciar'})
    }else{
      this.timer = setInterval(() => {
        //pegnaod numero o e acrescentando 0.1
       this.setState({numero: this.state.numero + 0.1 });
      }, 100);
        this.setState({start: 'Pausar'})
    }
  }

  limpar(){
    if(this.timer != null){
      //pausa o timer
      clearInterval(this.timer);     
      this.timer = null;                                
    }
    this.setState({ultimo: this.state.numero, numero: 0, start: 'Iniciar'});   
  }

  render() {
    return(
      <View style={styles.container}>

      <Image 
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
      />
      <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
          <Text style={styles.btnTexto}>{this.state.start}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lastArea}>
        <Text style={styles.textTimer}>
          {this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  lastArea: {
    marginTop: 40,
  },
  textTimer: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }
})
export default App
