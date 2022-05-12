<template>
    <div>
        <div v-for="(val) in values" :key="val.id">
            <div></div>
            
        </div>
    </div>
</template>

<script>
    
    import * as todoApi from '@/api/todo'

    export default {
        data(){
            return{
                values :[{
                    rows:[]
                }]
            }
        },
        methods: {
            getDataLoad(){
                console.log("start")
                this.values = []
                todoApi.getAllList().then(res =>{
                    // console.log(res.data);
                    res.data.forEach(element =>{

                        console.log(element);
                        this.values.push(element);
                    }
                    )
                });
            },
        },
        created(){
            this.getDataLoad();
        }
    }


</script>