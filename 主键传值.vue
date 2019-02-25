<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title></title>
		<script src="lib/vue.js"></script>
	</head>

	<body>
		<!-- 这是容器 -->
		<div id="app">
			<child :message="meseage"></child>
		</div>
		
		<div id="counter-event-example">
			<p>{{ total }}</p>
			<!-- 
			    订阅子组件内部发布的 increment 事件
			    当子组件内部 $commit('increment') 发布的时候，就会调用到父组件中的 incrementTotal 方法
			  -->
			<button-counter v-on:increment="incrementTotal"></button-counter>
		</div>
		
		<!--父件传给子件-->
		<script>
			Vue.component('child', {
				// 声明 props
				props: ['message'],
				// 就像 data 一样，prop 也可以在模板中使用
				// 同样也可以在 vm 实例中通过 this.message 来使用
				template: '<span>{{ message }}</span>'
			});
			new Vue({
				el: "#app",
				data: {
					meseage:'1'
				},
				methods: {

				}
			})
		</script>
		
		
		<!--子件传给父件 -->
		<script>
			Vue.component('button-counter', {
				template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
				data: function() {
					return {
						counter: 0
					}
				},
				methods: {
					incrementCounter: function() {
						this.counter += 1
							// 发布一个名字叫 increment 的事件
						this.$emit('increment')
					}
				},
			});
			new Vue({
				el: '#counter-event-example',
				data: {
					total: 0
				},
				methods: {
					incrementTotal: function() {
						this.total += 1
					}
				}
			});
		</script>
	</body>

</html>