<template>
    <div>
        <group-component 
            :key="profile.key"
            :index="profile.index"
            :label="profile.label"
            :data="profile"
        >
        profile inputs
        </group-component>
    </div>
</template>

<script>
import GroupComponent from './GroupComponent'
export default {
    name: "ProfileComponent",
    data(){
        return {
            profile:{
                key:"P01",
                index: "001",
                label: "Profile P01",
            }
        }
    },
    components:{
        GroupComponent
    }
}
</script>
<style scoped>  
    .title{
        color:#FF0000;
    }
</style>

