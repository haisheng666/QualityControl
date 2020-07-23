// Step:3 conifg ECharts's path, link to echarts.js from current page.
    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
    require.config({
        paths: {
            echarts: '/static/js'
        }
    });
    
    // Step:4 require echarts and use it in the callback.
    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        
        
        function (ec) {
            //--- 折柱 ---
        	console.log("折柱开始："+getDateNow());
            var option = {
            		backgroundColor:'', 
            	    color: ['red','yellow','blue'],
            	    title : {
            	        text: 'CMNET-9808',
            	        subtext:'',
            	        x:'center',
            	        textStyle : {
            	            color: '#fff',
            	            fontSize: 20
            	        }
            	    },
            	    tooltip : {
            	        trigger: 'item',
            	        formatter: '{b}'
            	    },
					
            	    legend: {
            	        orient: 'vertical',
            	        x:'left',
            	        data:['北京','上海','广东'],
            	        selectedMode: 'single',
            	        selected:{
            	            
            	        },
            	        textStyle : {
            	            color: '#fff'
            	        }
            	    },
					
            	    toolbox: {
            	        show : false,
            	        orient : 'vertical',
            	        x: 'right',
            	        y: 'center',
            	        feature : {
            	            mark : {show: true},
            	            dataView : {show: true, readOnly: false},
            	            restore : {show: true},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    dataRange: {
            	        min : 0,
            	        max : 200,
            	        calculable : true,
            	        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            	        textStyle:{
            	            color:'#fff'
            	        }
            	    },
            	    series : [
            	        {
            	            name: '全国',
            	            type: 'map',
            	            roam: false, /*是否可以滚动条放大的意思*/
            	            hoverable: false,
            	            mapType: 'china',
            	            itemStyle:{
            	                normal:{
            	                    borderColor:'rgba(100,149,237,1)',
            	                    borderWidth:0.5,
            	                    areaStyle:{
            	                        color: '#1b1b1b'
            	                    }
            	                }
            	            },
            	            data:[],
            	            markLine : {
            	                smooth:true,
            	                symbol: ['none', 'circle'],  
            	                symbolSize : 1,
            	                itemStyle : {
            	                    normal: {
            	                        color:'#fff',
            	                        borderWidth:1,
            	                        borderColor:'rgba(30,144,255,0.5)'
            	                    }
            	                },
            	                data : [
            	                    
            	                ],
            	            },
            	            geoCoord: {
            	            	'北京': [116.4551,40.2536],
            	            	'上海': [121.4648,31.2851],
            	            	'广东': [113.5107,23.2196],
								
                            	'上海移动': [121.4648,31.2851],
                            	'上海联通': [121.4648,31.2851],
                            	'上海电信': [121.4648,31.2851],

                                '云南移动': [102.9199,25.4663],
                                '云南联通': [102.9199,25.4663],
                                '云南电信': [102.9199,25.4663],
								
                                '内蒙古移动': [111.4124,40.4901],
                                '内蒙古联通': [111.4124,40.4901],
                                '内蒙古电信': [111.4124,40.4901],
								
                                '北京移动': [116.4551,40.2537],
                                '北京联通': [116.4551,40.2537],
                                '北京电信': [116.4551,40.2537],
								
                                '吉林移动': [125.8154,44.2584],
                                '吉林联通': [125.8154,44.2584],
                                '吉林电信': [125.8154,44.2584],
								
                                '四川移动': [103.9526,30.7617],
                                '四川联通': [103.9526,30.7617],
                                '四川电信': [103.9526,30.7617],
								
                                '天津移动': [117.4219,39.4189],
                                '天津联通': [117.4219,39.4189],
                                '天津电信': [117.4219,39.4189],
								
                                '宁夏移动': [106.3586,38.1775],
                                '宁夏联通': [106.3586,38.1775],
                                '宁夏电信': [106.3586,38.1775],
								
                                '安徽移动': [117.29,32.0581],
                                '安徽联通': [117.29,32.0581],
                                '安徽电信': [117.29,32.0581],
								
                                '山东移动': [117.1582,36.8701],
                                '山东联通': [117.1582,36.8701],
                                '山东电信': [117.1582,36.8701],
								
                                '山西移动': [112.3352,37.9413],
                                '山西联通': [112.3352,37.9413],
                                '山西电信': [112.3352,37.9413],
								
                                '广东移动': [113.5107,23.2196],
                                '广东联通': [113.5107,23.2196],
                                '广东电信': [113.5107,23.2196],
								
                                '广西移动': [108.479,23.1152],
                                '广西联通': [108.479,23.1152],
                                '广西电信': [108.479,23.1152],

                                '新疆移动': [87.9236,43.5883],
                                '新疆联通': [87.9236,43.5883],
                                '新疆电信': [87.9236,43.5883],

                                '江苏移动': [118.8062,31.9208],
                                '江苏联通': [118.8062,31.9208],
                                '江苏电信': [118.8062,31.9208],
								
                                '江西移动': [116.0046,28.6633],
                                '江西联通': [116.0046,28.6633],
                                '江西电信': [116.0046,28.6633],
								
                                '河北移动': [114.4995,38.1006],
                                '河北联通': [114.4995,38.1006],
                                '河北电信': [114.4995,38.1006],
								
                                '河南移动': [113.4668,34.6234],
                                '河南联通': [113.4668,34.6234],
                                '河南电信': [113.4668,34.6234],
								
                                '浙江移动': [119.5313,29.8773],
                                '浙江联通': [119.5313,29.8773],
                                '浙江电信': [119.5313,29.8773],
								
                                '海南移动': [110.3893,19.8516],
                                '海南联通': [110.3893,19.8516],
                                '海南电信': [110.3893,19.8516],
								
                                '湖北移动': [114.3896,30.6628],
                                '湖北联通': [114.3896,30.6628],
                                '湖北电信': [114.3896,30.6628],
								
                                '湖南移动': [113.0823,28.2568],
                                '湖南联通': [113.0823,28.2568],
                                '湖南电信': [113.0823,28.2568],
								
                                '甘肃移动': [103.5901,36.3043],
                                '甘肃联通': [103.5901,36.3043],
                                '甘肃电信': [103.5901,36.3043],
								
                                '福建移动': [118.1689,24.6478],
                                '福建联通': [118.1689,24.6478],
                                '福建电信': [118.1689,24.6478],
								
                                '西藏移动': [91.1865,30.1465],
                                '西藏联通': [91.1865,30.1465],
                                '西藏电信': [91.1865,30.1465],
								
                                '贵州移动': [106.6992,26.7682],
                                '贵州联通': [106.6992,26.7682],
                                '贵州电信': [106.6992,26.7682],
								
                                '辽宁移动': [123.1238,42.1216],
                                '辽宁联通': [123.1238,42.1216],
                                '辽宁电信': [123.1238,42.1216],
								
                                '重庆移动': [107.7539,30.1904],
                                '重庆联通': [107.7539,30.1904],
                                '重庆电信': [107.7539,30.1904],
								
                                '陕西移动': [109.1162,34.2004],
                                '陕西联通': [109.1162,34.2004],
                                '陕西电信': [109.1162,34.2004],
								
                                '青海移动': [101.4038,36.8207],
                                '青海联通': [101.4038,36.8207],
                                '青海电信': [101.4038,36.8207],
								
                                '黑龙江移动': [127.9688,45.368],
                                '黑龙江联通': [127.9688,45.368],
                                '黑龙江电信': [127.9688,45.368],

            	            }
            	        },
            	        {
            	            name: '北京',
            	            type: 'map',
            	            mapType: 'china',
            	            data:[],
            	            markLine : {
            	                smooth:true,
            	                effect : {
            	                    show: true,
            	                    scaleSize: 1,
            	                    period: 30,
            	                    color: '#fff',
            	                    shadowBlur: 10
            	                },
            	                itemStyle : {
            	                    normal: {
            	                        borderWidth:1,
            	                        lineStyle: {
            	                            type: 'solid',
            	                            shadowBlur: 10
            	                        }
            	                    }
            	                },
            	                data : [
            	                    
            	                ]
            	            },
            	            markPoint : {
            	                symbol:'emptyCircle',
								/*调整城市那块的圆圈大小的 默认是10+v/10*/
            	                symbolSize : function (v){
            	                    return 2 + v/14
            	                },
            	                effect : {
            	                    show: true,
            	                    shadowBlur : 0
            	                },
            	                itemStyle:{
            	                    normal:{
            	                        label:{show:false}
            	                    },
            	                    emphasis: {
            	                        label:{position:'top'}
            	                    }
            	                },
            	                data : [
            	                    
            	                ]
            	            }
            	        }
            	
            	    ]
            };
			console.log("折柱结束："+getDateNow());
			//获取时间
            function getDateNow(){

			   var myDate = new Date();

				//获取当前年
			   var year = myDate.getFullYear();

			   //获取当前月
			   var month = myDate.getMonth() + 1;

				//获取当前日
				var date = myDate.getDate();
				var h = myDate.getHours(); //获取当前小时数(0-23)
				var m = myDate.getMinutes(); //获取当前分钟数(0-59)
				var s = myDate.getSeconds();

			   //获取当前时间

			   var now = year + '-' + conver(month) + "-" + conver(date) + " " + conver(h) + ':' + conver(m) + ":" + conver(s);
			   return now;

			}
			//日期时间处理
			function conver(s) {
				return s < 10 ? '0' + s : s;
			}
			
            //方法1
            function opt1(){
                var myChart1 = ec.init(document.getElementById('main'));
                //var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法1开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南1.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法1请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南1';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法1请求处理完毕时间："+getDateNow());
                    }
                });
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            //方法2
          //方法1
            function opt2(){
                var myChart1 = ec.init(document.getElementById('main'));
                //var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法2开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南2.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法2请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南2';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法2请求处理完毕时间："+getDateNow());
                    }
                });
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
            //方法3
            function opt3(){
                var myChart1 = ec.init(document.getElementById('main'));
                //var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法3开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南3.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法3请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南3';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法3请求处理完毕时间："+getDateNow());
                    }
                });
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            //方法4
            function opt4(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法4开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南4.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json', 
                    async : false,
                    success: function(data){
                    	console.log("方法4请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南4';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法4请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
          //方法5
            function opt5(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
                // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法5开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南5.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法5请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南5';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法5请求处理完毕时间："+getDateNow());
                    }
                });
                
            	
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
          //方法6
            function opt6(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南6.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南6';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
			
            //方法7
            function opt7(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法4开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南7.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json', 
                    async : false,
                    success: function(data){
                    	console.log("方法4请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南7';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法4请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
          //方法8
            function opt8(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
                // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法5开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南8.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法5请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南8';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法5请求处理完毕时间："+getDateNow());
                    }
                });
                
            	
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
          //方法9
            function opt9(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南9.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南9';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			

            function opt10(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法4开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南10.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json', 
                    async : false,
                    success: function(data){
                    	console.log("方法4请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南10';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法4请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
            function opt11(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
                // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法5开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南11.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法5请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南11';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法5请求处理完毕时间："+getDateNow());
                    }
                });
                
            	
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            

            function opt12(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南12.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南12';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			

            function opt13(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法4开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南13.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json', 
                    async : false,
                    success: function(data){
                    	console.log("方法4请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南13';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法4请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            

            function opt14(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
                // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法5开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南14.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法5请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南14';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法5请求处理完毕时间："+getDateNow());
                    }
                });
                
            	
                
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            

            function opt15(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/SouthChina/华南15.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华南15';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
            
            function opt16(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北1.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北1';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt17(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北2.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北2';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt18(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北3.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北3';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt19(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北4.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北4';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt20(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北5.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北5';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt21(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北6.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北6';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt22(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北7.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北7';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt23(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北8.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北8';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt24(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北9.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北9';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt25(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北10.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北10';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt26(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北11.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北11';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt27(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北12.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北12';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt28(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北13.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北13';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt29(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北14.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北14';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt30(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/NorthChina/华北15.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华北15';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
            function opt31(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/EastChina/华东_移动.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华东_移动';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt32(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/EastChina/华东_联通.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华东_联通';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
            function opt33(){
            	
                var myChart1 = ec.init(document.getElementById('main'));
               // var ecConfig = require('echarts/config');
                var keythree = 0;
				console.log("方法6开始时间："+getDateNow());
                $.ajax({
                    url:"/static/texts/EastChina/华东_电信.json",//提交访问的URL
                    type: 'post',//提交的方法
                    dataType: 'json',
                    async : false,
                    success: function(data){
                    	console.log("方法6请求回应时间："+getDateNow());
                    	option['series'][1]['markLine']['data'] = data['kone'];
                    	option['series'][1]['markPoint']['data'] = data['ktwo'];
                    	option['title']['text'] = '华东_电信';
                    	keythree = data['kthree'];
                    	myChart1.setOption(option,true);
                    	myChart1.refresh();
						console.log("方法6请求处理完毕时间："+getDateNow());
                    }
                });
               
        		window.onresize = function(){
        			myChart1.resize && myChart1.resize();
        		};
            }
			
			
            
            var indexnow = 1;
            clearInterval(timeTicket1);
			opt1();
            var timeTicket1 = setInterval(function (){
            	
            	switch((indexnow%33)+1)  //switch后面数字等于几，case加上对应数字就执行相应任务，indexnow%6为indexnow除以6的余数
            	{
            	case 1:
            	  opt1();
            	  break;
            	case 2:
            		opt2();
            	  break;
            	case 3:
            		opt3();
            	  break;
            	case 4:
            		opt4();
            	  break;
            	case 5:
            		opt5();
            		break;
            	case 6:
            		opt6();
            		break;
            	case 7:
            	  opt7();
            	  break;
            	case 8:
            		opt8();
            	  break;
            	case 9:
            		opt9();
            	  break;
            	case 10:
            		opt10();
            	  break;
            	case 11:
            		opt11();
            		break;
            	case 12:
            		opt12();
            		break;
            	case 13:
            	  opt13();
            	  break;
            	case 14:
            		opt14();
            	  break;
            	case 15:
            		opt15();
            	  break;


            	case 16:
            		opt16();
            	  break;
            	case 17:
            		opt17();
            		break;
            	case 18:
            		opt18();
            		break;
            	case 19:
            	  opt19();
            	  break;
            	case 20:
            		opt20();
            	  break;
            	case 21:
            		opt21();
            	  break;
            	case 22:
            	  opt22();
            	  break;
            	case 23:
            		opt23();
            	  break;
            	case 24:
            		opt24();
            	  break;
            	case 25:
            		opt25();
            		break;
            	case 26:
            		opt26();
            		break;
            	case 27:
            	  opt27();
            	  break;
            	case 28:
            		opt28();
            	  break;
            	case 29:
            		opt29();
            	  break;
            	case 30:
            		opt30();
            	  break;


            	case 31:
            		opt31();
            		break;
            	case 32:
            		opt32();
            		break;
            	case 33:
            		opt33();
            		break;
                
            	default:
            		
            	}
            	indexnow++;
            },10000);
        
        }
       
    );
