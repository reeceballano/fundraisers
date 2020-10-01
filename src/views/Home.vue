<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="flex gap-16">
                        <div class="md:w-1/3 shadow-md p-8 h-64">
                            <h3>Options</h3>
                        </div>

                        <div class="md:w-2/3">
                            {{ getFundraisers }}
                            <FundraiserItem></FundraiserItem>
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

export default {
    name: 'Home',
    components: {
        FundraiserItem,
    },

    computed: {
        ...mapGetters('fundraiser', ['getFundraisers'])
    }
}
</script>
