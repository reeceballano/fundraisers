<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="flex gap-16">
                        <div id="sidebar" class="md:w-1/3 shadow-md p-8 h-64 rounded">
                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Campaign</label>
                                <input id="campaignId" name="campaignId" class="text-input" type="text" v-model="campaignId" @keypress.enter="saveOptions()" />
                            </div>

                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Page Type</label>
                                <Select name="selectPageType" :data="pageType"></Select>
                            </div>

                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Theme</label>
                                <Select name="selectTheme" :data="theme"></Select>
                            </div>

                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Item to display</label>
                                <Select 
                                    name="selectItemCount"
                                    :data="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
                                ></Select>
                            </div>

                            <div class="w-full mb-3 border-t mt-10 pt-10">
                                <button 
                                    type="button"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                                    @click="fetchItems()" 
                                    :class="{ 'cursor-not-allowed': getPageType === '' }"
                                    :disabled="getPageType == ''"
                                >Show
                                </button>
                            </div>
                            
                        </div>
                        <div class="md:w-2/3">
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
import { mapGetters } from 'vuex';
import Select from '@/components/Select';

export default {
    name: 'Home',
    components: {
        FundraiserItem,
        Select,
    },

    data() {
        return {
            campaignId: 1,
            theme: ['light', 'dark'],
            pageType: ['S', 'T']
        }
    },

    computed: {
        ...mapGetters('fundraiser', ['getFundraisers', 'getCampaignId', 'getTheme', 'getItemCount', 'getPageType'])
    },

    watch: {
        campaignId() {
            this.saveOptions();
        },
    },

    methods: {
        fetchItems() {
            console.log('fetch')
            this.$store.dispatch('fundraiser/fetchFundraisers');
        },

        saveOptions() {
            console.log('changed', this.campaignId)
            this.$store.dispatch('fundraiser/saveCampaignId', this.campaignId);
        }
    }
}
</script>
