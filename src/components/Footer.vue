<template>
<!-- 网页底部 -->
   <div class="footer">
      <!-- 版心区域 -->
      <div class="wrap">
        <ul class="top">
          <li>
            <img src="@/assets/images/dibu1.png" alt="" />
            <span> 正品保障 假一赔五 </span>
          </li>
          <li>
            <img src="@/assets/images/dibu2.png" alt="" />
            <span> 一网打尽 更多优惠 </span>
          </li>
          <li>
            <img src="@/assets/images/dibu3.png" alt="" />
            <span> 800城市 北上广深次日达 </span>
          </li>
          <li>
            <img src="@/assets/images/dibu4.png" alt="" />
            <span> 电子发票 报销无忧 </span>
          </li>
        </ul>
        <div class="bottom">
          <div class="service">
            <p>新手入门</p>
            <ul>
              <li><a href="#">购物保障</a></li>
              <li><a href="#">购物流程</a></li>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">联系客服</a></li>
            </ul>
          </div>
          <div class="service">
            <p>配送服务</p>
            <ul>
              <li><a href="#">货到付款区域查询</a></li>
              <li><a href="#">配送收费标准</a></li>
              <li><a href="#">快递查询入口</a></li>
              <li><a href="#">验货与签收</a></li>
            </ul>
          </div>
          <div class="service">
            <p>支付方式</p>
            <ul>
              <li><a href="#">货到付款</a></li>
              <li><a href="#">在线支付</a></li>
              <li><a href="#">银行转账/汇款 </a></li>
              <li><a href="#">其他支付方式 </a></li>
              <li><a href="#">交易安全防诈骗</a></li>
            </ul>
          </div>
          <div class="service">
            <p>售后服务</p>
            <ul>
              <li><a href="#">退换货规则</a></li>
              <li><a href="#">如何申请售后服务</a></li>
              <li><a href="#">退款及提现</a></li>
            </ul>
          </div>
          <div class="service">
            <p>我的订单</p>
            <ul>
              <li><a href="#">下单演示</a></li>
              <li><a href="#">订单状态/查询</a></li>
              <li><a href="#">订单取消</a></li>
              <li><a href="#">发票制度</a></li>
              <li><a href="#">积分规则</a></li>
            </ul>
          </div>
          <div class="service">
            <p>文轩服务</p>
            <ul>
              <li><a href="#">礼券（优惠券）</a></li>
              <li><a href="#">文轩购书卡</a></li>
              <li><a href="#">文轩畅销书推荐</a></li>
              <li><a href="#">交易条款</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped> 
.footer {
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  margin-top: 10px;
}

.footer.wrap {
  width: 100%;
  height: 200px;
}

.footer .wrap .top {
  display: flex;
}

.footer .wrap .top li {
  flex-grow: 1;
}

.footer .wrap .top li span {
  font-size: 16px;
  padding-left: 30px;
}

.footer .bottom {
  width: 100%;
  height: 200px;
  margin-top: 40px;
}
.footer .bottom .service {
  float: left;
  width: 16%;
  height: 100%;
}
.footer .bottom .service p {
  width: 50%;
  margin-left: 25%;
  font-size: 16px;
  border-bottom: 1px red solid;
  text-align: center;
}
.footer .bottom .service ul li {
  margin: 15px 50px;
}
.footer .bottom .service ul li a {
  font-size: 12px;
}

</style>