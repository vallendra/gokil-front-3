<template>
    <div>
        <NavbarMain />
        <nuxt />
        <FooterMain />
    </div>
</template>

<script>
    import NavbarMain from '@/components/NavbarMain'
    import FooterMain from '@/components/FooterMain'

    export default {
        components: {
            NavbarMain,
            FooterMain
        }
    }
</script>

