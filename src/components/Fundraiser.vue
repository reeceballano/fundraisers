<template>
    <a :href="fundraiser.Url" target="_blank">
        <div v-if="!loading" class="fundraiser-item">
            <div class="border-gray-400 flex flex-row mb-2">
                <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                        <img v-if="fundraiser.ImagePath" :src="fundraiser.ImagePath" alt="" />
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                        <div class="font-medium">{{ fundraiser.CreatorName }}</div>
                        <div class="text-gray-600 text-sm">ID: {{ fundraiser.Id }}</div>
                    </div>
                    <div class="fund-amount">${{ numberWithCommas }}</div>
                </div>
            </div>
        </div>

        <div v-else class="fundraiser-item skeleton-loading">
            <div class="border-gray-400 flex flex-row mb-2">
                <div class="animate-pulse select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                        <div class="h-4 bg-gray-400 rounded w-1/3 mb-2"></div>
                        <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                    </div>
                    <div class="h-4 bg-gray-400 rounded w-16"></div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>

export default {
    name: 'Fundraiser',

    props: {
        fundraiser: {
            type: Object,
            required: true
        },

        loading: {
            type: Boolean
        }
    },

    computed: {
        numberWithCommas() {
            return Number(parseFloat(this.fundraiser.Total).toFixed(2)).toLocaleString('en', {
                minimumFractionDigits: 2
            });
        },

    }

}
</script>
