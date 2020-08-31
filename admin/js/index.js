$(function () {
  //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
  $.ajax({
    type: 'get',//get或post
    url: 'http://localhost:8080/api/v1/admin/user/info',//请求的地址
    // beforeSend: function (xhr) {
    //   xhr.setRequestHeader('Authorization', 
    //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJleHAiOjIyMDAyMTk0MjcsImlhdCI6MTU5NTQxOTQyN30.0SxosqRuaXWn6C5Ze0_rnMBx8Hv_Ol3T8EAtD0FW-OYwkct_5SPHCvSwAROpgeVsOhIRkeRq4uZEkM-Rvlu0CTcjUuqNeMTB7EMhDhuPetTw3EQC3ziD6uiDjvFB5RQvDsvIhFKoPxx-QSTBQSgefssjpOBhaQWnffWwp2xMKqQ')
    // },
    // data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
    dataType: 'json',//text,json,xml,jsonp
    success: function (res) {//成功的回调函数
      if(res.code===200){
        $('.sider .user_info img').attr('src',res.data.userPic)
        $('.sider .user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
        $('.sider .user_center_link img').attr('src',res.data.userPic)
      }
    }
  })
  $('.logout').on('click',function(){
    localStorage.removeItem('token')
    window.location.href='./login.html'
  })
})