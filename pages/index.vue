<template>
  <div>
    <h3 class="mb-20">
      New Clothes:
    </h3>
    <div class="clothes">
      <div v-if="!clothes" class="loading">Loading...</div>
      <div v-else class="clothes-list">
        <div v-for="cloth in clothes" class="cloth-card">
          <div>
            <h3 class="title">{{ cloth.attributes.title }}</h3>
            <div class="brand">
              <span>{{ cloth.attributes.brand.data.attributes.Name }}</span>
            </div>
          </div>
          <div class="img">
            <img :src='`http://localhost:1337${cloth.attributes.img.data[0].attributes.url}`' alt="">
          </div>
          <div class="body">
            {{ cloth.attributes.description.substring(0, 50)
            }}{{ cloth.attributes.description.length > 50 ? "..." : "" }}
          </div>
          <div class="btn">
            <nuxt-link :to="`details/${cloth.id}`"
              ><button type="button">Подробнее</button></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = gql`
  query getClothes {
    clothes {
      data {
        id
        attributes {
          title
          description
          brand {
            data {
              attributes {
                Name
              }
            }
          }
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query),
  clothes = data.value.clothes.data;
</script>
