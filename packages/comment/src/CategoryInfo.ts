import { Component, Prop, Vue } from "vue-property-decorator";
import CategoryIcon from "@mr-hope/vuepress-shared-utils/icons/CategoryIcon.vue";
import { capitalize } from "@mr-hope/vuepress-shared-utils";
import { i18n } from "@mr-hope/vuepress-shared-utils";

// eslint-disable-next-line @typescript-eslint/naming-convention
@Component({ components: { CategoryIcon } })
export default class CategoryInfo extends Vue {
  @Prop({ type: String, default: "" })
  private readonly category!: string;

  private get categoryName(): string {
    if (this.category) return capitalize(this.category);

    const { category } = this.$frontmatter;

    return category ? capitalize(category) : "";
  }

  private get active(): boolean {
    return this.$themeConfig.blog !== false;
  }

  private navigate(): void {
    const path = `/category/${this.categoryName}/`;

    if (this.active && this.$route.path !== path) void this.$router.push(path);
  }

  private get hint(): string {
    return (this.$themeLocaleConfig.blog || i18n.getDefaultLocale().blog)
      .category;
  }
}
