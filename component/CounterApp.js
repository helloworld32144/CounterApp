import React, {Component} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return{
        increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
    }
}

class CounterApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={styles.decrease}> Decrease </Text>
                    </TouchableOpacity>
                    <Text style={styles.number}> {this.props.counter} </Text>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={styles.increase}> Increase </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1
    },
    counter: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center'
    }, 
    decrease: {
        fontSize: 30, 
        backgroundColor: 'red', 
        color: 'white'
    },
    increase: {
        fontSize: 30, 
        backgroundColor: 'green', 
        color: 'white'
    },
    number: {
        fontSize: 30, 
        fontWeight: 'bold'
    }


})
export default connect(mapStateToProps, mapDispatchToProps) (CounterApp)