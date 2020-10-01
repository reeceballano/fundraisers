<template>
    <div class="fundraiser-item">
        <div class="border-gray-400 flex flex-row mb-2">
            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                    <img v-if="fundraiser.ImagePath" :src="fundraiser.ImagePath" alt="" />
                </div>
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">Cup of water</div>
                    <div class="text-gray-600 text-sm">200ml</div>
                </div>
                <div class="text-gray-600 text-xs">6:00 AM</div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Fundraiser',

    props: {
        fundraiser: {
            required: true
        }
    },



}
</script>

<style>

</style>