export async function fetchTopbar() {
  return await this.$axios().then(res => res.json);
}
