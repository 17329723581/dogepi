import Vue from "vue";

import { Button, Tabs, Row, Col, Icon, Collapse, Select,Statistic, Dropdown, Menu, Carousel, 
    BackTop, Modal, Spin, notification, message, InputNumber
} from "ant-design-vue";

Vue.use(Button);
Vue.use(Tabs);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Collapse);
Vue.use(Select);
Vue.use(Statistic)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(Carousel)
Vue.use(BackTop)
Vue.use(Modal)
Vue.use(Spin)
Vue.use(InputNumber)


Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.prototype.$info = Modal.info;
Vue.prototype.$confirm = Modal.confirm;
// Vue.use(TabPane);
