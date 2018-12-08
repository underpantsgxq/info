require(['../config'],function(){
	require(['mui'],function(mui){
		var index=0,
		page=2,
		rouch;
		mui.init({
            pullRefresh: {
                container: ".mui-content",
                up: {
                    contentrefresh: "正在加载..",
                    auto: true,
                    callback: function() {
                        setTimeout(function() {
                            index++
							render()
                            mui('.mui-content').pullRefresh().endPullupToRefresh(index === rouch)
                        }, 1000)
                    }
                }
            }
        })
		function render(){
			mui.ajax('/list',{
				type:"post",
				data:{
					page:index,
					size:page
				},
				dataTyoe:'json',
				success:function(res){
					rouch=res.rouch/page
					console.log(res)
						var str=""
						
						res.data.forEach(function(item){
							var baseurl='http://localhost:3000/images/'+item.imgurl
							str+=`<li class="mui-table-view-cell mui-media mui-col-xs-6">
									<a href="#">
										<img class="mui-media-object" src=${baseurl}>
										<div class="mui-media-body">${item.title}</div>
										<p>价格<span style='color:red'>${item.price}</span></p>
									</a>
								  </li>`
						})
						mui('.mui-table-view')[0].innerHTML+=str
				}
			})
		}
	})
})