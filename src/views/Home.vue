<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="flex flex-col md:flex-row gap-16">
                        <Sidebar />
                        <div class="md:ml-10 md:w-2/3">
                            <Alert 
                                v-show="getHasError"
                                :hasError="getHasError" 
                                alertContent="Something is wrong!" 
                            />

                            <Alert 
                                v-show="isEmpty && !getHasError"
                                :hasError="isEmpty" 
                                alertContent="No data available" 
                            />
                           
                            <span class="text-gray-100" v-show="getIsLoading">Loading...</span>

                            <FundraiserItem 
                                v-show="!getHasError"
                                v-for="(data, index) in getFundraisers"
                                :key="index"
                                :loading="getIsLoading"
                                :fundraiser="data">
                            </FundraiserItem>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import FundraiserItem from '@/components/Fundraiser';
import Sidebar from '@/components/Sidebar';
import Alert from '@/components/Alert';
import { mapGetters } from 'vuex';
import { useApi } from '@/utils/api';

export default {
    name: 'Home',
    components: {
        FundraiserItem,
        Sidebar,
        Alert
    },

    data() {
        return {
            isEmpty: false,
            api: useApi(),
        }
    },

    watch: {
        getFundraisers() {
            if(this.getFundraisers.length >= 1) {
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
            }
        },
    },

    computed: {
        ...mapGetters('fundraiser', ['getFundraisers', 'getIsLoading', 'getHasError']),

    },


}
</script>
