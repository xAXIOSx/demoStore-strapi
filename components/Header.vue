<template>
  <div class="header">
    <div class="header-group">
      <nuxt-link to="/"><h1>All Clothes</h1></nuxt-link>
    </div>
    <div class="header-group mt-20">
        <div class="brand-link" v-for="brand in brands">
            <nuxt-link :to="`/category/${brand.id}`">{{ brand.attributes.Name }}</nuxt-link>
        </div>
    </div>
  </div>
</template>

<script setup>
const query = gql`
  query getBrands {
    brands {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query)
const brands = data.value.brands.data
console.log(brands);
</script>
