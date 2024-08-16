<template>
  <v-html>
    <v-tooltip :activator="activator" :location="location" :width="width">
      <template #activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" class="tooltip-activator">
          <slot name="activator"></slot>
        </div>
      </template>
      <template #default>
        <div :class="tooltipClass">
          <slot name="tooltipContent"></slot>
        </div>
      </template>
    </v-tooltip>
  </v-html>
</template>

<script>
export default {
  props: {
    activator: {
      type: String,
      default: "parent",
    },
    location: {
      type: String,
      default: "top",
    },
    width: {
      type: String,
      default: "200px",
    },
    tooltipClass: {
      type: String,
      default: "custom-tooltip",
    },
  },
};
</script>

<style scoped>
.tooltip-activator {
  display: inline-block;
  cursor: pointer;
}

.custom-tooltip {
  border-radius: 10px;
  font-size: 14px;
  padding: 10px;
}

</style>
