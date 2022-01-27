<template>
	<cover-view v-if="isShowTabBar" class="tab-bar">
		<cover-view v-for="item in list" :key="item.key" class="tab-bar-item" @click="switchTab(item)">
			<cover-view :class="curSelected === item.key ? 'active' : ''">
				{{ item.text }}
			</cover-view>
		</cover-view>
	</cover-view>
</template>
<script>

const tabs = [
  {
    key: 'sampler',
    pagePath: '/pages/sampler/index/index',
    text: '工作台',
  },
  {
    key: 'personal',
    pagePath: '/pages/personal/index/index',
    text: '个人中心',
  },
];
export default {
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isShowTabBar: false,
      list: [],
      curSelected: '',
    };
  },
  watch: {
    selected: {
      handler(val) {
        this.curSelected = val;
      },
      immediate: true,
    },
  },
  methods: {
    switchTab(item) {
      const url = item.pagePath;
      console.log('switchTab======');
      this.curSelected = item.key;
    },
    onShowFun() {
      const workerRole = true;
      this.list = tabs;
      this.isShowTabBar = !!workerRole;
    },
  },
};
</script>
<style lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 150rpx;
		padding-bottom: env(safe-area-inset-bottom);
		background: #fff;
		display: flex;
		border-top: 1rpx solid rgba(0, 0, 0, 0.08);
	}

	.tab-bar-item {
		flex: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.tab-bar-item cover-image {
		width: 48rpx;
		height: 48rpx;
	}

	.tab-bar-item cover-view {
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.9);
	}

	.tab-bar-item cover-view.active {
		font-size: 28rpx;
		color: blue;
	}
</style>
