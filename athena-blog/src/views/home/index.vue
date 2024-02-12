<script lang="ts" setup>
</script>

<template>
    <div class="home">
        <div class="article-list">
            <div class="article-item">
                <div class="article-title">
                    <a href="">这是文章标题</a>
                </div>
                <div class="article-description">
                    <a href="">
                        文文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息文章的简要描述信息章的简要描述信息
                    </a>
                </div>
                <div class="article-metadata">
                    <span style="margin-right: 20px">
                        <svg t="1707545398544" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="5373" width="16" height="16">
                            <path
                                d="M512.006169 1024c-136.761166 0-265.330233-53.260979-362.04388-149.962289S0 648.754997 0 511.993831s53.260979-265.330233 149.962289-362.031542S375.245003 0 512.006169 0s265.330233 53.248642 362.04388 149.962289S1024.012337 375.232665 1024.012337 511.993831s-53.260979 265.34257-149.962288 362.04388S648.767335 1024 512.006169 1024z m0-960.474223c-247.280473 0-448.468054 201.187581-448.468054 448.468054s201.187581 448.468054 448.468054 448.468054 448.468054-201.175243 448.468054-448.468054S759.286642 63.525777 512.006169 63.525777z"
                                fill="#231815" p-id="5374"></path>
                            <path
                                d="M786.688225 599.82448H512.006169a31.769057 31.769057 0 0 1 0-63.538115h274.682056a31.769057 31.769057 0 0 1 0 63.538115z"
                                fill="#231815" p-id="5375"></path>
                            <path
                                d="M512.006169 598.88683a31.769057 31.769057 0 0 1-31.769058-31.769057V292.435716a31.769057 31.769057 0 0 1 63.538115 0v274.682057A31.769057 31.769057 0 0 1 512.006169 598.88683z"
                                fill="#231815" p-id="5376"></path>
                        </svg>
                        <span>2024-01-02</span>
                    </span>
                    <span style="margin-right: 20px">
                        <svg t="1707545422257" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="6534" width="16" height="16">
                            <path
                                d="M992 512c0-12-6-24-18-30l-108-60 108-60c12 0 18-12 18-30 0-12-6-24-18-30L530 68c-12-6-24-6-30 0L50 302c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 0-18 12-18 30 0 12 6 24 18 30l444 234c6 0 12 6 18 6 6 0 12 0 18-6l444-234c12-6 18-18 18-30s-6-24-18-30l-108-60 108-60c12-6 18-18 18-30zM140 332L512 140 884 332 512 530 140 332z m744 360L512 884 140 692l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48z m-372 18L140 512l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48L512 710z"
                                p-id="6535"></path>
                        </svg>
                        <a href="">文章分类</a>
                    </span>
                    <span>
                        <el-tag type="success">#标签1</el-tag>
                        <el-tag type="info">#标签2</el-tag>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    .article-list {
        padding: 40px 240px;

        .article-item {
            margin-top: 40px;

            a {
                text-decoration: none;
                color: #7f7f7f;

                &:hover {
                    color: blue;
                }
            }

            .article-title {
                font-size: 24px;
                margin-bottom: 16px;
            }

            .article-description {
                font-size: 18px;
                margin-bottom: 16px;
            }

            .article-metadata {
                font-size: 1em;
                color: #7f7f7f;

                span {
                    svg {
                        vertical-align: middle; // 让图标和文字对齐
                    }
                }
            }
        }
    }
}
</style>
