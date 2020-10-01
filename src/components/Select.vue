<template>
    <div class="relative">
        <select @change="saveOptions" v-model="option" class="select-input" id="grid-theme">
            <option v-for="(item, index) in data" :key="index" :value="item">{{ item }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',

    props: {
        name: {
            type: String,
            required: true
        },

        data: {
            type: Array,
        }
    },

    data() {
        return {
            option: null,
        }
    },

    methods: {
        saveOptions() {
            switch(this.name) {
                case 'selectTheme':
                    this.$store.dispatch('fundraiser/saveTheme', this.option);
                    break;

                case 'selectItemCount':
                    this.$store.dispatch('fundraiser/saveItemCount', this.option);
                    break;   
                    
                case 'selectPageType':
                    this.$store.dispatch('fundraiser/savePageType', this.option);
                    break;      
            }
        }
    }
}
</script>

<style>

</style>