<template>
    <div role="alert">
        <div 
            :class="[ (hasError) ? 'error-alert-title' : 'success-alert-title' ]" 
            class="alert-title"
        >
            <p v-if="hasError">Error</p>
            <p v-else>Success</p>
        </div>

        <div 
            :class="[ (hasError) ? 'error-alert-content' : 'success-alert-content' ]"  
            class="alert-content"
        >
            <p>{{ alertContent }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',

    props: {
        isVisible: {
            type: Boolean
        },

        hasError: {
            type: Boolean
        },

        alertContent: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .alert-title {
        @apply text-white font-bold rounded-t px-4 py-2;
    }

    .alert-content {
        @apply border border-t-0  rounded-b px-4 py-3;
    }

    .error-alert-title {
        @apply bg-red-500;
    }

    .error-alert-content {
        @apply  text-red-700 border-red-400  bg-red-100;
    }

    .success-alert-title {
        @apply bg-green-500;
    }

    .success-alert-content {
        @apply  text-green-700 border-green-400  bg-green-100;
    }
</style>
