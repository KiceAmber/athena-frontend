<script lang="ts" setup>
import { Ref, onMounted, ref } from "vue";
import { reqGetArticleList } from "@/api/home/index.ts";
import { ArticleItem } from "@/api/home/type";

onMounted(() => {
	getArticleList();
});

const articleItemList: Ref<ArticleItem[]> = ref([]);

// 查询文章列表
const getArticleList = async () => {
	let res = await reqGetArticleList();
	articleItemList.value = res.data.articleList;
};
</script>

<template>
	<div class="home">
		<div class="article-list">
			<div
				class="article-item"
				v-for="item in articleItemList"
				:key="item.id"
			>
				<div class="article-image">
					<img src="/public/beach.jpg" alt="" />
				</div>
				<div class="info-txt">
					<div class="article-title">
						<span>{{ item.title }}</span>
					</div>
					<div class="article-description">
						<p>
							{{ item.description }}
						</p>
					</div>
					<div class="article-metadata">
						<svg
							t="1708144095391"
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							p-id="5153"
							width="16"
							height="16"
						>
							<path
								d="M1024 512C1024 229.230204 794.769796 0 512 0 229.230204 0 0 229.230204 0 512 0 794.769796 229.230204 1024 512 1024 794.769796 1024 1024 794.769796 1024 512ZM70.62069 512C70.62069 268.232934 268.232934 70.62069 512 70.62069 755.767066 70.62069 953.37931 268.232934 953.37931 512 953.37931 755.767066 755.767066 953.37931 512 953.37931 268.232934 953.37931 70.62069 755.767066 70.62069 512ZM512.015395 476.689655C521.717389 476.689655 529.655172 484.608406 529.655172 494.329432L529.655172 247.187809C529.655172 227.686435 513.846184 211.877464 494.344828 211.877464 474.843471 211.877464 459.034483 227.686435 459.034483 247.187809L459.034483 494.329432C459.034483 523.649148 482.752565 547.310345 512.015395 547.310345L759.157018 547.310345C778.658392 547.310345 794.467363 531.501356 794.467363 512 794.467363 492.498644 778.658392 476.689655 759.157018 476.689655L512.015395 476.689655Z"
								fill="#2c2c2c"
								p-id="5154"
							></path>
						</svg>
						<p>{{ item.createdAt }}</p>
						<svg
							t="1707545422257"
							class="icon"
							viewBox="0 0 1024 1024"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							p-id="6534"
							width="16"
							height="16"
						>
							<path
								d="M992 512c0-12-6-24-18-30l-108-60 108-60c12 0 18-12 18-30 0-12-6-24-18-30L530 68c-12-6-24-6-30 0L50 302c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 0-18 12-18 30 0 12 6 24 18 30l444 234c6 0 12 6 18 6 6 0 12 0 18-6l444-234c12-6 18-18 18-30s-6-24-18-30l-108-60 108-60c12-6 18-18 18-30zM140 332L512 140 884 332 512 530 140 332z m744 360L512 884 140 692l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48z m-372 18L140 512l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48L512 710z"
								p-id="6535"
							></path>
						</svg>
						<p>文章分类</p>
						<el-tag
							type="success"
							v-for="tagItem in item.tagList"
							:key="tagItem.id"
							>#{{ tagItem.name }}</el-tag
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	.article-list {
		.article-item {
			margin: 50px 100px;
			min-height: 200px;
			display: flex;
			justify-content: space-around;

			.article-image {
				width: 30%;
				height: 25%;
				padding-top: 15px;
				img {
					width: 100%;
					height: 100%;
					transition: all 0.3s;
					border-radius: 6px;
					box-shadow: 1px 1px 8px black;
					cursor: pointer;

					&:hover {
						transform: scale(1.05);
					}
				}
			}

			.info-txt {
				width: 70%;
				padding: 20px 50px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.article-title {
					font-size: 24px;
				}

				.article-description {
					color: #818181;
					font-size: 18px;
					height: 72px;
					p {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 4;
						overflow: hidden;
					}
				}

				.article-metadata {
					display: flex;
					align-items: center;
					color: #7f7f7f;

					svg {
						margin: 0 4px 0 0;
					}
					p {
						margin: 0 15px 0 0;
					}
				}
			}
		}
	}
}
</style>