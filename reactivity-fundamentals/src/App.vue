<script setup>

  import { nextTick, reactive, ref } from 'vue';

  const count = ref(0)
  const state = reactive({count})
  const books = reactive([ref('Vue 3 Guide')])
// need .value here
  console.log('book',books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log('counts',map.get('count').value)
  console.log(books[0].value)
  console.log(map.get('count').value)
  console.log(state.count)
  state.count = 1
  console.log(count.value)
  console.log(' -------------------------- ')
  const otherCount = ref(2)
  state.count = otherCount
  console.log(state.count)
  console.log(count.value)

  const countProblems = reactive({countP:0})
  countProblems.countP++
  const obj = ref ({
    nested:{count:0},
    arr:['foo','bar'],
  })      
  const proxy = reactive({})
  const raw = {}
  const data = ref('')
  function increment() {
    count.value++
  }
 async function mutateDeeply(){
    obj.value.nested.count++,
    obj.value.arr.push('baz')
    data.value ='carregando!'
    await nextTick()
    data.value = 'carregado'
    console.log('proxy --> ',proxy)
    console.log('raw -->',raw)
    console.log('c original',countProblems)
    console.log('c',countProblems.countP)
  }
</script>

<template>
   <body>
      <button @click="increment">CLIQUE</button>
      <p>{{count}}</p>
      <button @click="mutateDeeply">CLIQUE</button>
      <p>{{ obj.nested }}</p>
      <p>{{ obj.arr }}</p>
      <p>{{data}}</p>
      <p>countP</p>
    </body>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
