<template>
  <section ref="styles" style="display:none;">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'CustomStyles',
  mounted: function() {
    let styleTag = document.createElement('style');
    this.$refs.styles.attachShadow({mode: 'open'});
    styleTag.textContent = this.$refs.styles.textContent;
    this.$refs.styles.textContent = null;
    this.$refs.styles.appendChild(styleTag);
  }
}
</script>