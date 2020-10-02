<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="flex flex-col md:flex-row gap-16">
                        <div id="sidebar" class="md:w-1/3 shadow-md p-8 h-64 rounded">
                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Campaign ID</label>
                                <input id="campaignId" name="campaignId" class="text-input" type="text" v-model="campaignId" @keypress.enter="saveOptions()" />
                            </div>

                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Page Type <small>(S: Individual T: Team)</small></label>
                                <Select name="selectPageType" :data="pageType"></Select>
                            </div>

                            <div class="w-full mb-3">
                                <label for="campaignId" class="font-light">Item to display</label>
                                <Select 
                                    name="selectItemCount"
                                    :data="[1,2,3,4,5,6,7,8,9,10]"
                                ></Select>
                            </div>

                            <div class="button-wrapper">
                                <button 
                                    type="button"
                                    class=" text-white w-full" 
                                    @click="fetchItems()" 
                                    :class="[getPageType ? 'button-enabled' : 'button-disabled']"
                                    :disabled="getPageType == ''"
                                >Show
                                </button>

                                <div class="flex items-center justify-center w-full mt-8">
                                    <label for="toogleA" class="flex items-center cursor-pointer" >
                                        <div class="relative">
                                            <input v-model="toggle" id="toogleA" type="checkbox" class="hidden" />
                                            <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                            <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" ></div>
                                        </div>

                                        <div class="ml-3 text-gray-700 font-medium">
                                            <span v-if="toggle">
                                                Swith to Light Mode
                                           </span>

                                           <span v-else>
                                               Swith to Dark Mode
                                           </span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="md: ml-10 md:w-2/3">
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
            pageType: ['S', 'T'],
            toggle: false,
        }
    },

    computed: {
        ...mapGetters('fundraiser', ['getFundraisers', 'getCampaignId', 'getTheme', 'getItemCount', 'getPageType', 'getIsLoading']),
    },

    watch: {
        campaignId() {
            this.saveOptions();
        },

        toggle() {
            if(this.toggle === true) {
                this.$store.dispatch('fundraiser/saveTheme', 'dark');
            } else {
                this.$store.dispatch('fundraiser/saveTheme', 'light');
            }
        }
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
