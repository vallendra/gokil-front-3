<template>
    <div>
        <navbar-user/>
        <nuxt />
    </div>
</template>

<script>
import NavbarUser from '~/components/NavbarUser'

export default {
    middleware: 'auth',
    components: {
        NavbarUser
    }
}
</script>
