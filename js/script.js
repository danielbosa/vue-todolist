import {todo} from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return {
            todo: todo,

        }
    },
    methods: {
        
    },
    mounted(){

    }
}).mount('#app');

/*
Rifare l'esercizio della to do list.
Oogni todo sarà un oggetto, formato da tre proprietà:
-id, un numero univoco incrementale
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/