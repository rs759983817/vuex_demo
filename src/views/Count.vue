<template>
    <div>
        <h2>{{msg}}</h2>
        <!-- <h3>{{$store.state.count}}-{{count}}</h3> -->

        //模块组写法
        <h3>{{$store.state.a.count}}-{{count}}</h3>
        <p>
            <button @click="add(5)">+</button>
            <button @click="reduce(3)">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store.js';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';

export default {
    data(){
        return{
            msg:'Hello Vuex'
        }
    },
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },
    // computed:mapState({
    //     count:state=>state.count,
    // }),
    computed:{
        ...mapState(['count']),
        // count(){
        //     this.$store.getters.count;
        // },//简写为...mapGetters(['count'])
        ...mapGetters(['count']),
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),
    },
    store
}
</script>