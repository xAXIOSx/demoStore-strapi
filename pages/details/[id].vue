<template>
  <div class="cloth-details">
    <div class="cloth-details-block">
        <img :src='`http://localhost:1337${clothParam.img.data[0].attributes.url}`' alt="">
    </div>
    <div class="cloth-details-block">
        <h1>
          {{ clothParam.title }} <b>{{ clothParam.price }} сум</b> - {{ clothParam.brand.data.attributes.Name }}
        </h1>
        <span v-if="clothParam.inStock">В наличии ✅</span>
        <span v-else>Нет в наличии ❌</span>
        <p><span>Описание товара:</span><br>{{ clothParam.description }}</p>
        <div class="buy">
            <button type="button">Купить</button>
        </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const query = gql`
  query getCloth($id: ID!) {
    cloth(id: $id) {
      data {
        attributes {
          title
          description
          inStock
          price
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

const { data } = await useAsyncQuery(query, {
  id: id,
});
const clothParam = data.value.cloth.data.attributes;

</script>
