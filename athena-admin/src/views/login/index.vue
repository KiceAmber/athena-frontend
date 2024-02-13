<script setup lang="ts">
import { ref } from "vue";

// 管理员用户名和密码
const passport = ref("");
const password = ref("");

// 提交表单数据
const submitLoginForm = () => {
	console.log(`output-> `, password.value);
};
</script>

<template>
	<div class="login-container">
		<div class="login-box">
			<div class="left-pic"></div>
			<div class="right-content">
				<div class="top-text">管理员登录</div>
				<div class="admin-form">
					<input
						v-model="passport"
						type="text"
						placeholder="Username"
					/>
					<input
						v-model="password"
						type="password"
						placeholder="Password"
					/>
					<div class="tip-option">
						<span>忘记密码</span>
					</div>
					<button class="login-btn" @click="submitLoginForm">
						Login
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.login-container {
	// background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			60deg,
			rgb(225, 216, 216),
			rgb(245, 143, 160)
		);
	}

	.login-box {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		width: 67%;
		height: 65%;
		border-radius: 30px;
		box-shadow: 1px 2px 40px rgb(114, 103, 105);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: -99;
			width: 100%;
			height: 100%;
			background: url("https://s11.ax1x.com/2024/02/13/pF8t0OJ.jpg") 45%
				10% no-repeat;
			border-radius: 30px;
		}

		.left-pic {
			width: 55%;
			height: 100%;
		}

		.right-content {
			width: 45%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.937);
			border-radius: 30px;
			padding: 30px 50px;

			.top-text {
				text-align: center;
				margin: 60px 0;
				font-size: 30px;
				font-weight: 900;
				color: rgb(123, 93, 98);
			}

			.admin-form {
				display: flex;
				flex-direction: column;

				input {
					margin: 20px 50px;
					width: 80%;
					height: 40px;
					border: none;
					border: 2px solid rgba(0, 0, 0, 0.124);
					border-radius: 6px;
					color: rgb(141, 98, 105);
					padding-left: 10px;
					transition: all 0.3s;

					&:hover {
						border: 2px solid pink;
					}
					&:focus {
						color: rgb(141, 98, 105);
					}
				}

				.tip-option {
					margin: 5px 50px 10px;
					display: flex;
					justify-content: right;

					span {
						color: rgb(123, 93, 98);
						transition: all 0.3s;
						&:hover {
							cursor: pointer;
							color: rgb(255, 146, 164);
						}
					}
				}

				button {
					width: 80%;
					height: 50px;
					margin: 10px 50px;
					border: none;
					border-radius: 2px;
					background-color: rgb(255, 142, 161);
					color: white;
					transition: all 0.3s;

					&:hover {
						cursor: pointer;
					}

					&:active {
						background-color: rgb(188, 94, 110);
					}
				}
			}
		}
	}
}
</style>