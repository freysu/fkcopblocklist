// ==UserScript==
// @name         fkcopblocklist
// @namespace    https://freysu.github.io/
// @version      0.1
// @description  F**k BlackList Company
// @author       FreySu
// @match        *://*.zhipin.com/*
// @match        *://*.zhaopin.com/*
// @match        *://*.liepin.com/*
// @match        *://*.lagou.com/*
// @run-at       document-end
// @require      https://cdn.staticfile.org/limonte-sweetalert2/8.19.0/sweetalert2.all.min.js
// @require      https://unpkg.com/axios/dist/axios.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// ==/UserScript==
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable new-cap */
/* eslint-disable no-extra-semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

;(async function () {
  'use strict'

  var _config_autoSendResume_enabled = true

  var _config_hijacking_enabled = true

  var _config_autoBlock_enabled = true

  var _config_isShow = false

  const _config_blackListArr = [
    '利德世普',
    '66电子商务',
    '6979',
    '舒适空间',
    'Busgrill',
    'Gwrld(平潭)互联网科技',
    'Lachesis',
    'Lgan',
    'SIA',
    'i2',
    'kye',
    'lik',
    'tcl实业',
    '犇犇汽配信息技术',
    '阿尔法智慧电子',
    '阿尔法智汇科技',
    '阿卡索',
    '阿康健康科技',
    '阿可倍科技',
    '阿铺房产新零售科技',
    '阿铺科技',
    '阿铺新零售房产',
    '埃摩森',
    '艾宝',
    '艾可机器人',
    '艾蓝科技',
    '艾美集团',
    '艾美网络科技',
    '艾米克',
    '艾默德',
    '艾姆诗',
    '艾途教育科技集团',
    '爱递医药科技',
    '爱华国际教育',
    '爱康生物',
    '爱乐信息服务',
    '爱盟科技',
    '爱趣屋',
    '爱斯通信科技',
    '爱玩网络',
    '爱用科技',
    '爱租机科技',
    '安爸飞视达',
    '安答科技',
    '安科创新',
    '安妙',
    '安妮花',
    '安时达信息',
    '安晟博约管理咨询',
    '昂司蛋糕',
    '奥贝克网络科技',
    '奥士康',
    '澳鹏网络科技',
    '澳时铭',
    '巴士扒房',
    '百辰源',
    '百代商业',
    '百佳创展',
    '百钧成',
    '百丽国际',
    '百诺智慧健康技术',
    '百奢网络科技',
    '百事可乐',
    '佰钧成技术',
    '邦德科技',
    '包竟成传媒',
    '保信亚太生物科技',
    '保易信息科技',
    '宝安新蓝天咨询',
    '宝坤贸易',
    '宝龙达信息技术股份',
    '宝能汽车',
    '宝润兴业',
    '宝视佳',
    '宝树教育培训中心',
    '宝杨科技',
    '报业视听中心',
    '北京宝润',
    '北京鲤鹏山水教育咨询',
    '北京中外建建筑设计',
    '北京睿呈时代',
    '北美经典科技股份',
    '贝吉奥电子商务',
    '贝锐科技股份',
    '贝斯曼',
    '贝悉国际工程设计',
    '倍思科技',
    '本体软件',
    '比量科技',
    '比邻软件',
    '比特视讯',
    '比亚迪',
    '碧软',
    '必维国际检验集团',
    '冰浩贸易的文员岗位',
    '博安云',
    '博诚盈和',
    '博大建设集团',
    '博宏整合',
    '博米特科技',
    '博纳德集团',
    '博商管理科技研究院',
    '博视',
    '博图数字传媒',
    '博营电子竞技',
    '博源医疗器械',
    '博远科技创新发展',
    '博智林机器人',
    '博鳌纵横网络科技',
    '采纳品牌营销',
    '灿太科技',
    '草莓田文化发展',
    '昌建顺',
    '长帆供应链',
    '长沙规划设计院',
    '畅航',
    '城市屋超科技',
    '成谷科技',
    '程云科技',
    '赤子网络',
    '宠干线',
    '初妆科技',
    '触动力',
    '触阁科技',
    '传趣网络',
    '传世嘉业文化传媒',
    '传世品牌管理',
    '创成微电子',
    '创火文化科技',
    '创凯鑫科技',
    '创视科技',
    '创想三维',
    '创新建怡科技服务',
    '创新品牌策划',
    '创易家科技',
    '创致网络科技',
    '创智链科技',
    '春蕾维多利亚教育咨询',
    '春天阳光',
    '春田柒传媒',
    '纯途之旅',
    '慈树健康科技',
    '瓷谷科技',
    '达内',
    '大昌行',
    '大辰传媒',
    '大都港商务',
    '大华银行',
    '大牛档案',
    '大事件科技',
    '大事件网络科技',
    '大象艺术空间',
    '大易电气实业',
    '大争智能',
    '大族激光',
    '丹霄信息科技',
    '道朗教育信息咨询',
    '道歉道',
    '道通科技',
    '道源信息科技',
    '德保膳食',
    '德宝',
    '德恒顺',
    '德凯特电子',
    '德科',
    '德兰明海',
    '德乐方科技',
    '德玛特网络科技',
    '德生科技股份',
    '德至高',
    '得逸信息科技',
    '迪锋钟表',
    '迪巨智能科技',
    '迪克',
    '第一卫',
    '帝森易罗德电气',
    '点筹网',
    '点为科技',
    '电小二科技',
    '电信工程',
    '叮叮烹饪餐饮服务',
    '鼎昇德广告制品制作',
    '鼎顶文化',
    '东方风火轮科技',
    '东峰佳品科技发展',
    '东陆高新实业',
    '东美测量仪器',
    '东融信息科技',
    '东莞市瑞峰优慧垛实业投资',
    '豆沙包深圳科技',
    '哆唻咪心理咨询',
    '多彩',
    '多喜娃母婴服务',
    '多益网络股份',
    '多与乐科技',
    '舵手网络科技',
    '法本信息',
    '凡岛网络科技',
    '泛微网络',
    '方程文化传媒',
    '方糖信息技术',
    '房车宝集团',
    '飞奥达科技',
    '分期乐',
    '分之道',
    '粉蓝衣橱时尚股份',
    '锋铭贸易',
    '锋启汇信科技',
    '风道科技',
    '风火轮科技',
    '风神广告',
    '疯猴科技',
    '烽火星空通信发展',
    '福华医疗美容医院',
    '福瑞特商贸',
    '福永云创',
    '弗睿贸易',
    '弗睿网络科技',
    '赋能科技',
    '复星开心购',
    '富基电通香港股份',
    '富元网络科技',
    '富元证券',
    '改变者贸易',
    '干誉科技',
    '高灯技术',
    '高科新农技术',
    '高速行电子商务',
    '歌德老酒行',
    '歌力思',
    '歌文',
    '工易付',
    '公狼',
    '公瑾科技',
    '共享云科技',
    '古讴卡',
    '冠信信息咨询',
    '光风霁月文化科技',
    '光辉电器实业',
    '广策',
    '广点传媒',
    '广和教育',
    '广济缘实业',
    '广联赛讯',
    '广联数科',
    '广易达数据管理',
    '广鑫盛包装制品',
    '贵禾展示制品',
    '贵族街舞',
    '国豪科技',
    '国泰',
    '国育教育集团',
    '海伯森技术',
    '海岛游科技',
    '海度科技',
    '海那边',
    '海王星辰',
    '海信',
    '憨熊高尔夫',
    '翰智集团',
    '汉全科技',
    '汉斯顿净水设备',
    '杭州象涛',
    '豪恩安全科技',
    '豪末',
    '豪斯莱科技',
    '好家庭',
    '好麦啤酒销售',
    '好易科技',
    '好用信息技术',
    '核子基金',
    '和天下企业顾问',
    '合肥飞尔智能科技',
    '合泰文化发展',
    '河北衍画网络科技',
    '河汉计算机',
    '赫奕信息科技',
    '恒大集团',
    '恒大智能科技',
    '恒驱电机',
    '恒盛时代',
    '恒泰德电子商务',
    '恒天吉科技技术发展',
    '恒沃源商务',
    '恒誉光明运输集团',
    '恒裕商业管理',
    '恒鑫运',
    '鸿联九五',
    '鸿勤盛世电子科技',
    '鸿亿防伪',
    '鸿正软件技术',
    '洪京科技',
    '宏庆信息技术',
    '宏泰阳科技',
    '宏禧互动科技',
    '弘桉数据技术',
    '红海云计算股份',
    '红阳光能源技术',
    '红橘',
    '湖南光合作用',
    '虎硕教育科技',
    '互联艾特网络科技',
    '互联网港湾网络技术',
    '花儿绽放网络科技',
    '花狸文化传媒',
    '花漾美天医疗美容诊所',
    '华安众创',
    '华邦控股',
    '华邦美好家园养老集团',
    '华创企服会计事务',
    '华电智能股份',
    '华付信息',
    '华翰物流',
    '华立汉唐',
    '华南三弦',
    '华南三弦科技',
    '华磐网络科技',
    '华秋电子',
    '华软互联科技',
    '华瑞研能科技',
    '华山威海电子',
    '华生大家居集团',
    '华氏实业',
    '华硕电脑',
    '华思旭科技',
    '华苏',
    '华特星博科技',
    '华通玖安',
    '华项科技',
    '华义贸易',
    '华茵健康',
    '华越无人机技术',
    '华云中盛科技股份',
    '华展国际',
    '华瀚',
    '欢乐峰',
    '环球跳动深圳传媒',
    '环游',
    '徽忆',
    '慧订',
    '惠泉天下',
    '会一联合网络科技',
    '汇和聚力',
    '汇桔网',
    '绘佰',
    '绘海',
    '绘麦',
    '绘纳',
    '火火兔电商部',
    '火腾科技',
    '霍迈',
    '货拉拉',
    '机乐堂',
    '极飞科技股份',
    '极联股份',
    '极氪',
    '集群车宝汽车连锁服务',
    '及时沟通广告',
    '几何显示科技',
    '几素',
    '嘉丰品牌管理',
    '嘉华众力科技',
    '嘉兰曼科技',
    '嘉立创科技',
    '嘉晟集团',
    '佳鸿集团控股',
    '佳鸿名车投资',
    '尖果互动',
    '简一爱科技服装',
    '减字科技',
    '健创电子',
    '健康信息产业',
    '健新科技',
    '建侨设计院',
    '建筑港',
    '建筑设计研究总院',
    '江南阳光',
    '江西巨网科技',
    '江西神起信息技术',
    '皆智网络科技',
    '杰奥教育',
    '杰比电器',
    '杰美晟模具',
    '杰思谷科技',
    '洁德创新技术',
    '洁修哥科技服务',
    '金海智控科技',
    '金杰运通',
    '金隆兴维',
    '金录咨询',
    '金马',
    '金山移动',
    '金文网络科技',
    '金钥匙控股集团',
    '金照明科技股份',
    '锦读科技',
    '锦泰宏企业服务',
    '锦瀚',
    '进汇科技',
    '鲸特科技',
    '鲸座科技',
    '惊喜网购',
    '惊喜网购科技',
    '精点数据科技股份',
    '精准健康',
    '景福元记珠宝',
    '竞泽网络科技',
    '久富',
    '九华星科技',
    '九明药品',
    '九派创新',
    '九像',
    '九象数字科技',
    '九寻木',
    '聚慧网络科技',
    '聚焦网络技术',
    '聚迈',
    '聚优乐科技',
    '聚鑫科技文化',
    '巨海教育培训',
    '巨尚传媒',
    '巨世科技股份',
    '骏丰频谱',
    '卡恩珠宝',
    '卡联科技股份',
    '开畅财税',
    '开泰传媒',
    '开域国际控股',
    '凯度',
    '凯联网络科技',
    '凯铭电气照明',
    '凯琦供应链',
    '看房网科技',
    '康程软件',
    '康夫电商',
    '康康体检网',
    '康美药业广东发展',
    '康铭盛实业股份',
    '康纳未来',
    '康云',
    '科迈',
    '科思集团',
    '科卫',
    '科西',
    '科源泰实业',
    '刻锐智能',
    '客一客',
    '酷开网络科技',
    '酷看文化',
    '跨越速运',
    '宽夫熟红茶',
    '蓝鸽集团',
    '蓝禾',
    '蓝库云',
    '蓝色冰川教育在线',
    '蓝兔科技',
    '蓝月亮',
    '蓝韵',
    '蓝之海供应链技术',
    '朗程师地域景观规划设计',
    '朗恒信息技术',
    '浪淘通信科技',
    '乐播心田',
    '乐的文化',
    '乐京传媒',
    '乐客咨询',
    '乐能电子科技',
    '乐普医疗',
    '乐其网络科技',
    '乐图技术',
    '乐信集团',
    '乐言',
    '乐摇摇',
    '乐有家',
    '乐鱼供应链管理',
    '雷德蒙电器',
    '雷锋网',
    '雷诺表',
    '雷诺麦凯莱',
    '里刻文化',
    '丽佳居装饰',
    '丽晶软件',
    '丽天家居',
    '历美科技',
    '利孚',
    '立川信息科技',
    '立泰教育',
    '立中祥科技',
    '力动康体',
    '联动未来',
    '联合运通',
    '联旗电子',
    '联塑科技',
    '联新',
    '联众互动科技',
    '莲藕健康科技',
    '脸谱',
    '量子水生态科技',
    '林氏木业深圳',
    '林黛玉控股集团',
    '零创网络科技',
    '零阶场域',
    '零壹创新',
    '灵美文化传媒',
    '灵狮科技',
    '六感科技',
    '六桂福珠宝',
    '六桂盛世',
    '六合同春',
    '龙光',
    '龙嘉珠宝',
    '楼柿科技',
    '陆核科技',
    '绿点包装',
    '绿苹果科技',
    '绿瘦',
    '罗兰美特科技',
    '罗马仕科技',
    '洛克国际软装',
    '洛克韦陀科技',
    '妈妈网盛成科技',
    '麻帮',
    '玛丝菲尔',
    '玛俪琳',
    '马力人力',
    '马荣教育卡通城幼儿园',
    '麦娇奴服装',
    '麦凯莱',
    '麦哲伦传媒',
    '迈丘景观设计',
    '迈瑞医疗',
    '迈远',
    '梅利号',
    '媒体港',
    '美国W&P',
    '美莱口腔门诊',
    '美丽莱国际化妆品',
    '美律电子',
    '美茂科技',
    '美仕澳',
    '美味不用等',
    '美粤文化科技',
    '萌萌哒',
    '萌悦爱达',
    '盟重互娱科技',
    '梦家园美容',
    '梦金园珠宝',
    '米多网络科技',
    '米兰登服饰',
    '米乐鱼',
    '蜜蜂在线',
    '幂加和私募基金',
    '秒音科技',
    '明喆集团',
    '明德教育培训',
    '明辉智能',
    '明略科技',
    '明仕达光电',
    '明信测试设备',
    '名创优品',
    '名锐讯动信息科技',
    '蘑菇网咖',
    '摩杜云信息科技',
    '摩士龙实业',
    '摩天之星',
    '魔方国际环境艺术设计',
    '莫昆信息科技',
    '默尼信息',
    '慕可生物科技',
    '木与木',
    '木子文化艺术',
    '耐拓能源科技',
    '南昌宝创达信息技术',
    '南方风火轮科技',
    '南粤云视科技',
    '南嫣花里',
    '尼罗河移动互联科技',
    '柠米贸易',
    '宁安消防',
    '诺腾优策管理咨询',
    '欧陆通',
    '欧亚汇餐饮企业',
    '欧阳氏/橙荟传媒',
    '派宝机器人',
    '派菲爱宠',
    '攀特体育用品',
    '澎智教育',
    '鹏博士',
    '鹏城城乡建设集团',
    '鹏城新农业开发',
    '鹏城印象文化传媒',
    '鹏城智农发展',
    '鹏利集团',
    '鹏优科技',
    '鹏远企业服务',
    '霹雷深圳拓扑电商咨询',
    '品尖建设',
    '品拉索设计',
    '平凡信仰',
    '普洱梧桐庄园',
    '普鲁特斯科技',
    '普盛网络',
    '七彩童年',
    '七朵文化',
    '奇酷',
    '齐天智能方案设计',
    '企顺顺',
    '启天印刷',
    '千峰技术',
    '千仕信息科技',
    '千誉科技',
    '千纸鹤',
    '千兹电子',
    '乾派文化',
    '钱大妈农产品',
    '前海必胜道网络科技',
    '前海鸿远辰',
    '前海建筑节能科技',
    '前海金钥匙基金管理',
    '前海麦格美',
    '前海数据服务',
    '前海拓扑',
    '前海梧',
    '前海亚讯电子商务',
    '前海一方',
    '前海一方恒融',
    '前海一方科技集团',
    '前海一方商业保理',
    '青创时代创意',
    '青云端信息科技',
    '轻软',
    '轻松到家',
    '轻喜到家',
    '趣互联科技',
    '趣买票科技',
    '全程云科技',
    '全朗教育信息科技',
    '全棉时代',
    '全民严选',
    '全球购骑士特权',
    '全球汇网络技术',
    '人民日报',
    '荣邦科技',
    '荣耀电力',
    '融合通信股份',
    '融优科技',
    '软融教育科技',
    '软通动力',
    '瑞登数字科技',
    '瑞东文化',
    '瑞声科技',
    '瑞思创意文化',
    '瑞淘吉',
    '瑞沃德生命科技',
    '瑞修得信息科技',
    '锐途电子商务',
    '润丰数码技术',
    '洒脱教育',
    '赛盒科技',
    '赛诺金',
    '赛维时代科技股份',
    '赛意信息科技股份',
    '三合科技',
    '三绿',
    '三毛信息科技',
    '三盟科技股份',
    '三维家科技',
    '叁陆伍科技服务',
    '森塞尔美术教育',
    '沙美贸易',
    '汕尾秉政软件',
    '上海汉得',
    '尚层设计',
    '尚品宅配',
    '尚游',
    '少女派',
    '少女派科技',
    '邵晨电子商务',
    '身边云',
    '深海创新',
    '深华物业',
    '深脑科技',
    '深业实业',
    '深优荣鼎科技',
    '深证博澳财务股份',
    '神盾信息科技',
    '神牛摄影',
    '神投互动科技',
    '神州联保',
    '沈阳思诺科技',
    '生命码科技',
    '升码科技',
    '盛禾达酒业',
    '圣马歌',
    '十方教育',
    '石家庄翰纬医疗设备',
    '石头兄弟感官设计',
    '时创意电子',
    '时光秀科技',
    '时计宝商贸',
    '时刻文化',
    '实信达',
    '世纪恒程知识产权',
    '世纪美尚（广州）',
    '仕锦源科技',
    '视戈传媒',
    '视可佳网络科技',
    '舒适空间',
    '树客电子商务',
    '树泽',
    '数虎图像股份',
    '数块科技',
    '数位大数据',
    '数钛芯',
    '双龙口腔',
    '双木数字科技',
    '顺电',
    '顺为信息科技',
    '斯贝达电子',
    '思谷国际',
    '思科兴',
    '思力智慧',
    '思芮科技',
    '丝宜灯饰',
    '肆块伍半杯咖啡文化管理',
    '四方互动',
    '四季正扬网络科技',
    '四驾马车',
    '四块科技',
    '四正电商',
    '松堡王国',
    '松华科技',
    '松鼠网络科技',
    '搜发网络科技',
    '苏交科',
    '素而美',
    '素萃化妆品',
    '肃羽',
    '索乐文化',
    '索未来科技',
    '塔下文化传播',
    '碳宝贝',
    '探迹',
    '炭舍餐饮管理',
    '桃行科技股份',
    '桃园伟业',
    '陶悦',
    '特艺达装饰设计工程',
    '腾辉',
    '腾晶科技',
    '腾为视讯科技',
    '天博检测',
    '天成食品',
    '天川电气',
    '天大实业',
    '天地互联科技（广州）',
    '天方达健信科技股份',
    '天峰酷盯科技股份',
    '天赋时',
    '天高软件科技',
    '天诺智能',
    '天时网',
    '天溯计量',
    '天王表',
    '天艺文化',
    '天悦创意文化传播',
    '天翊瑞霖智能科技',
    '通联',
    '通旭',
    '同创创精密电子',
    '同天下科技',
    '童程童美',
    '童亿科技',
    '头豹科技',
    '头等舱互联科技',
    '图拉斯',
    '图腾',
    '图友',
    '途径信息',
    '涂百年新型材料',
    '涂画美术',
    '土巴兔',
    '拓柏景观设计',
    '拓略计算机',
    '瓦赛科技',
    '外卖名堂',
    '湾畔电子商务',
    '万旗服饰',
    '万事胜意',
    '万拓科创',
    '万兴科技',
    '王力智能科技',
    '网能',
    '网众共创',
    '旺龙智能科技',
    '望信科技',
    '威加实业',
    '威马设计',
    '威派文化',
    '威学一百',
    '微波互动',
    '微创业电子商务',
    '微访谈传媒',
    '微革',
    '微科通讯设备',
    '微龙科技',
    '微脉科技',
    '微盟',
    '微拓天下电子商务',
    '微盐科技传媒',
    '微娱时代',
    '唯镜电子商务',
    '唯智信息技术',
    '为华网络',
    '维超智能科技',
    '伟沦建材',
    '纬亚云网络科技',
    '蔚壹科技',
    '尉翔文化传媒',
    '卫安智能',
    '文川实业',
    '文乐活贸易',
    '稳健医疗',
    '问止中医健康科技',
    '沃菲数字营销',
    '无限进制科技',
    '梧桐庄园',
    '五行创新文化传播',
    '物美南方科技',
    '西格玛',
    '西美国际化妆品',
    '希川皮肤医疗',
    '希斯教育',
    '希希迪迪',
    '希音',
    '犀鸥设计',
    '细刻',
    '厦门歆薇服饰',
    '先健科技',
    '显扬科技',
    '相信未来网络科技',
    '香港汇创国际建筑',
    '香港捷胜电子',
    '想想广告',
    '响邻',
    '向蜜鸟科技',
    '小橙子',
    '小怪兽雾化科技',
    '小迈网络科技',
    '小衫重叠',
    '小糖人科技',
    '小希网络科技',
    '小象',
    '小心诗首饰',
    '小义信息技术',
    '笑响',
    '芯康首创电子科技',
    '芯阳创展',
    '欣海文化艺术培训',
    '欣盛商科技',
    '欣芝妍化妆品',
    '新邦智联科技',
    '新创天下网络科技',
    '新航道国际教育集团',
    '新恒利达投资',
    '新居网',
    '新快报社',
    '新蓝天投资',
    '新又好集团',
    '新致方舟',
    '新中新集团',
    '新洲合众电子',
    '心云飞羽',
    '信诚',
    '信丰',
    '信航道',
    '星辰游戏科技',
    '星动文化艺术发展',
    '星米科技',
    '星商电子商务',
    '星一代科技',
    '星赞信息科技',
    '兴迈',
    '兴梦电子商务',
    '兴图科技',
    '行动元',
    '熊瞅瞅科技',
    '旭航科技集团',
    '雪松控股集团',
    '寻找母星网络技术',
    '迅通技术',
    '压寨网络',
    '雅昌文化集团',
    '雅文',
    '雅鑫建筑',
    '亚美信息科技',
    '亚声威格',
    '亚桐科技',
    '亚翔精密塑胶五金制品',
    '研胜科技',
    '言语萌宠',
    '燕加隆家居建材股份',
    '扬盛计算机',
    '洋沃电子',
    '阳光医疗美容',
    '耀华实验学校',
    '耀蓝科技',
    '野望传媒',
    '一境',
    '一块买吧电子商务',
    '一起户外装备',
    '一星辰科技',
    '一直玩科技',
    '壹邦健康产业集团',
    '壹鸽科技',
    '壹健康',
    '壹秀科技',
    '医佳康大药房',
    '医咖来了健康科技',
    '医启科技',
    '医通软件',
    '医信互联网',
    '医信科技',
    '铱铠医疗',
    '伊安贸易',
    '宜采科技',
    '以星',
    '艺皇文化活动',
    '艺暄设计',
    '易佰网络科技',
    '易宝',
    '易仓',
    '易车合创科技',
    '易飞杨科技',
    '易工品',
    '易联联盟',
    '易瑞生物技术',
    '易世通达',
    '亿道',
    '亿科数字科技',
    '亿上光科技',
    '亿腾',
    '亿卓实业',
    '逸仙科技股份',
    '亦云网络',
    '益诚',
    '益力盛',
    '益田',
    '益通物流项目开发',
    '异业科技',
    '银河表计股份',
    '银河七星广告',
    '银河世纪',
    '银盛集团',
    '英驰供应链',
    '英皇教育',
    '英派尔',
    '鹰硕集团',
    '赢之杰科技',
    '影儿',
    '映博智能科技',
    '映美卡莫',
    '映月网络科技',
    '涌智信息',
    '永道科技',
    '永一智控',
    '优必选',
    '优管',
    '优科创意信息技术',
    '优联网讯科技',
    '优胜仕贸易',
    '优旺特科技',
    '优学派',
    '优宜得信息科技',
    '优制云',
    '悠时科技',
    '尤迈医疗用品',
    '酉一影视文化',
    '有品',
    '有幸科技',
    '友财信息科技',
    '友人信息咨询',
    '友信信息科技',
    '余时宝',
    '与君创业投资管理',
    '禹乐',
    '禹穗信息科技',
    '宇光信息',
    '宇航机电',
    '宇阳共赢科技',
    '渊博森实业',
    '元景工艺品',
    '源利凯',
    '源兴发',
    '源溢智能供应链管理',
    '源中瑞企业科技发展',
    '缘创信息科技',
    '远界管理咨询',
    '远蓝信息科技',
    '越品餐饮',
    '跃动文化传播',
    '粤广装饰设计工程',
    '粤豪珠宝',
    '粤文娱教中心',
    '月步创新科技',
    '悦汇数据服务',
    '悦笑科技',
    '悦孚斯',
    '云创孵化器',
    '云创投资',
    '云集市',
    '云计算科技',
    '云鲸智能',
    '云链科技',
    '云天下科技',
    '云图数字科技',
    '云星电子商务',
    '云药科技',
    '云一数科',
    '云智易联科技',
    '云曦智能技术发展',
    '在意产品',
    '泽恩科技',
    '泽浩棒棒猪科技股份',
    '渣渣宝',
    '绽放工场',
    '掌世界深圳掌视互娱',
    '掌娱炫动',
    '招商华软信息',
    '招银云创',
    '甄知美康集团',
    '臻酷传媒',
    '振康医药',
    '正邦电力通讯工程',
    '正泰商业数据',
    '正中五冠口腔',
    '正鑫源实业',
    '芝麻哥教育',
    '支点科技股份',
    '知微',
    '植乐家芳香科技',
    '指通互娱',
    '指芯物联',
    '至真科技',
    '至尊宝金融',
    '至尊航空科技开发',
    '致欧科技',
    '智必选',
    '智度',
    '智汇创想',
    '智汇奇策科技',
    '智联招聘',
    '智迈汇科技',
    '智美兴科技',
    '智算科技',
    '智展未来',
    '智楠科技',
    '中安天鹏',
    '中城国兴',
    '中创传媒',
    '中电数码',
    '中航物业',
    '中嘉科技',
    '中建建筑',
    '中建科建筑技术',
    '中建普联科技',
    '中建三局绿色产业发展投资',
    '中金供应链',
    '中凯领航实业',
    '中科鼎创',
    '中科汇宸',
    '中链控股',
    '中履鞋业',
    '中南',
    '中鹏教育',
    '中青智造',
    '中软国际',
    '中软信息科技',
    '中设智控科技股份',
    '中深影视',
    '中数旅科技',
    '中信银行',
    '中研普华集团',
    '中原策划岗',
    '中正世纪',
    '中智软件开发',
    '中智卫安',
    '种子创意设计',
    '重运宝',
    '众合影视',
    '众时信息科技',
    '众兴达',
    '珠江投资',
    '筑网',
    '转转',
    '准爸妈科孕健康管理',
    '卓航国际教育',
    '卓信特',
    '啄鸟云医',
    '姿维雅',
    '紫鲸互联网科技',
    '子午文化传媒',
    '自然进步技术中心',
    '自在广告',
    '综合信兴物流',
    '纵荣设计空间',
    '尊联科技',
    '劢微机器人科技',
    '芙乐思贸易',
    '荟萃楼珠宝',
    '茗品苑贸易',
    '萱嘉投资',
    '咣叽科技',
    '嘀嗒嘀物流科技',
    '怡禄电讯科技',
    '怡亚通',
    '宸兴业科技',
    '寰讯信息科技',
    '妍丽化妆品',
    '缤纷礼科技',
    '缤客科技',
    '珥尚',
    '瓴仕数字科技',
    '昕野科技',
    '歆品汇服饰',
    '飒芙商业',
    '熠安科技',
    '祺量科技',
    '砥行科技',
    '鑫创',
    '鑫万福珠宝',
    '鑫泽源创新技术',
    '鲲鹏'
  ]

  const _config_whiteListArr = ['深圳中科西力']

  const _config_jobListDomSelectorArr = [
    {
      el: '.job-card-right .company-name',
      siteType: 1
    },
    {
      el: ".job-list-new .item .name span[class='company']",
      siteType: 1
    },
    {
      el: '.positionlist .iteminfo__line1__compname__name',
      siteType: 2
    },
    {
      el: '.job-card-pc-container .company-name',
      siteType: 3
    },
    {
      el: '.seo-home-comp-card .home-comp-info .home-comp-info-content .comp-info-title',
      siteType: 3
    },
    {
      el: '.seo-jobcard2-common .jobcard2-company-box .jobcard2-company-info .jobcard2-company-title',
      siteType: 3
    },
    {
      el: '.s_position_list .list_item_top .company .company_name a',
      siteType: 4
    }
  ]

  const _config_detailListDomSelectorArr = [
    {
      el: '.sider-company .company-info',
      siteType: 1
    },
    {
      el: '.company-banner .name',
      siteType: 1
    },
    {
      el: '.mian-company .base-info__title h1',
      siteType: 2
    },
    {
      el: '.publisher .company__title',
      siteType: 2
    },
    {
      el: '.company-header-content-name .name-right .title-box .title',
      siteType: 3
    },
    {
      el: '.company-info-container .company-card .content .name',
      siteType: 3
    }
  ]

  GM_addStyle(
    `#TManays{z-index:999999; position:absolute; left:0px; top:0px; width:100px; height:auto; border:0; margin:0;}#parseUl{position:fixed;top:80px; left:0px;}#parseUl li{list-style:none;}.TM1{opacity:0.3; position:relative;padding: 0 7px 0 0; min-width: 19px; cursor:pointer;}.TM1:hover{opacity:1;}.TM1 span{display:block; border-radius:0 5px 5px 0; background-color:#ffff00; border:0; font:bold 15px "微软雅黑" !important; color:#ff0000; margin:0; padding:15px 2px;}.TM3{position:absolute; top:0; left:19px; display:none; border-radius:5px; margin:0; padding:0;}.TM3 li{float:none; width:80px; margin:0; font-size:14px; padding:3px 10px 2px 15px; cursor:pointer; color:#3a3a3a !important; background:rgba(255,255,0,0.8)}.TM3 li:hover{color:white !important; background:rgba(0,0,0,0.8);}.TM3 li:last-child{border-radius: 0 0 5px 5px;}.TM3 li:first-child{border-radius: 5px 5px 0 0;}.TM1:hover .TM3{display:block}`
  )

  GM_setValue('_jobListJson_boss', null)
  GM_setValue('_zp_token', null)

  GM_setValue('_zl_currentJobNumbers', null)
  GM_setValue('_zl_joblist', null)
  GM_setValue('_zl_params_details', null)
  GM_setValue('_zl_params_cityIds', null)

  GM_setValue('_lp_params_resId', null)
  GM_setValue('_lp_params_jobCardList', null)

  var isTimesExhausted_bs = false
  var errMsg_bs = ''
  var isTimesExhausted_lp = false
  var errMsg_lp = ''

  Element.prototype.matches = Element.prototype.matches || ``
  Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.mozMatchesSelector

  const _historyWrap = function (type) {
    const orig = history[type]
    const e = new Event(type)
    return function () {
      const rv = orig.apply(this, arguments)
      e.arguments = arguments
      window.dispatchEvent(e)
      return rv
    }
  }
  history.pushState = _historyWrap('pushState')
  history.replaceState = _historyWrap('replaceState')

  window.addEventListener('pushState', function (e) {
    console.log('pushState! ')
    var firstRunFlag = document.getElementById('uselessDiv')
    if (firstRunFlag == null) {
      var detailPageReg = RegExp(
        /(www|m)?\.(zhipin|zhaopin|liepin|lagou)\.com\/(job_detail|gongsi|gongsir|companydetail|company|job|lptjob)/
      )
      if (
        detailPageReg.test(location.href) ||
        location.host === 'jobs.zhaopin.com'
      ) {
        return console.info('检测到当前可能为公司详情页或招聘信息详情页')
      }
      console.info('检测到翻页!')
      const uselessDiv = document.createElement('div')
      uselessDiv.id = 'uselessDiv'
      uselessDiv.style.display = 'none'
      document.body.append(uselessDiv)
      setTimeout(() => {
        autoBlock_mainFn(
          false,
          myUtils.uniqueArr(_config_blackListArr),
          myUtils.uniqueArr(_config_whiteListArr),
          2,
          _config_jobListDomSelectorArr
        )
        setTimeout(() => {
          var sss = document.getElementById('uselessDiv')
          if (sss !== null) {
            document.body.removeChild(uselessDiv)
          }
        }, 5)
      }, 3000)
    } else {
      console.log('firstRunFlag: ', firstRunFlag)
      firstRunFlag.remove()
    }
  })

  const myToast = {
    /**
     * @description toast通知
     * @param {string} type "success", "error", "warning", "info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {string} html html类型内容，选填
     * @param {string} position 显示位置
     */
    normal: function (type, title, timer, position = 'center', html = null) {
      const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        showCloseButton: true
      })
      Toast.fire({
        type,
        title,
        html,
        timer
      })
    },
    /**
     * @description 不控制的常规弹窗
     * @param {string} type "success","error","warning","info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {boolean} isHtml text or html
     * @param {string} content 内容
     */
    multipleNotControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了'
      }).then((result) => {
        confirmCallBack(result)
      })
    },
    multipleControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      }).then((result) => {
        confirmCallBack(result)
      })
    }
  }

  const myUtils = {
    /**
     *
     * @param {object} parent 被监听的元素的父节点，也可以是document
     * @param {Node} selector 被监听的dom元素
     * @param {Number} timeout 超时跳出时间，默认为0，则等到出现为止，大于0才超时跳出
     * @returns
     */
    getElement: function (parent, selector, timeout = 0) {
      return new Promise((resolve) => {
        let result = parent.querySelector(selector)
        if (result) return resolve(result)
        let timer
        const mutationObserver =
          window.MutationObserver ||
          window.WebkitMutationObserver ||
          window.MozMutationObserver
        if (mutationObserver) {
          const observer = new mutationObserver((mutations) => {
            for (const mutation of mutations) {
              for (const addedNode of mutation.addedNodes) {
                if (addedNode instanceof Element) {
                  result = addedNode.matches(selector)
                    ? addedNode
                    : addedNode.querySelector(selector)
                  if (result) {
                    observer.disconnect()
                    timer && clearTimeout(timer)
                    return resolve(result)
                  }
                }
              }
            }
          })
          observer.observe(parent, {
            childList: true,
            subtree: true
          })
          if (timeout > 0) {
            timer = setTimeout(() => {
              observer.disconnect()
              return resolve(null)
            }, timeout)
          }
        } else {
          const listener = (e) => {
            if (e.target instanceof Element) {
              result = e.target.matches(selector)
                ? e.target
                : e.target.querySelector(selector)
              if (result) {
                parent.removeEventListener('DOMNodeInserted', listener, true)
                timer && clearTimeout(timer)
                return resolve(result)
              }
            }
          }
          parent.addEventListener('DOMNodeInserted', listener, true)
          if (timeout > 0) {
            timer = setTimeout(() => {
              parent.removeEventListener('DOMNodeInserted', listener, true)
              return resolve(null)
            }, timeout)
          }
        }
      })
    },
    uniqueArr: (arr) => Array.from(new Set(arr)),
    sleep: function (duration) {
      return new Promise((resolve) => {
        setTimeout(resolve, duration)
      })
    },
    /**
     *
     * @param {Array} toArr 要分割的数组
     * @param {Number} eqLen 等长值
     * @returns newArr
     */
    sliceArrBeEQLengthGroup: (toArr, eqLen) => {
      let index = 0
      const newArr = []
      while (index < toArr.length) {
        newArr.push(toArr.slice(index, (index += eqLen)))
      }
      return newArr
    },
    /**
     * async/await 的错误处理方法 1. try...catch 2. async/await 本质就是 promise 的语法糖
     * @param {promise} promise 要执行的promise
     * @returns {array} [err,rs] err:错误码，data:结果
     */
    awaitWrap: function (promise) {
      return promise.then((data) => [null, data]).catch((err) => [err, null])
    },
    debounce: function (fn, delay) {
      let timeout = null
      return function () {
        const args = arguments
        if (timeout) window.clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    // JS对象转url参数
    objectToQuery: function () {
      const obj = arguments[0]
      const prefix = arguments[1]
      if (typeof obj !== 'object') return ''
      const attrs = Object.keys(obj)
      return attrs.reduce((query, attr, index) => {
        // 判断是否是第一层第一个循环
        if (index === 0 && !prefix) query += '?'
        if (typeof obj[attr] === 'object') {
          const subPrefix = prefix ? `${prefix}[${attr}]` : attr
          query += this.objectToQuery(obj[attr], subPrefix)
        } else {
          if (prefix) {
            query += `${prefix}[${attr}]=${obj[attr]}`
          } else {
            query += `${attr}=${obj[attr]}`
          }
        }
        // 判断是否是第一层最后一个循环
        if (index !== attrs.length - 1) query += '&'
        return query
      }, '')
    }
  }

  function addXMLRequestCallback(callback) {
    var oldSend, i
    if (XMLHttpRequest.callbacks) {
      XMLHttpRequest.callbacks.push(callback)
    } else {
      XMLHttpRequest.callbacks = [callback]
      oldSend = XMLHttpRequest.prototype.send
      XMLHttpRequest.prototype.send = function () {
        for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
          XMLHttpRequest.callbacks[i](this)
        }
        oldSend.apply(this, arguments)
      }
    }
  }

  addXMLRequestCallback(function (xhr) {
    xhr.addEventListener('load', function () {
      if (
        _config_hijacking_enabled &&
        xhr.readyState === 4 &&
        xhr.status === 200
      ) {
        var fRes
        var resUrl = new URL(xhr.responseURL)
        if (resUrl.origin.indexOf('apic.liepin.com') !== -1) {
          if (
            resUrl.pathname === '/api/com.liepin.usercx.pc.user.base-property'
          ) {
            if (isTimesExhausted_lp) {
              console.log(errMsg_lp)
              // myToast.normal('error', errMsg_lp, 5000, 'center')
              return false
            }
            fRes = JSON.parse(xhr.responseText)
            console.info('resId', fRes.data.resId)
            GM_sendMessage('_lp_params_resId', fRes.data.resId)
            window.stop()
            console.log('dddd')
          } else if (
            resUrl.pathname === '/api/com.liepin.searchfront4c.pc-search-job'
          ) {
            // fRes.data.data.jobCardList // 工作列表
            // fRes.data.data.jobCardList[0].comp.compName // 公司名字
            // fRes.data.data.jobCardList[0].comp.compStage // 公司阶段
            // fRes.data.data.jobCardList[0].comp.compScale // 公司规模
            if (isTimesExhausted_lp) {
              console.log(errMsg_lp)
              // myToast.normal('error', errMsg_lp, 5000, 'center')
              return false
            }
            fRes = JSON.parse(xhr.responseText)
            console.log(fRes.data.data.jobCardList)
            GM_sendMessage('_lp_params_jobCardList', fRes.data.data.jobCardList)
          }
        } else if (resUrl.origin.indexOf('zhipin.com') !== -1) {
          if (isTimesExhausted_bs) {
            console.log(errMsg_bs)
            fRes = JSON.parse(xhr.responseText)
            // myToast.normal('error', errMsg_bs, 5000, 'center')
            return false
          }
          if (resUrl.pathname === '/wapi/zpgeek/search/joblist.json') {
            // _jobListJson_boss = fRes
            fRes = JSON.parse(xhr.responseText)

            GM_sendMessage('_jobListJson_boss', fRes.zpData.jobList)
          } else if (resUrl.pathname === '/wapi/zppassport/get/zpToken') {
            fRes = JSON.parse(xhr.responseText)

            GM_sendMessage('_zp_token', fRes.zpData.token)
          }
        } else if (resUrl.origin.indexOf('fe-api.zhaopin.com') !== -1) {
          if (
            resUrl.pathname === '/c/i/user/detail' ||
            resUrl.pathname === '/c/i/city-page/user-city'
          ) {
            fRes = JSON.parse(xhr.responseText)
            GM_sendMessage('_zl_params_details', {
              _resumeNumber: fRes.data.Resume.ResumeNumber,
              _at: resUrl.searchParams.get('at'),
              _rt: resUrl.searchParams.get('rt'),
              _x_zp_client_id: resUrl.searchParams.get('x-zp-client-id'),
              _x_zp_page_request_id: resUrl.searchParams.get(
                'x-zp-page-request-id'
              )
            })
            GM_sendMessage('_zl_params_cityIds', fRes.data.code)
          } else if (
            resUrl.pathname === '/c/i/search/positions' &&
            resUrl.searchParams.get('c1K5tw0w6_') !== null &&
            resUrl.searchParams.get('MmEwMD') !== null
          ) {
            if (fRes.data && fRes.code === 200) {
              fRes = JSON.parse(xhr.responseText)

              GM_sendMessage('_zl_joblist', fRes.data.list)
            }
          }
        } else {
          resUrl.href !==
            'https://statistic.liepin.com/statisticPlatform/tLog/v2' &&
            resUrl.href !==
              'https://api-cbp-baizhong.liepin.com/api/com.liepin.cbp.baizhong.op.v2-show-4pc' &&
            resUrl.href !==
              'https://apidok.liepin.com/api/com.liepin.bd.p.v3.get-all-dq' &&
            resUrl.href !==
              'https://statistic.liepin.com/statisticPlatform/tLog' &&
            resUrl.href !==
              'https://api-cbp-baizhong.liepin.com/api/com.liepin.cbp.baizhong.op.v2-log-4pc' &&
            console.log(resUrl)
        }
      }
    })
  })

  function GM_onMessage(label, callback) {
    GM_addValueChangeListener(label, async function () {
      await callback.apply(undefined, arguments[2])
    })
  }
  function GM_sendMessage(label) {
    GM_setValue(label, Array.from(arguments).slice(1))
  }

  GM_onMessage('_jobListJson_boss', async function (src) {
    if (isTimesExhausted_bs) {
      console.log(errMsg_bs)
      // myToast.normal('error', errMsg_bs, 5000, 'center')
      return false
    }
    console.log('[onMessage]', '_jobListJson_boss', '=>', src)
    if (_config_autoSendResume_enabled && GM_getValue('_zp_token') !== null) {
      console.log('开始发起沟通')
      await autoSendResume_boss_main(
        GM_getValue('_zp_token')[0],
        GM_getValue('_jobListJson_boss')[0]
      )
    } else {
      console.log('没有获取到zp_token哦，尝试获取！')
      var zp_token = await autoSendResume_boss_get_zp_token()
      await autoSendResume_boss_main(
        zp_token,
        GM_getValue('_jobListJson_boss')[0]
      )
    }
  })

  GM_onMessage('_zp_token', async (src) => {
    console.log('[onMessage]', '_zp_token', '=>', src)
  })

  GM_onMessage('_zl_params_details', async (src) => {
    console.log('[onMessage]', '_zl_params_details', '=>', src)
  })

  GM_onMessage('_zl_params_cityIds', async (src) => {
    console.log('[onMessage]', '_zl_params_cityIds', '=>', src)
    await autoSendResume_zl_main(src)
  })

  GM_onMessage('_zl_currentJobNumbers', async (src) => {
    console.log('[onMessage]', '_zl_currentJobNumbers', '=>', src)
    // await autoSendResume_zl_main(GM_getValue('_zl_params_cityIds')[1])
  })

  GM_onMessage('_zl_joblist', async (src) => {
    console.log('[onMessage]', '_zl_joblist', '=>', src)
  })

  GM_onMessage('_lp_params_currentPage', async (src) => {
    console.log('[onMessage]', '_lp_params_currentPage', '=>', src)
  })

  var first_lp_params_resId = null
  var isCanCover = true
  var isCanCover1 = true
  var first_lp_params_jobCardList = null
  GM_onMessage('_lp_params_resId', async (src) => {
    console.log('[onMessage]', '_lp_params_resId', '=>', src)
    if (isCanCover) {
      first_lp_params_resId = src
    }
    isCanCover = false
  })

  GM_onMessage('_lp_params_jobCardList', async function (src) {
    if (isCanCover1) {
      first_lp_params_jobCardList = src
    }
    isCanCover1 = false
    if (isTimesExhausted_lp) {
      console.log(errMsg_lp)
      // myToast.normal('error', errMsg_lp, 5000, 'center')
      return false
    }
    var resid
    var firstRunFlag = document.getElementById('uselessDiv1')
    if (firstRunFlag == null) {
      console.log('[onMessage]', '_lp_params_jobCardList', '=>', 'taichangle')
      if (
        GM_getValue('_lp_params_resId') === null ||
        GM_getValue('_lp_params_resId') !==
          '您的帐号信息已过期，请退出帐号重新登录'
      ) {
        resid = await autoSendResume_lp_get_resId()
        if (resid !== '您的帐号信息已过期，请退出帐号重新登录') {
          GM_setValue('_lp_params_resId', resid)
        }
      } else {
        resid = GM_getValue('_lp_params_resId')
      }
      console.log('resid: ', resid)

      const uselessDiv1 = document.createElement('div')
      uselessDiv1.id = 'uselessDiv1'
      uselessDiv1.style.display = 'none'
      document.body.append(uselessDiv1)
      setTimeout(async () => {
        GM_getValue('_lp_params_jobCardList') !== null &&
          (await autoSendResume_lp_main(
            GM_getValue('_lp_params_jobCardList')[0],
            resid
          ))
        setTimeout(() => {
          var usellll = document.getElementById('uselessDiv1')
          if (usellll !== null) {
            uselessDiv1.parentNode.removeChild(uselessDiv1)
          }
          console.log('uselessDiv1: ', uselessDiv1)
        }, 5)
      }, 3000)
    } else {
      console.log('firstRunFlag: ', firstRunFlag)
      firstRunFlag.remove()
    }
  })

  /**
   * 第一次运行
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   */
  async function firstRun(blackListArr, whiteListArr) {
    if (top.location === location) {
      var fixBox = {
        blockFeatureSettings: {
          title: '功能设置 - 屏蔽',
          description: '这是关于屏蔽黑名单公司的设置',
          enabled: true
        },
        autoSendResumeFeatureSettings: {
          title: '功能设置 - 投递',
          description: '这是关于投递简历的设置',
          enabled: false
        }
      }
      var div = document.createElement('div')
      div.id = 'TManays'
      div.innerHTML = `<ul id="parseUl">
      <li class="TM1">
        <span
          id="TMList"
          title="${fixBox.blockFeatureSettings.title}"
          onclick="
          myToast.normal('info',${fixBox.blockFeatureSettings.title} , 1500, 'center')
          "
          >🛠️</span
        >
        <ul class="TM3 TM4">
          <li>
            <label>
              <input
                type="checkbox"
                name=""
                id="blockFeatureSettings_isEnabled"
              />开启
            </label>
          </li>
        </ul>
      </li>
      <li class="TM1">
        <span
          id="TMSet"
          title="${fixBox.autoSendResumeFeatureSettings.title}"
          onclick="
          myToast.normal('info',${fixBox.autoSendResumeFeatureSettings.title} , 1500, 'center')
          ">⚙</span
        >
        <ul class="TM3">
          <li>
            <label
              ><input
                type="checkbox"
                id="autoSendResumeFeatureSettings_isEnabled"
              />开启</label
            >
          </li>
        </ul>
      </li>
    </ul>
    `
      document.body.appendChild(div)
      document
        .querySelector('#blockFeatureSettings_isEnabled')
        .addEventListener('click', console.log(this), false)
    }
    if (_config_autoBlock_enabled) {
      var pageType = null
      var detailPageReg = RegExp(
        /(www|m)?\.(zhipin|zhaopin|liepin|lagou)\.com\/(job_detail|gongsi|gongsir|companydetail|company|job|lptjob)/
      )
      var listReg = RegExp(/(sou|m|www)?\.(zhipin|zhaopin|liepin|lagou)\.com/)
      if (
        detailPageReg.test(location.href) ||
        location.host === 'jobs.zhaopin.com'
      ) {
        console.info('检测到当前可能为公司详情页或招聘信息详情页')
        myToast.normal(
          'success',
          '检测到当前可能为公司详情页或招聘信息详情页',
          1500,
          'top-end'
        )
        pageType = 1
        autoBlock_mainFn(
          true,
          blackListArr,
          whiteListArr,
          pageType,
          _config_detailListDomSelectorArr
        )
      } else if (listReg.test(location.href)) {
        console.info('检测到当前页面可能为岗位列表页')
        myToast.normal(
          'success',
          '检测到当前页面可能为岗位列表页',
          1500,
          'top-end'
        )
        pageType = 2
        autoBlock_mainFn(
          true,
          blackListArr,
          whiteListArr,
          pageType,
          _config_jobListDomSelectorArr
        )
      }
    }
  }

  async function autoSendResume_boss_main(zp_token, _jobListJson_boss) {
    try {
      if (isTimesExhausted_bs) {
        console.log(errMsg_bs)
        myToast.normal('error', errMsg_bs, 5000, 'center')
        return false
      }
      var newArr = _jobListJson_boss.map((item, index) => {
        return Object.assign(
          {},
          {
            jobId: item.encryptJobId,
            securityId: item.securityId,
            lid: item.lid,
            brandName: item.brandName, // 公司名
            brandIndustry: item.brandIndustry, // 公司所属行业
            brandScaleName: item.brandScaleName, // 公司规模
            brandStageName: item.brandStageName // 公司阶段
          }
        )
      })
      console.log(`总共要和${newArr.length}家公司发起沟通`)
      var err, rs, templateText
      var errorTimes = 0
      var successTimes = 0
      for (let i = 0; i < newArr.length; i++) {
        var {
          securityId,
          jobId,
          lid,
          brandName,
          brandIndustry,
          brandScaleName,
          brandStageName
        } = newArr[i]
        if (brandIndustry && brandScaleName && brandStageName) {
          templateText = `(${brandIndustry}/${brandScaleName}/${brandStageName})`
        } else if (!brandScaleName && brandStageName) {
          templateText = `(${brandIndustry}/${brandStageName})`
        } else if (brandScaleName && !brandStageName) {
          templateText = `(${brandIndustry}/${brandScaleName})`
        } else {
          templateText = ''
        }
        console.log(i)
        ;[err, rs] = await myUtils.awaitWrap(
          autoSendResume_boss_try2Contact(securityId, jobId, lid, zp_token)
        )
        if (rs) {
          console.log(
            '[success]：',
            `第${+(i + 1)}家\n${brandName}${templateText}\n问候语：${rs}`
          )
          successTimes++
          console.log('successTimes: ', successTimes)
        }
        if (err) {
          console.log(
            '[error]：',
            `第${+(i + 1)}家\n${brandName}${templateText}\n${err[0]} --- ${
              err[1]
            }`
          )
          errorTimes++
          console.log('errorTimes: ', errorTimes)
          if (err[1] === '今日沟通人数已达上限，请明天再试') {
            errMsg_bs = '今日沟通人数已达上限，请明天再试'
            console.log('已达上限啦，为你退出本次脚本！等明天再来吧')
            isTimesExhausted_bs = true
            break
          }
        }
        await myUtils.sleep(3000)
      }
      console.log(
        `与当前页面的全部公司结束沟通！\n成功：${successTimes}家；失败：${errorTimes}家`
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  function autoSendResume_boss_try2Contact(securityId, jobId, lid, zp_token) {
    return new Promise((resolve, reject) => {
      try {
        var config = {
          method: 'post',
          url: `https://www.zhipin.com/wapi/zpgeek/friend/add.json?securityId=${securityId}&jobId=${jobId}&lid=${lid}`,
          // params: {
          //   securityId,
          //   jobId,
          //   lid
          // },
          headers: {
            zp_token: zp_token
          }
        }
        axios(config)
          .then(function (result) {
            try {
              var res = result.data
              if (res && res.zpData && res.zpData !== {}) {
                if (res.zpData.greeting) {
                  resolve(res.zpData.greeting)
                } else if (res.zpData.showGreeting) {
                  resolve('已发起沟通过！')
                } else if (res.zpData.bizData) {
                  reject([
                    res.zpData.bizData.chatRemindDialog.title,
                    res.zpData.bizData.chatRemindDialog.content
                  ])
                }
              } else {
                reject('api失效了')
              }
            } catch (error) {
              console.log('error: ', error)
            }
          })
          .catch(function (error) {
            console.log(error)
            reject('error: ', error)
          })
      } catch (error) {
        console.log('error: ', error)
      }
    })
  }

  async function autoSendResume_zl_main(cityId) {
    try {
      console.log('autoSendResume_zl_main - cityId: ', cityId)
      const allHrefNodeArr = document.querySelectorAll(
        'a.joblist-box__iteminfo'
      )
      console.log('allHrefNodeArr: ', allHrefNodeArr)
      var allHrefArr = [].slice.call(allHrefNodeArr, 0)
      console.log('allHrefArr: ', allHrefArr)
      const jobNumbersArr = allHrefArr
        ? allHrefArr.map(function (el, index) {
            var txt = autoSendResume_extractParams_zl_jobNumbers(el.href)
            return { jobNumber: txt, index: index }
          })
        : []
      console.log('jobNumbersArr: ', jobNumbersArr)
      var jobNumbers = jobNumbersArr
        ? jobNumbersArr.map(function (el, index) {
            return el.jobNumber
          })
        : []
      var cityIds = Array(jobNumbers.length).fill(cityId)
      console.log('cityIds: ', cityIds)
      var obj = GM_getValue('_zl_params_details')[0]
      console.log('obj: ', JSON.stringify(obj))
      console.log('obj[_resumeNumber]', obj['_resumeNumber'])
      console.log('obj[_at]', obj['_at'])
      console.log('obj[_rt]', obj['_rt'])
      const [err, rs] = await myUtils.awaitWrap(
        autoSendResume_zl_send(
          jobNumbers,
          cityIds,
          obj['_resumeNumber'], // _zl_params_details['_resumeNumber'],
          obj['_at'], // _zl_params_details['_at'],
          obj['_rt'] // _zl_params_details['_rt']
        )
      )
      console.log('rs: ', rs)
      console.log('err: ', err)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  function autoSendResume_zl_send(jobNumbers, cityIds, resumeNumber, at, rt) {
    return new Promise((resolve, reject) => {
      try {
        console.log('1.5秒后将开始自动投！')
        setTimeout(() => {
          var config = {
            // url: `https://fe-api.zhaopin.com/c/pc/alan/jobs/application?x-zp-page-request-id=${x_zp_page_request_id}&x-zp-client-id=${x_zp_client_id}`,
            url: `https://fe-api.zhaopin.com/c/pc/alan/jobs/application`,
            method: 'POST',
            headers: {},
            data: JSON.stringify({
              jobNumbers, // 从岗位列表中提取CCXXXX数组
              cityIds, // 劫持获取city的函数 city-page/user-city
              resumeNumber: String(resumeNumber), // 劫持获取个人信息的请求 user/detail?detail=true
              at: String(at), // 劫持之前发的请求中的at和rt 以及page_r..._id 和client.id
              rt: String(rt), // 请求的链接中携带有这些参数
              // "resumeNumber": "JI782694595R90500000000",
              // "at": "2a086dd7e93a40549fc18593d485fbd1",
              // "rt": "ee3d101df4f4458dab4dabb598fbc9c9",
              language: 3,
              batched: true,
              inviteCode: '',
              ignoreIntention: 1,
              ignoreBlackType: '',
              deliveryChannelType: 1,
              pageCode: 0,
              jobSource: 'RECOMMENDATION'
            })
          }
          axios(config)
            .then((result) => {
              try {
                var res = result.data
                !res.error ? resolve(res.message) : reject(res.message)
              } catch (e) {
                console.error('[autoSendResume_zl_send]', e.message)
              }
            })
            .catch(function (error) {
              console.log(error)
            })

          //       GM_xmlhttpRequest({
          //         url: `https://fe-api.zhaopin.com/c/pc/alan/jobs/application?x-zp-page-request-id=${x_zp_page_request_id}&x-zp-client-id=${x_zp_client_id}`,
          //         method: 'POST',
          //         headers: {},
          //         data: JSON.stringify({
          //           // https://fe-api.zhaopin.com/c/i/jobs/keyword-company-search?at=2a086dd7e93a40549fc18593d485fbd1&rt=ee3d101df4f4458dab4dabb598fbc9c9&keyword=前端&filter_c_workCity=765&_v=0.01143897&x-zp-page-request-id=5b71ddc9f0264a9d8a9edd47697d7172-1664100259716-965233&x-zp-client-id=65a81d17-e643-4440-b121-5fc677123004
          //           jobNumbers, // 从岗位列表中提取CCXXXX数组
          //           cityIds, // 劫持获取city的函数 city-page/user-city
          //           resumeNumber, // 劫持获取个人信息的请求 user/detail?detail=true
          //           at, // 劫持之前发的请求中的at和rt 以及page_r..._id 和client.id
          //           rt, // 请求的链接中携带有这些参数
          //           language: 3,
          //           batched: true,
          //           inviteCode: '',
          //           ignoreIntention: 1,
          //           ignoreBlackType: '',
          //           deliveryChannelType: 1,
          //           pageCode: 0,
          //           jobSource: 'RECOMMENDATION'
          //         }),
          //         onload: function (xhr) {
          //           try {
          //             var res = JSON.parse(xhr.responseText)
          //             if (res && res.status === 200 && res.message) {
          //               resolve(res.message)
          //             } else {
          //               reject('api失效了')
          //             }
          //           } catch (e) {
          //             console.error('[autoSendResume_zl_send]', e.message)
          //           }
          //         }
          //       })
        }, 1500)
      } catch (error) {
        console.log('error: ', error)
      }
    })
  }

  function autoSendResume_extractParams_zl_jobNumbers(str) {
    var nurl = new URL(str)
    // http://jobs.zhaopin.com/CCL1422065360J40358900901.htm?refcode=4019&srccode=401901&preactionid=6ee50b40-9edd-4f31-8bfc-6a7c15e29276
    var reg = /\/([^&#]+)\.htm/
    var query = nurl.pathname.match(reg)
    return query[1] || null
  }

  // function autoSendResume_extractParams_zl_all(str) {
  //   var nurl = new URL(str)
  //   // var  str =  ?at=2a086dd7e93a40549fc18593d485fbd1&rt=ee3d101df4f4458dab4dabb598fbc9c9&_v=0.69037191&x-zp-page-request-id=9f7caf31dad0488fa737850f039291e6-1664103185404-816213&x-zp-client-id=65a81d17-e643-4440-b121-5fc677123004
  //   var reg =
  //     /\?detail=true\&at=([^&#]+)\&rt=([^&#]+)\&_v=([^&#]+)\&x-zp-page-request-id=([^&#]+)\&x-zp-client-id=([^&#]+)/
  //   var query = nurl.search.match(reg)
  //   return {
  //     at: query[1] || null,
  //     rt: query[2] || null,
  //     x_zp_page_request_id: query[4] || null,
  //     x_zp_client_id: query[5] || null
  //   }
  // }

  function autoSendResume_lp_extractJobList(
    originJobList,
    isCreateCompanyArr = false
  ) {
    return originJobList
      ? originJobList.map(function (el, index) {
          var job = el.job
          var comp = el.comp
          var obj = {
            jobIndex: String(+(index % 10)),
            jobId: String(job.jobId),
            jobKind: job.jobKind !== 2 ? String(2) : String(job.jobKind),
            info: `第${+(index + 1)}家公司\n${job.title}【${job.dq}】${
              job.salary
            }\n${comp.compName} | ${comp.compIndustry} ${
              comp.compStage ? comp.compStage : ''
            } ${comp.compScale}`
          }
          if (!isCreateCompanyArr) {
            delete obj.info
          }
          return obj
        })
      : []
  }

  async function autoSendResume_lp_main(originJobList, resId) {
    if (isTimesExhausted_lp) {
      console.log(errMsg_lp)
      myToast.normal('error', errMsg_lp, 5000, 'center')
      return false
    }
    if (resId === undefined || resId === null) {
      resId = await autoSendResume_lp_get_resId()
    }
    var newJobList = myUtils.sliceArrBeEQLengthGroup(
      autoSendResume_lp_extractJobList(originJobList, false),
      10
    )
    console.log('newJobList: ', newJobList)
    var _newJobList = myUtils.sliceArrBeEQLengthGroup(
      autoSendResume_lp_extractJobList(originJobList, true),
      10
    )
    var err, rs
    for (let i = 0; i < newJobList.length; i++) {
      ;[err, rs] = await myUtils.awaitWrap(
        autoSendResume_lp_send(resId, newJobList[i])
      )
      if (rs) {
        console.log(rs)
        var templateText = ''
        for (var j = 0; j < _newJobList[i].length; j++) {
          templateText += `\n` + _newJobList[i][j].info
        }
        console.log('templateText: ', templateText)
      }
      if (err) {
        if (err.code === '20010') {
          errMsg_lp = err.msg
          console.info(errMsg_lp)
          isTimesExhausted_lp = true
          break
        } else if (err.code === '-1401') {
          myToast.normal('warning', err.msg, 3000, 'center')
          return console.log(err.msg)
        }
      }
      await myUtils.sleep(3000)
    }
    console.log('已全部发完简历！')
  }

  function autoSendResume_lp_send(resId, jobInfo) {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json, text/plain, */*')
      myHeaders.append('Accept-Language', 'zh-CN,zh;q=0.9')
      myHeaders.append('Connection', 'keep-alive')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
      myHeaders.append('Origin', 'https://c.liepin.com')
      myHeaders.append('Referer', 'https://c.liepin.com/')
      myHeaders.append('Sec-Fetch-Dest', 'empty')
      myHeaders.append('Sec-Fetch-Mode', 'cors')
      myHeaders.append('Sec-Fetch-Site', 'same-site')
      myHeaders.append(
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
      )
      myHeaders.append('X-Client-Type', 'web')
      myHeaders.append('X-Fscp-Fe-Version', '6f6ae4a')
      myHeaders.append('X-Fscp-Std-Info', '{"client_id": "40106"}')
      myHeaders.append(
        'X-Fscp-Trace-Id',
        '9751cb68-507c-4580-ad2c-b3a6c295aca3'
      )
      myHeaders.append('X-Fscp-Version', '1.1')
      myHeaders.append('X-Requested-With', 'XMLHttpRequest')
      var urlencoded = new URLSearchParams()
      urlencoded.append('resId', resId)
      urlencoded.append('jobInfo', JSON.stringify(jobInfo))

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
        credentials: 'include'
      }
      // debugger
      fetch(
        'https://apic.liepin.com/api/com.liepin.capply.platform.apply.batch-apply',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.flag === 0 && result.code === '20010') {
            return reject({
              code: result.code,
              msg: result.msg
            })
          } else return resolve(result)
        })
        .catch((error) => reject('error', error))
    })
  }

  /**
   *
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   * @param {Node} webSelector 网页dom选择器 querySelectAll
   * @param {Number} pageType 页面类型 type:1 公司信息页、招聘详情页 type:2 招聘列表
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   * @returns {Array} [hitsCompanyArr,allCompanyArr,siteType]数组 命中的黑名单公司数组、从页面中读取到的公司名字数组，站点类型
   */
  function autoBlock_getCompanyNameArrFromPage(
    blackListArr,
    whiteListArr,
    webSelector,
    pageType,
    siteType
  ) {
    return new Promise((resolve, reject) => {
      try {
        var allCompanyArr
        if (
          typeof blackListArr === 'object' &&
          typeof whiteListArr === 'object' &&
          typeof webSelector === 'object' &&
          typeof pageType === 'number' &&
          typeof siteType === 'number' &&
          webSelector.length > 0
        ) {
          allCompanyArr = [].slice.call(webSelector, 0)

          const allCompanyNameArr = allCompanyArr
            ? allCompanyArr.map(function (el, index) {
                var txt = el.innerText
                if (
                  siteType === 2 &&
                  webSelector[0].parentNode.className === 'base-info__title'
                ) {
                  txt = txt.split('\n')[0]
                }
                return [txt, index]
              })
            : []

          var hitsCompanyArr = []
          var pattern = null

          const newBlackListArr = blackListArr.filter((blackCompany) => {
            return !whiteListArr.find((whiteCompany) => {
              return (
                whiteCompany.indexOf(blackCompany) !== -1 ||
                whiteCompany.match(new RegExp(blackCompany, 'ig')) ||
                whiteCompany === blackCompany
              )
            })
          })

          for (var a = 0; a < allCompanyNameArr.length; a++) {
            for (var i = 0; i < newBlackListArr.length; i++) {
              if (allCompanyNameArr[a][0] === newBlackListArr[i]) {
                pattern = 1
              } else if (
                allCompanyNameArr[a][0].indexOf(newBlackListArr[i]) !== -1 ||
                allCompanyNameArr[a][0].match(
                  new RegExp(newBlackListArr[i], 'ig')
                )
              ) {
                pattern = 2
              } else {
                pattern = null
              }

              pattern &&
                hitsCompanyArr.unshift({
                  bName: newBlackListArr[i],
                  oName: pattern === 2 ? allCompanyNameArr[a][0] : null,
                  documentIndex: allCompanyNameArr[a][1],
                  pattern
                })
            }
          }
          resolve([hitsCompanyArr, allCompanyArr, siteType])
        } else {
          myToast.normal('warning', '暂不支持当前页面！', 3000)
        }
      } catch (e) {
        if (e.message.indexOf('The provided selector is empty.') !== -1) {
          myToast.normal('warning', '暂不支持当前页面！', 3000)
        }
        reject(e.message)
      }
    })
  }

  /**
   * 处理返回的结果
   * @param {Array} hitsCompanyArr 结果数组
   * @param {Array} allCompanyArr 从页面中读取到的公司名字数组
   * @param {Number} pageType 页面类型 type:1 公司信息页、招聘详情页 type:2 招聘列表
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   */
  async function autoBlock_handleHitsCompanyArr(
    hitsCompanyArr,
    allCompanyArr,
    pageType,
    siteType
  ) {
    if (typeof hitsCompanyArr !== 'object' || typeof pageType !== 'number') {
      return false
    }
    if (hitsCompanyArr && hitsCompanyArr.length !== 0) {
      if (pageType === 1) {
        Swal.fire({
          title: '发现黑名单公司!!',
          type: 'error',
          // html: `<span>公司名：<span style="color:red">${tempString}</span></span><br/><br/><span class="text-muted">因为该公司在你填写的黑名单公司列表哦！<br/>如果有误判可以移除该公司！</span>`,
          html: `<span>公司名：<span style="color:red">${
            hitsCompanyArr[0].bName
          }</span></span><br/>${
            hitsCompanyArr[0].oName
              ? `<span>黑名单中匹配到的公司名：<span style="color:green">${hitsCompanyArr[0].oName}</span></span>`
              : ''
          }<br/><span style="color:#6c757d;text-align: center">------------------------------------------<br/><span style="color:#6c757d">因为该公司在你填写的黑名单公司列表哦！<br/>如果有误判可以移除该公司！</span>`,
          cancelButtonText: '收到',
          confirmButtonText: '移除该公司',
          showCancelButton: true,
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {
          // console.log(result)
        })
      } else if (pageType === 2) {
        var tempString = ''
        for (var t of hitsCompanyArr) {
          tempString += `${t.oName ? `${t.oName} =>` : ''} ${t.bName}\n`
          await autoBlock_switchBlackMode(
            _config_isShow,
            allCompanyArr[t.documentIndex],
            t.pattern,
            siteType
          )
        }
        myToast.normal(
          'info',
          `匹配到 ${
            hitsCompanyArr.length
          } 条黑名单公司！分别是：\n${tempString.substring(
            0,
            tempString.length - 1
          )}`,
          50000
        )
        console.info(
          'info',
          `\n匹配到 ${
            hitsCompanyArr.length
          } 条黑名单公司！分别是：\n${tempString.substring(
            0,
            tempString.length - 1
          )}`
        )
      }
    } else {
      myToast.normal('success', '\n恭喜你！当前页面没有黑名单公司！', 3000)
    }
    return true
  }
  /**
   *
   * @param {true} isShow 是否显示
   * @param {Node} target 要操作的dom节点
   * @param {Number} pattern 匹配模式 1.完全匹配 2.模糊匹配
   * @param {Number} siteType 站点类型 1.boss 2.智联 3.猎聘 4.拉勾
   */
  async function autoBlock_switchBlackMode(isShow, target, pattern, siteType) {
    if (!isShow) {
      if (siteType === 3) {
        // target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
        target.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
      } else {
        // target.parentNode.parentNode.parentNode.parentNode.style.display =  'none'
        target.parentNode.parentNode.parentNode.parentNode.remove()
      }
    } else {
      var bgColor = pattern === 1 ? 'red' : pattern === 2 ? 'orange' : ''

      switch (siteType) {
        case 1:
          if (location.href.indexOf('m.zhipin.com') !== -1) {
            target.parentNode.parentNode.parentNode.style.backgroundColor =
              bgColor
          }
          target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
              bgColor
          break
        case 2:
          target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
              bgColor
          break
        case 3:
          if (location.href.indexOf('liepin.com/city') !== -1) {
            target.parentNode.parentNode.parentNode.parentNode.style.border = `10px solid ${bgColor}`
          } else {
            target.parentNode.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
              bgColor
          }
          break
        default:
          console.error('操作样式出问题啦！')
          break
      }
    }
    return 'end'
  }

  async function autoBlock_mainFn(
    isfirstRun,
    blackListArr,
    whiteListArr,
    pageType,
    listDomSelectorArr,
    delay = 1000
  ) {
    var siteType = null
    var res = []
    for (let i = 0; i < listDomSelectorArr.length; i++) {
      const webSelector = listDomSelectorArr[i].el
      const b = await myUtils.getElement(document, webSelector, delay)
      if (b !== null) {
        siteType = listDomSelectorArr[i].siteType
        const [hitsCompanyArr, allCompanyArr] =
          await autoBlock_getCompanyNameArrFromPage(
            myUtils.uniqueArr(blackListArr),
            myUtils.uniqueArr(whiteListArr),
            document.querySelectorAll(webSelector),
            pageType,
            siteType
          )
        await autoBlock_handleHitsCompanyArr(
          hitsCompanyArr,
          allCompanyArr,
          pageType,
          siteType
        )
        break
      } else {
        res.push(b)
      }
    }
    console.log(res)
    console.log('first_lp_params_jobCardList: ', first_lp_params_jobCardList)
    console.log('first_lp_params_resId: ', first_lp_params_resId)
    if (
      isfirstRun &&
      res.length === listDomSelectorArr.length &&
      res[res.length - 1] === null
    ) {
      myToast.normal('warning', '暂不支持当前页面！', 3000, 'top-end')
    }
  }

  function autoSendResume_boss_get_zp_token() {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get('https://www.zhipin.com/wapi/zppassport/get/zpToken')
          .then((result) => {
            var res = result.data
            if (res.zpData) {
              resolve(res.zpData.token)
            } else {
              reject('error?:', res)
            }
          })
      } catch (error) {
        console.log('error: ', error.message)
      }
    })
  }

  function autoSendResume_lp_get_resId() {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json, text/plain, */*')
      myHeaders.append(
        'Accept-Language',
        'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
      )
      myHeaders.append('Connection', 'keep-alive')
      myHeaders.append('Content-Length', '0')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
      myHeaders.append('DNT', '1')
      myHeaders.append('Origin', 'https://www.liepin.com')
      myHeaders.append('Referer', 'https://www.liepin.com/')
      myHeaders.append('Sec-Fetch-Dest', 'empty')
      myHeaders.append('Sec-Fetch-Mode', 'cors')
      myHeaders.append('Sec-Fetch-Site', 'same-site')
      myHeaders.append(
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77'
      )
      myHeaders.append('X-Client-Type', 'web')
      myHeaders.append(
        'X-Fscp-Bi-Stat',
        '{"location": "https://www.liepin.com/zhaopin/?city=410&dq=410&pubTime=&currentPage=0&pageSize=40&key=%E5%89%8D%E7%AB%AF&workYearCode=0&compId=&compName=&compTag=&industry=&salary=&jobKind=&compScale=&compKind=&compStage=&eduLevel=&otherCity=&scene=input&suggestId="}'
      )
      myHeaders.append('X-Fscp-Fe-Version', '2e3a0e1')
      myHeaders.append('X-Fscp-Std-Info', '{"client_id": "40108"}')
      myHeaders.append(
        'X-Fscp-Trace-Id',
        'fb6d6c4e-8618-4ae1-a799-b81eae2e09c6'
      )
      myHeaders.append('X-Fscp-Version', '1.1')
      myHeaders.append('X-Requested-With', 'XMLHttpRequest')

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        credentials: 'include'
      }

      fetch(
        'https://apic.liepin.com/api/com.liepin.usercx.pc.user.base-property',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => resolve(result.data ? result.data.resId : result.msg))
        .catch((error) => reject('error', error))
      // GM_xmlhttpRequest({
      //   url: `https://apic.liepin.com/api/com.liepin.usercx.pc.user.base-property`,
      //   method: 'post',
      //   onload: function (xhr) {
      //     var res = JSON.parse(xhr.responseText)
      //     console.log('res: ', res)
      //     console.log('resId: ', res.data.resId)
      //     resolve(res.data.resId)
      //   }
      // })
    })
  }

  await firstRun(_config_blackListArr, _config_whiteListArr)
})()
