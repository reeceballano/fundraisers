<template>
    <input 
        :id="id" 
        :name="name" 
        class="text-input" 
        :type="type" 
        @input="$emit('input', $event.target.value)" 
    />
</template>

<script>
export default {
    name: 'InputText',
    props: {
        id: {
            type: String
        },

        name: {
            type: String
        },

        type: {
            type: String
        }
    },
}
</script>
