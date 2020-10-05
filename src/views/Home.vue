<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="flex flex-col md:flex-row gap-16">
                        <Sidebar />
                        <div class="md:ml-10 md:w-2/3">
                            <Alert 
                                v-if="getHasError"
                                :hasError="getHasError" 
                                alertContent="Something is wrong!" 
                            />
                            
                            <span class="text-gray-100" v-show="getIsLoading">Loading...</span>

                            <FundraiserItem 
                                v-for="(data, index) in getFundraisers"
                                :key="index"
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

export default {
    name: 'Home',
    components: {
        FundraiserItem,
        Sidebar,
        Alert
    },

    computed: {
        ...mapGetters('fundraiser', ['getFundraisers', 'getIsLoading', 'getHasError']),
    },

}
</script>
