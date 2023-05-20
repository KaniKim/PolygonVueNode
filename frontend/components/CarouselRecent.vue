<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <v-slide-group v-model="slideGroup" >
                <v-slide-group-item v-for="n in 25" :key="n">
                    <v-card
                            color="grey-lighten-1"
                            :class="['ma-4', selectedClass]"
                            height="200"
                            width="100"
                            @click="toggle"
                            :image="lorem+Math.random()%25+'/200/300'"
                    >

                    </v-card>

                </v-slide-group-item>
            </v-slide-group>
        </v-col>
    </v-row>
</template>
<script>
export default {
  data() {
    return {
        slideGroup: 0,
        selected: null,
        lorem: "https://picsum.photos/seed/"
    };
  },
  mounted() {
    setInterval(() => this.slideGroup++, 2000);
  },
};
</script>
<style>
.v-slide-group__content {
    justify-content: center;
}


</style>