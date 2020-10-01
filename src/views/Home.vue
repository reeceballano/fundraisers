<template>
    <div class="home">
        <section class="section">
            <div class="container md:px-24">
                <div class="py-24">
                    <div class="grid md:grid-cols-3 gap-10">
                        <div class="md:col-span-1 shadow-md p-8">
                            <h3>Options</h3>
                        </div>

                        <div class="md:col-span-2">
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
