import {todo} from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return {
            todo: todo,
            itemText: '',
            done: ''
        }
    },
    methods: {
        /*toggleDone(id){
            const item = this.todo.findIndex((el)=>{
                return el.id === id;
            })
            this.todo[item].done = !this.todo[item].done
        },*/
        toggleDone(id){
            const item = this.todo.find((el)=>{
                return el.id === id;
            })
            if(item){//perché potrebbe ritornare un undefined, come errore
                item.done =!item.done
            }
        },
        removeItem(id){
            const i = this.todo.findIndex((el)=>{
                return el.id === id});
            if(i !== -1){//perché potrebbe ritornare -1 come errore
                this.todo.splice(i,1)};
        },
        addItem(){
            const newObj ={
                id: null,
                text: this.itemText,
                done: false
            };
            let newId = this.todo.reduce((acc, curr)=>{
                return (acc = acc > curr.id ? acc : curr.id);
            });
            newObj.id = newId + 1;
            this.todo.push(newObj);
            this.itemText = '';
        },
        
    },
    computed:{
        filteredTodo(){
            return this.todo.filter((el)=>{
                if(this.done === ''){
                    return true
                };
                if(this.done === 'false'){
                    return el.done === false 
                };
                if(this.done === 'true'){
                    return el.done === true
                }
            });
        }
    },
    mounted(){

    }
}).mount('#app');