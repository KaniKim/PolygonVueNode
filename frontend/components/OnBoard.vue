<template>
    <v-layout>
        <v-main>
            <v-container fluid>
                <v-row no-gutters align="center" justify="center">
                <v-col cols="12" sm="5">
                        <v-row align="start">
                            <v-col>
                                <v-btn
                                    height="460px"
                                    width="1000px"
                                    color="primary"
                                    dark
                                    :loading="isSelecting"
                                    @click="handleFileImport"
                                >
                                    <v-icon size="100">mdi-image-edit</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                </v-col>
                    <v-col cols="12" sm="1"></v-col>
                     <v-col cols="12" sm="5">

                    <v-card
                        color="purple"
                        style="height: 465px"
                    >
                        <v-row justify="center" align="center">

                        <v-col sm="9">
                            <br>
                        <v-text-field
                            outlined
                            density=compact
                            theme="dark"
                            v-model="privateKey"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            label="Your Private Key"
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-text-field
                            density=compact
                            v-model="privateKey"
                            name="input-10-1"
                            label="Invitation Creator"
                        ></v-text-field>
                        <v-text-field
                            density=compact
                            v-model="privateKey"
                            name="input-10-1"
                            label="Related People"
                        ></v-text-field>
                        <v-text-field
                            density=compact
                            v-model="privateKey"
                            name="input-10-1"
                            label="Event Days"
                        ></v-text-field>
                            <v-text-field
                                density=compact
                                v-model="privateKey"
                                name="input-10-1"
                                label="Event Time"
                            ></v-text-field>
                            <v-text-field
                                density=compact
                                v-model="privateKey"
                                name="input-10-1"
                                label="Venue Name"
                            ></v-text-field>
                            <v-text-field
                                density=compact
                                v-model="privateKey"
                                name="input-10-1"
                                label="Venue Address"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                    <nuxt-link :to="current_path">
                    <v-avatar size="350">
                        <v-img
                        type="submit" @click="connect"
                               :src="circle_next"></v-img>

                    </v-avatar>
                    </nuxt-link>
                </v-row>
            </v-container>

        </v-main>


    </v-layout>
</template>
<script>
import {useFetch} from "#app";

export default {
  data() {
    return {
      privateKey: "",
      show1: false,
      circle_next: "/image/Next_step.png",
        current_path: this.$route.path + "/invitation",
    };
  },
  methods: {
    connect: async function () {
      console.log(this.privateKey)
      const data = await
        useFetch("http://localhost:3003/api/did", {
        headers: { "Content-type": "application/json" },
        method: 'POST',
          body: JSON.stringify({
          network: "testnet",
          privateKey: "0x" + this.privateKey,
        })
      })
      console.log(data);

    },
  }
};
</script>
<style>
.mdi-myFileIcon::before {
    content: "\F39A";
    color: blue;
}
</style>