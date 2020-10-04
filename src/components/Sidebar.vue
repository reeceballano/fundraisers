<template>
    <div id="sidebar" class="mb-10 md:w-1/3 shadow-md p-8 h-64 rounded">
        <div class="w-full mb-3">
            <label for="campaignId" class="font-light">Campaign ID</label>
            <input id="campaignId" name="campaignId" class="text-input" type="text" v-model="campaignId" />
        </div>

        <div class="w-full mb-3">
            <label for="campaignId" class="font-light">Page Type <small>(S: Individual T: Team) Default: S</small></label>
            <Select name="selectPageType" :data="pageType"></Select>
        </div>

        <div class="w-full mb-3">
            <label for="campaignId" class="font-light">Item to display <small>Default: 5</small></label>
            <Select 
                name="selectItemCount"
                :data="[1,2,3,4,5,6,7,8,9,10]"
            ></Select>
        </div>

        <div class="button-wrapper">
            {{ isEnabled }}
            <button 
                v-if="isEnabled"
                type="button"
                class=" text-white w-full button-enabled" 
                @click="fetchItems()" 
            >Show 
            </button>

            <button 
                v-else
                type="button"
                class=" text-white w-full button-disabled" 
                disabled
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
</template>

<script>
import Select from '@/components/Select';

export default {
    name: 'Sidebar',
    components: {
        Select,
    },

    data() {
        return {
            campaignId: 1,
            pageType: ['S', 'T'],
            toggle: false,
            isEnabled: true,
        }
    },

    watch: {
        campaignId() {
            this.saveOptions();
            this.checkButtonStatus();
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
            if(this.campaignId != '') {
                this.$store.dispatch('fundraiser/fetchFundraisers');
            }
        },

        saveOptions() {
            console.log('changed', this.campaignId)
            this.$store.dispatch('fundraiser/saveCampaignId', this.campaignId);
        },

        checkButtonStatus() {
            if(this.campaignId != '') {
                this.isEnabled = true;
            } else {
                this.isEnabled = false;
            }
        }
    }
}
</script>

<style>

</style>