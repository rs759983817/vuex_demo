import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:3
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state,n){
        state.count-=n;
    }
}
const getters={
    count(state){
        return state.count+=100;
    }
}
const actions={
    addAction(context){
        context.commit('add',5);
        setTimeout(()=>{context.commit('reduce',2)},3000);
        console.log('我比reduce先执行了！');
    },
    reduceAction({commit}){
        commit('reduce',3);
    }//运用了两种写法reduceAction({commit})这样把commit封装起来，直接调用commit就可以了
}

//模块组
const moduleA={
    state,mutations,getters,actions
}

export default new Vuex.Store({
    // state,mutations,getters,actions 
    modules:{a:moduleA}
})